import { ChangeEvent } from 'react'
import { declareField } from '../../src/declareField'

const MyFormField: React.FC<{ value: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void }> = (props) => (
  <input type="text" {...props} />
)

interface FieldErrorProps {
  error: Error
}

const FieldError: React.FC<FieldErrorProps> = ({ error }) => <div>{error.message}</div>

const FieldLabel = () => <label>My Input</label>

const Validation = (value: string) => {
  if (!value) {
    return new Error('This field is required')
  }
  return null
}

export const TestField = declareField({
  FieldLabel,
  Validation,
  Field: MyFormField,
  FieldError: FieldError
})