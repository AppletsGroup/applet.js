import React, { useState, useEffect, useCallback } from 'react'

interface CellState {
  loading: boolean
  error: Error | null
  data: any[]
}

interface FailureProps {
  error: Error
}

interface SuccessProps {
  data: any[]
}

interface CellProps {
  Query: () => Promise<any>
  Loading: React.FC
  Empty: React.FC
  Failure: React.FC<FailureProps>
  Success: React.FC<SuccessProps>
}

export const createCell = ({
  Query,
  Loading,
  Failure,
  Empty,
  Success
}: CellProps) => {
  const Cell: React.FC = React.memo(() => {
    const [cellState, setCellState] = useState<CellState>({
      loading: true,
      error: null,
      data: []
    })

    const fetchData = useCallback(async () => {
      try {
        const data = await Query()
        setCellState((prevState) => ({
          ...prevState,
          loading: false,
          error: null,
          data
        }))
      } catch (error: unknown) {
        if (error instanceof Error) {
          setCellState({ loading: false, error, data: [] })
        }
      }
    }, [Query])

    useEffect(() => {
      fetchData()
    }, [fetchData])

    if (cellState.loading) return <Loading />
    if (cellState.error) return <Failure error={cellState.error} />
    if (!cellState.data.length) return <Empty />

    return <Success data={cellState.data} />
  })

  return Cell
}