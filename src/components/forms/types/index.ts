interface AppCommonProperties {
  field?: string
  isDisabled?: boolean
  isRequired?: boolean
  label: string
}

export interface AppInputTextProperties extends AppCommonProperties {
  maxLength?: number
}

export interface AppTextAreaProperties extends AppInputTextProperties {
  rows: number
  cols: number
}

export interface AppSelectOption {
  label: string
  value: string
}

export interface AppSelectProperties extends AppCommonProperties {
  options: string[] | number[] | AppSelectOption[]
  optionLabel?: string
  optionValue?: string
}

export interface AppMultiSelectProperties extends AppSelectProperties {
  optionDisplayFormat?: 'chip' | 'comma'
  optionSelectedMax?: number
}

export interface AppLabelProperties extends Required<Omit<AppCommonProperties, 'isDisabled'>> {
  field: string
}

export interface AppInputNumberProperties extends AppCommonProperties {
  min?: number
  max?: number
}

export interface AppErrorMessageProperties {
  error: string | undefined
}

export interface AppCharacterCounterProperties {
  value: string | undefined
  maxLength: number | undefined
}
