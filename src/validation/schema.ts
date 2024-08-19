import { z } from 'zod'

export const numberSchema = z.object({
  range: z.tuple([z.number().min(0), z.number().max(100)])
})

export const selectSchema = z.object({
  selectOptions: z.array(
    z.object({
      value: z.string(),
      label: z.string()
    })
  ),
  multiple: z.boolean()
})

export const formSchema = z.union([
  z.object({
    type: z.literal('text'),
    required: z.boolean(),
    label: z.string()
  }),
  z.object({
    type: z.literal('number'),
    required: z.boolean(),
    label: z.string(),
    options: numberSchema
  }),
  z.object({
    type: z.literal('boolean'),
    required: z.boolean(),
    label: z.string()
  }),
  z.object({
    type: z.literal('select'),
    required: z.boolean(),
    label: z.string(),
    options: selectSchema
  })
])
