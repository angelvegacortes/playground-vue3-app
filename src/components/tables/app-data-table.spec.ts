import { render, screen } from '@testing-library/vue'
import Column from 'primevue/column'
import { describe, expect, it } from 'vitest'
import { createMockTableData } from '../mocks/data'
import AppDataTable from './app-data-table.vue'

describe('app-data-table', () => {
  const data = createMockTableData()

  it('should display column headers by default', async () => {
    render(AppDataTable, {
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

    expect(screen.getByRole('columnheader', { name: 'Book' })).toBeTruthy()
    expect(screen.getByRole('columnheader', { name: 'Color' })).toBeTruthy()
  })

  it('should display column values by default', async () => {
    render(AppDataTable, {
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

    expect(screen.getByRole('cell', { name: data[0]?.book })).toBeTruthy()
    expect(screen.getByRole('cell', { name: data[1]?.book })).toBeTruthy()
    expect(screen.getByRole('cell', { name: data[0]?.color })).toBeTruthy()
    expect(screen.getByRole('cell', { name: data[1]?.color })).toBeTruthy()
  })

  it('should display message when empty', async () => {
    render(AppDataTable, {
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

    expect(screen.getByText('No data available.')).toBeTruthy()
  })

  it('should display message when loading', async () => {
    render(AppDataTable, {
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

    expect(screen.getByText('Loading data...')).toBeTruthy()
  })
})
