import { useState, ChangeEvent } from 'react'

interface Props {
  Validation: (value: string) => Error | null
  FieldLabel: React.FC
  Field: React.FC<{ value: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void }>
  FieldError: React.FC<{ error: Error }>
}

export const declareField = ({ FieldLabel, Validation, Field, FieldError }: Props) => {
  const NewField = () => {
    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<Error | null>(null)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value
      setValue(newValue)
      setError(Validation(newValue))
    }

    return (
      <div>
        <FieldLabel />
        <Field value={value} onChange={handleChange} />
        {error && <FieldError error={error} />}
      </div>
    )
  }

  return NewField
}
