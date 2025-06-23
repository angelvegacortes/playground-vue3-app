import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SideNavigation from './side-navigation.vue'
import { createTestingPinia } from '@pinia/testing'

describe('side-navigation', () => {
  it('can view drawer', () => {
    const wrapper = mount(SideNavigation, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn, stubActions: true })],
      },
      attachTo: document.body,
    })

    console.log(wrapper.html())

    expect(wrapper.findComponent(SideNavigation).exists()).toBe(true)
  })
})
