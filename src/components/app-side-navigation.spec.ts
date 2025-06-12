import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AppSideNavigation from './app-side-navigation.vue'
import { createTestingPinia } from '@pinia/testing'

describe('side-navigation', () => {
  it('can view drawer', () => {
    const wrapper = mount(AppSideNavigation, {
      global: {
        stubs: { Teleport: true },
        plugins: [createTestingPinia({ createSpy: vi.fn, stubActions: false })],
      },
      attachTo: document.body,
    })

    expect(wrapper.findComponent(AppSideNavigation).exists()).toBe(true)
  })
})
