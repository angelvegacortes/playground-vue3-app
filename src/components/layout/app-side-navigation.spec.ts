import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import AppSideNavigation from './app-side-navigation.vue'

describe('app-side-navigation', () => {
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
