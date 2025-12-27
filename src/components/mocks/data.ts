import { faker } from '@faker-js/faker'
import type { AppSelectOption } from '../forms/types'

faker.seed(1234)

export const createMockCharacterCounter = () => {
  return {
    value: faker.string.sample(),
    maxLength: faker.number.int({ min: 5, max: 50 }),
  }
}

export const createMockInputNumberData = () => {
  return {
    field: faker.book.genre(),
    label: faker.book.title(),
    value: faker.string.numeric(),
    min: 0,
    max: faker.number.int({ min: 1 }),
  }
}

export const createMockInputTextData = () => {
  return {
    field: faker.book.genre(),
    label: faker.book.title(),
    value: faker.string.alphanumeric(),
    maxLength: faker.number.int(),
  }
}

export const createMockLabelData = () => {
  return {
    field: faker.book.genre(),
    label: faker.book.title(),
  }
}

const createMockSelectOption = (index: number): AppSelectOption => {
  return {
    label: `${faker.book.genre()}-${index}`,
    value: faker.book.author(),
  }
}

export const createMockSelectData = () => {
  return {
    field: faker.book.genre(),
    label: faker.book.title(),
    value: undefined,
    options: {
      strings: faker.helpers.multiple(() => faker.book.title()),
      numbers: faker.helpers.multiple(() => faker.number.int()),
      objects: faker.helpers.multiple((_, index) => createMockSelectOption(index)),
    },
  }
}

export const createMockTextAreaData = () => {
  return {
    field: faker.book.genre(),
    label: faker.book.title(),
    value: faker.string.alphanumeric(),
    maxLength: faker.number.int(),
    rows: faker.number.int(),
    cols: faker.number.int(),
  }
}

export const createMockTableData = () => {
  return [
    {
      book: faker.book.title(),
      color: faker.color.human(),
    },
    {
      book: faker.book.title(),
      color: faker.color.human(),
    },
  ]
}
