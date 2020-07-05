// https://www.learnstorybook.com/intro-to-storybook/vue/en/composite-component/
import PureTaskList from '@/components/PureTaskList'
import { taskData, actionsData } from './Task.stories'

const paddedList = () => {
  return {
    template: '<div style="padding: 3rem;"><story/></div>'
  }
}
export default {
  title: 'TaskList',
  excludeStories: /.*Data$/,
  /*
   * Decorators are a way to provide arbitrary wrappers to stories.
   * In this case we're using a decorator key in the default export to add styling.
   * But they can also be used to add other context to components.
   */
  decorators: [paddedList]
}

export const defaultTasksData = [
  { ...taskData, id: '1', title: 'Task 1' },
  { ...taskData, id: '2', title: 'Task 2' },
  { ...taskData, id: '3', title: 'Task 3' },
  { ...taskData, id: '4', title: 'Task 4' },
  { ...taskData, id: '5', title: 'Task 5' },
  { ...taskData, id: '6', title: 'Task 6' }
]
export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
]

// default TaskList state
export const Default = () => ({
  components: { PureTaskList },
  template: `<pure-task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  props: {
    tasks: {
      default: () => defaultTasksData
    }
  },
  methods: actionsData
})
// tasklist with pinned tasks
export const WithPinnedTasks = () => ({
  components: { PureTaskList },
  template: `<pure-task-list :tasks="tasks" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  props: {
    tasks: {
      default: () => withPinnedTasksData
    }
  },
  methods: actionsData
})
// tasklist in loading state
export const Loading = () => ({
  components: { PureTaskList },
  template: `<pure-task-list loading @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  methods: actionsData
})
// tasklist no tasks
export const Empty = () => ({
  components: { PureTaskList },
  template: `<pure-task-list @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`,
  methods: actionsData
})
