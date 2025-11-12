import { faker } from '@faker-js/faker'
import { render } from '@testing-library/vue'
import Column from 'primevue/column'
import { describe, expect, it } from 'vitest'
import AppDataTable from './app-data-table.vue'

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

describe('app-data-table', () => {
  it('should display column headers by default', async () => {
    const { getByRole } = render(AppDataTable, {
      global: {
        components: {
          Column,
        },
      },
      props: {
        data,
      },
      slots: {
        default: `
        <Column field="book" header="Book" />
        <Column field="color" header="Color" css-class="w-1/2" />
        `,
      },
    })

    expect(getByRole('columnheader', { name: 'Book' })).toBeTruthy()
    expect(getByRole('columnheader', { name: 'Color' })).toBeTruthy()
  })

  it('should display column values by default', async () => {
    const { getByRole } = render(AppDataTable, {
      global: {
        components: {
          Column,
        },
      },
      props: {
        data,
      },
      slots: {
        default: `
        <Column field="book" header="Book" css-class="w-1/2" />
        <Column field="color" header="Color" css-class="w-1/2" />
        `,
      },
    })

    expect(getByRole('cell', { name: data[0]?.book })).toBeTruthy()
    expect(getByRole('cell', { name: data[1]?.book })).toBeTruthy()
    expect(getByRole('cell', { name: data[0]?.color })).toBeTruthy()
    expect(getByRole('cell', { name: data[1]?.color })).toBeTruthy()
  })

  it('should display message when empty', async () => {
    const { getByText } = render(AppDataTable, {
      global: {
        components: {
          Column,
        },
      },
      props: {
        data: [],
      },
      slots: {
        default: `
        <Column field="book" header="Book" css-class="w-1/2" />
        <Column field="color" header="Color" css-class="w-1/2" />
        `,
      },
    })

    expect(getByText('No data available.')).toBeTruthy()
  })

  it('should display message when loading', async () => {
    const { getByText } = render(AppDataTable, {
      global: {
        components: {
          Column,
        },
      },
      props: {
        data: [],
        isLoading: true,
      },
      slots: {
        default: `
        <Column field="book" header="Book" css-class="w-1/2" />
        <Column field="color" header="Color" css-class="w-1/2" />
        `,
      },
    })

    expect(getByText('Loading data...')).toBeTruthy()
  })
})
