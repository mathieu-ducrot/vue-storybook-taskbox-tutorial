<template>
  <div>
    <pure-inbox-screen :error="error" />
  </div>
</template>

<script>
import PureInboxScreen from './PureInboxScreen'
import { mapState } from 'vuex'

export default {
  name: 'inbox-screen',
  components: {
    PureInboxScreen
  },
  computed: {
    ...mapState(['error'])
  }
}
</script>
