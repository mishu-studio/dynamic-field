import React from 'react'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import type { DynamicFieldType } from '../types/DynamicFieldTypes'
import { Label } from './ui/label'

interface DynamicFieldDisplayProps {
  dynamicFields: DynamicFieldType[]
}

const DynamicFieldDisplay: React.FC<DynamicFieldDisplayProps> = ({ dynamicFields }) => {
  return (
    <>
      {dynamicFields.map((field) => {
        const { type, options, placeholder, required, className, style, label } = field

        const component = () => {
          switch (type) {
            case 'number': {
              return (
                <Input
                  type='number'
                  placeholder={placeholder}
                  className={className}
                  style={style}
                  required={required}
                  min={options.range[0]}
                  max={options.range[1]}
                />
              )
            }

            case 'select': {
              return (
                <Select required={required}>
                  <SelectTrigger asChild>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {options.selectOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )
            }

            default:
              return null
          }
        }

        return (
          <>
            <form>
              <Label>{label}</Label>
              {component()}
            </form>
          </>
        )
      })}
    </>
  )
}

export default DynamicFieldDisplay
