import { ChangeEvent, useState } from 'react'
import { TestField } from './FormField'


const MyForm = () => {
  return (
    <form>
      <TestField />
      <button type="submit">Submit</button>
    </form>
  )
}

export default MyForm
