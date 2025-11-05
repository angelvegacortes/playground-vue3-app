import { faker } from '@faker-js/faker'
import { FilterMatchMode } from '@primevue/core/api'
import { render } from '@testing-library/vue'
import DataTable from 'primevue/datatable'
import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import AppDataTableColumn from './app-data-table-column.vue'

const data = [
  {
    book: faker.book.title(),
    color: faker.color.human(),
  },
  {
    book: faker.book.title(),
    color: faker.color.human(),
  },
]

describe('app-data-table-column', () => {
  it('should display column headers by default', async () => {
    const { getByRole } = render(DataTable, {
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

    expect(getByRole('columnheader', { name: 'Book' })).toBeTruthy()
    expect(getByRole('columnheader', { name: 'Color' })).toBeTruthy()
  })

  it('should display column values by default', async () => {
    const { getByRole } = render(DataTable, {
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

    expect(getByRole('cell', { name: data[0]?.book })).toBeTruthy()
    expect(getByRole('cell', { name: data[1]?.book })).toBeTruthy()
    expect(getByRole('cell', { name: data[0]?.color })).toBeTruthy()
    expect(getByRole('cell', { name: data[1]?.color })).toBeTruthy()
  })

  it('should hide columns when enabled', async () => {
    const { queryAllByRole } = render(DataTable, {
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

    expect(queryAllByRole('columnheader')).toHaveLength(0)
  })

  it('should disable sorting by default', async () => {
    const { getByRole } = render(DataTable, {
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

    expect(getByRole('columnheader', { name: 'Book' }).ariaSort).toBeFalsy()
    expect(getByRole('columnheader', { name: 'Color' }).ariaSort).toBeFalsy()
  })

  it('should sort columns when enabled', async () => {
    const { getByRole } = render(DataTable, {
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

    expect(getByRole('columnheader', { name: 'Book' }).ariaSort).toBe('none')
    expect(getByRole('columnheader', { name: 'Color' }).ariaSort).toBe('none')
  })

  it('should disable filtering by default', async () => {
    const { queryAllByRole } = render(DataTable, {
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

    expect(queryAllByRole('button', { name: 'Show Filter Menu' })).toHaveLength(0)
  })

  it.skip('should filter columns when enabled', async () => {
    const { getAllByRole } = render(DataTable, {
      global: {
        components: {
          AppDataTableColumn,
        },
      },
      props: {
        value: data,
        filters: {
          book: { value: null, matchMode: FilterMatchMode.CONTAINS },
          color: { value: null, matchMode: FilterMatchMode.CONTAINS },
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

    expect(getAllByRole('button')).toHaveLength(2)
  })
})
