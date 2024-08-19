interface CommonFieldProps {
  required: boolean
  style?: React.CSSProperties
  className?: string
  placeholder?: string
  label: string
}

interface TextFieldOptions {
  options: { multiline: boolean }
}

interface NumberFieldOptions {
  options: { range: [number, number] }
}

interface BooleanFieldOptions {
  options?: undefined
}

interface SelectFieldOptions {
  options: { selectOptions: { value: string; label: string }[]; multiple: boolean }
}

export type DynamicFieldType =
  | (CommonFieldProps & {
      type: 'text'
      options: TextFieldOptions['options']
    })
  | (CommonFieldProps & {
      type: 'number'
      options: NumberFieldOptions['options']
    })
  | (CommonFieldProps & {
      type: 'boolean'
      options?: BooleanFieldOptions['options']
    })
  | (CommonFieldProps & {
      type: 'select'
      options: SelectFieldOptions['options']
    })
