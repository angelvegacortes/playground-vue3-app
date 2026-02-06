import { FilterMatchMode } from '@primevue/core/api'
import { render, screen } from '@testing-library/vue'
import DataTable from 'primevue/datatable'
import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { createMockTableData } from '../mocks/data'
import AppDataTableColumn from './app-data-table-column.vue'

describe('app-data-table-column', () => {
  const data = createMockTableData()

  it('should display column headers by default', async () => {
    render(DataTable, {
      global: {
        components: {
          AppDataTableColumn,
        },
      },
      props: {
        value: data,
      },
      slots: {
        default: `
        <AppDataTableColumn key="book" field="book" header="Book" css-class="w-1/2" />
        <AppDataTableColumn key="color" field="color" header="Color" css-class="w-1/2" />
        `,
      },
    })

    // Helpers are registered on Column mount, it is not immediate
    await nextTick()

    expect(screen.getByRole('columnheader', { name: 'Book' })).toBeTruthy()
    expect(screen.getByRole('columnheader', { name: 'Color' })).toBeTruthy()
  })

  it('should display column values by default', async () => {
    render(DataTable, {
      global: {
        components: {
          AppDataTableColumn,
        },
      },
      props: {
        value: data,
      },
      slots: {
        default: `
        <AppDataTableColumn key="book" field="book" header="Book" css-class="w-1/2" />
        <AppDataTableColumn key="color" field="color" header="Color" css-class="w-1/2" />
        `,
      },
    })

    // Helpers are registered on Column mount, it is not immediate
    await nextTick()

    expect(screen.getByRole('cell', { name: data[0]?.book })).toBeTruthy()
    expect(screen.getByRole('cell', { name: data[1]?.book })).toBeTruthy()
    expect(screen.getByRole('cell', { name: data[0]?.color })).toBeTruthy()
    expect(screen.getByRole('cell', { name: data[1]?.color })).toBeTruthy()
  })

  it('should hide columns when enabled', async () => {
    render(DataTable, {
      global: {
        components: {
          AppDataTableColumn,
        },
      },
      props: {
        value: data,
      },
      slots: {
        default: `
        <AppDataTableColumn key="book" field="book" header="Book" css-class="w-1/2" :is-hidden="true" />
        <AppDataTableColumn key="color" field="color" header="Color" css-class="w-1/2" :is-hidden="true" />
        `,
      },
    })

    // Helpers are registered on Column mount, it is not immediate
    await nextTick()

    expect(screen.queryAllByRole('columnheader')).toHaveLength(0)
  })

  it('should disable sorting by default', async () => {
    render(DataTable, {
      global: {
        components: {
          AppDataTableColumn,
        },
      },
      props: {
        value: data,
      },
      slots: {
        default: `
        <AppDataTableColumn key="book" field="book" header="Book" css-class="w-1/2" />
        <AppDataTableColumn key="color" field="color" header="Color" css-class="w-1/2" />
        `,
      },
    })

    // Helpers are registered on Column mount, it is not immediate
    await nextTick()

    expect(screen.queryByRole('columnheader', { name: 'Book' })?.ariaSort).toBeNull()
    expect(screen.queryByRole('columnheader', { name: 'Color' })?.ariaSort).toBeNull()
  })

  it('should sort columns when enabled', async () => {
    render(DataTable, {
      global: {
        components: {
          AppDataTableColumn,
        },
      },
      props: {
        value: data,
      },
      slots: {
        default: `
        <AppDataTableColumn key="book" field="book" header="Book" css-class="w-1/2" :is-sortable="true" />
        <AppDataTableColumn key="color" field="color" header="Color" css-class="w-1/2" :is-sortable="true" />
        `,
      },
    })

    // Helpers are registered on Column mount, it is not immediate
    await nextTick()

    expect(screen.getByRole('columnheader', { name: 'Book' }).ariaSort).toBe('none')
    expect(screen.getByRole('columnheader', { name: 'Color' }).ariaSort).toBe('none')
  })

  it('should disable filtering by default', async () => {
    render(DataTable, {
      global: {
        components: {
          AppDataTableColumn,
        },
      },
      props: {
        value: data,
      },
      slots: {
        default: `
        <AppDataTableColumn key="book" field="book" header="Book" css-class="w-1/2" />
        <AppDataTableColumn key="color" field="color" header="Color" css-class="w-1/2" />
        `,
      },
    })

    // Helpers are registered on Column mount, it is not immediate
    await nextTick()

    expect(screen.queryAllByRole('button', { name: 'Show Filter Menu' })).toHaveLength(0)
  })

  it.todo('should filter columns when enabled', async () => {
    render(DataTable, {
      global: {
        components: {
          AppDataTableColumn,
        },
      },
      props: {
        value: data,
        filters: {
          book: { value: undefined, matchMode: FilterMatchMode.CONTAINS },
          color: { value: undefined, matchMode: FilterMatchMode.CONTAINS },
        },
        dataKey: 'id',
        filterDisplay: 'menu',
        paginator: true,
        rows: 5,
        rowsPerPageOptions: [5, 10, 20, 50],
      },
      slots: {
        default: `
        <AppDataTableColumn key="book" field="book" header="Book" css-class="w-1/2" />
        <AppDataTableColumn key="color" field="color" header="Color" css-class="w-1/2" />
        `,
      },
    })

    // Helpers are registered on Column mount, it is not immediate
    await nextTick()

    expect(screen.getAllByRole('button')).toHaveLength(2)
  })
})
