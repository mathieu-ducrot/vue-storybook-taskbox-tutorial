/*
 * Unit test based on stories component data to test more functionnal behavior that snapshot could not detect.
 * Here we ensure that the pinned task to be rendered first, not at the end
 */
import Vue from 'vue'
import TaskList from '@/components/TaskList.vue'
import { withPinnedTasksData } from '../../../stories/components/TaskList.stories'

it('renders pinned tasks at the start of the list', () => {
  const Constructor = Vue.extend(TaskList)
  const vm = new Constructor({
    propsData: { tasks: withPinnedTasksData }
  }).$mount()
  const firstTaskPinned = vm.$el.querySelector(
    '.list-item:nth-child(1).TASK_PINNED'
  )

  expect(firstTaskPinned).not.toBe(null)
})
