//https://www.learnstorybook.com/intro-to-storybook/vue/en/screen/
import Vue from 'vue'
import Vuex from 'vuex'
import PureInboxScreen from '@/components/PureInboxScreen.vue'
import { action } from '@storybook/addon-actions'
import { defaultTasksData } from './PureTaskList.stories'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    tasks: defaultTasksData
  },
  actions: {
    pinTask(context, id) {
      action('pinTask')(id)
    },
    archiveTask(context, id) {
      action('archiveTask')(id)
    }
  }
})

export default {
  title: 'PureInboxScreen',
  // Exclude the store from our stories
  excludeStories: /.*store$/
}

// inbox screen default state
export const Default = () => ({
  components: { PureInboxScreen },
  template: `<pure-inbox-screen/>`,
  store
})

// inbox screen error state
export const error = () => ({
  components: { PureInboxScreen },
  template: `<pure-inbox-screen :error="true"/>`
})
