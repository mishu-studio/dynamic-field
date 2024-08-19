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
      {dynamicFields.map((field, index) => {
        const { type, options, placeholder, required, className, style, label } = field

        const renderComponent = () => {
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
                  <SelectTrigger>
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
          <div
            key={index}
            className='field-container'
          >
            <Label>{label}</Label>
            {renderComponent()}
          </div>
        )
      })}
    </>
  )
}

export default DynamicFieldDisplay
