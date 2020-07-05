// https://www.learnstorybook.com/intro-to-storybook/vue/en/simple-component/
import { action } from '@storybook/addon-actions'
import Task from '@/components/Task'

export default {
  title: 'Task',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
}

/*
 * action() allows us to create a callback that appears in the actions panel of the Storybook UI when clicked.
 * So when we build a pin button, we’ll be able to determine in the test UI if a button click is successful.
 */
export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask')
}

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'Task_INBOX',
  updated_at: new Date(2019, 0, 1, 9, 0)
}

const taskTemplate = `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`

/* ****** CHILD STORIES OF THE CURRENT COMPONENTS ****** */
/*
 * The story is a function that returns a rendered element (i.e. a component class with a set of props) in a given state
 * exactly like a Stateless Functional Component cf. https://vuejs.org/v2/guide/render-function.html#Functional-Components
 */

// default task state
export const Default = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => taskData
    }
  },
  methods: actionsData
})
// pinned task state
export const Pinned = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({
        ...taskData,
        state: 'TASK_PINNED'
      })
    }
  },
  methods: actionsData
})
// archived task state
export const Archived = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({
        ...taskData,
        state: 'TASK_ARCHIVED'
      })
    }
  },
  methods: actionsData
})
