import React, { useState } from 'react'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import type { DynamicFieldType } from '../types/DynamicFieldTypes'
import { Label } from './ui/label'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from '../validation/schema'
import { FormMessage } from './ui/form'
import { Button } from './ui/button'

interface DynamicFieldDisplayProps {
  dynamicFields: DynamicFieldType[]
}

const DynamicFieldDisplay: React.FC<DynamicFieldDisplayProps> = ({ dynamicFields }) => {
  const [dataForm, setDataForm] = useState()

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: dynamicFields.reduce(
      (values, field) => ({
        ...values,
        [field.name]: ''
      }),
      {}
    )
  })

  const onSubmit = (data: any) => {
    setDataForm(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {dynamicFields.map((field, index) => {
        const { type, options, placeholder, required, className, style, label, name } = field

        const renderComponent = () => {
          switch (type) {
            case 'number': {
              return (
                <Controller
                  // @ts-ignore
                  name={name}
                  control={control}
                  render={({ field }) => (
                    <Input
                      type='number'
                      placeholder={placeholder}
                      className={className}
                      style={style}
                      required={required}
                      min={options.range[0]}
                      max={options.range[1]}
                      {...field}
                    />
                  )}
                />
              )
            }

            case 'select': {
              return (
                <Controller
                  // @ts-ignore
                  name={name}
                  control={control}
                  render={({ field }) => (
                    <Select
                      required={required}
                      {...field}
                    >
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
                  )}
                />
              )
            }

            default:
              return null
          }
        }

        return (
          <div key={index}>
            <Label>{label}</Label>
            {renderComponent()}
            {/* @ts-ignore */}
            {errors[name] && <span>{errors[label]?.message}</span>}
          </div>
        )
      })}
      <Button type='submit'>Submit</Button>
      {JSON.stringify(dataForm)}
    </form>
  )
}

export default DynamicFieldDisplay
