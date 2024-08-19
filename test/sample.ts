import { DynamicFieldType } from '../src/types/DynamicFieldTypes'

const stuff: DynamicFieldType[] = [
  { type: 'number', options: { range: [1, 100] }, label: 'Number', required: true, name: 'num1' },
  {
    type: 'number',
    options: { range: [1, 100] },
    label: 'Number3',
    required: true,
    name: 'num2'
  },
  {
    type: 'number',
    options: { range: [1, 100] },
    label: 'Number2',
    required: true,
    name: 'num3'
  },
  {
    type: 'number',
    options: { range: [1, 100] },
    label: 'Numb2er',
    required: true,
    name: 'num4'
  },
  {
    type: 'select',
    options: {
      selectOptions: [
        { label: 'ddd', value: 'tst' },
        { label: 'ddd4532', value: 'ts3t' }
      ],
      multiple: false
    },
    label: 'Select',
    required: false,
    name: 'select2'
  },
  {
    type: 'select',
    options: { selectOptions: [{ label: 'ddd1', value: 'tst2' }], multiple: false },
    label: 'Select',
    required: false,
    name: 'select1'
  }
]
