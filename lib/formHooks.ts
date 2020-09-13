import { useState } from 'react'

interface FormFields {
  name: string
  email: string
  phone: string
  message: string
  agreed: boolean
}

type FieldData = [FormFields, (event: any) => void]

export const useFormFields = (initialState: FormFields): FieldData => {
  const [fields, setValues] = useState(initialState)

  return [
    fields,
    (event) => {
      let value

      if (event.target.name === 'agreed') {
        value = !fields.agreed
      } else {
        value = event.target.value
      }

      setValues({
        ...fields,
        [event.target.name]: value,
      })
    },
  ]
}
