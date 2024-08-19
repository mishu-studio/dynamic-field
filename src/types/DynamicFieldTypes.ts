export type FieldType = 'text' | 'number' | 'boolean'

export interface DynamicFieldType {
  type: FieldType
  required: boolean
  range?: [number, number]
}
