interface AppCommonProps {
  field?: string | undefined
  isDisabled?: boolean
  isRequired?: boolean
  label: string
}

export interface AppInputTextProps extends AppCommonProps {
  maxLength?: number | undefined
}

export interface AppTextAreaProps extends AppInputTextProps {
  rows: number
  cols: number
}

export interface AppSelectOption {
  label: string
  value: string
}

export interface AppSelectProps extends AppCommonProps {
  options: string[] | number[] | AppSelectOption[]
  optionLabel?: string
  optionValue?: string
}

export interface AppMultiSelectProps extends AppSelectProps {
  optionDisplayFormat?: 'chip' | 'comma'
  optionSelectedMax?: number
}

export interface AppLabelProps extends Required<Omit<AppCommonProps, 'isDisabled'>> {
  field: string
}

export interface AppInputNumberProps extends AppCommonProps {
  min?: number | undefined
  max?: number | undefined
}

export interface AppErrorMessageProps {
  error: string | undefined
}

export interface AppCharacterCounterProps {
  value: string | undefined
  maxLength: number | undefined
}
