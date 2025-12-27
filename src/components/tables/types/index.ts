import type { DataTableFilterMeta } from 'primevue/datatable'

export interface AppDataTableColumnProperties {
  field: string
  header: string
  cssClass: `w-${number}/${number}` | `w-[${number}/${number}]`
  isHidden?: boolean
  isSortable?: boolean
  isFilterable?: boolean
  filterOptions?: unknown[]
  filterType?: 'text' | 'number' | 'select' | 'multi-select'
}

export interface AppDataTableProperties {
  data: unknown[] | undefined
  size?: 'small' | 'large'
  dataKey?: string
  filters?: DataTableFilterMeta
  isLoading?: boolean
}
