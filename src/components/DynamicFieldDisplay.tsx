import React from 'react'
import type { DynamicFieldType } from '../types/DynamicFieldTypes'

interface DynamicFieldProps extends DynamicFieldType {}

const DynamicFieldDisplay: React.FC<DynamicFieldProps> = ({
  type,
  required,
  range
}: DynamicFieldProps) => {
  switch (type) {
    case 'number':
      return (
        <input
          type='number'
          required={required}
          min={range?.[0]}
          max={range?.[1]}
        />
      )

    default:
      break
  }
}

export default DynamicFieldDisplay
