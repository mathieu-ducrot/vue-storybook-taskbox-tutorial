//https://www.learnstorybook.com/intro-to-storybook/vue/en/screen/
import PureInboxScreen from '@/components/PureInboxScreen.vue'
export default {
  title: 'PureInboxScreen'
}

// inbox screen default state
export const Default = () => ({
  components: { PureInboxScreen },
  template: `<pure-inbox-screen/>`
})

// inbox screen error state
export const error = () => ({
  components: { PureInboxScreen },
  template: `<pure-inbox-screen :error="true"/>`
})
