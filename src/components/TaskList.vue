<template>
  <div>
    <pure-task-list
      :tasks="tasks"
      @archiveTask="archiveTask"
      @pinTask="pinTask"
    />
  </div>
</template>

<script>
import PureTaskList from './PureTaskList'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'task-list',
  components: {
    PureTaskList
  },
  methods: {
    ...mapActions(['archiveTask', 'pinTask'])
  },
  computed: {
    ...mapState(['tasks'])
  }
}
</script>
