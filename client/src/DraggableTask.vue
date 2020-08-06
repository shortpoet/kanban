<template>
  <div
    :data-taskid="task.id"
    class="task"
    draggable="true"
    @dragstart="onDragstart"
  >
    {{ task.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ITask } from "./interfaces/ITask";

export default defineComponent({
  props: {
    task: {
      type: Object as () => ITask
    }
  },
  setup (props) {
    return {
      onDragstart: (e: DragEvent) => e.dataTransfer.setData('text/plain', props.task.id.toString())
    }
  }
})
</script>

<style scoped>
.task {
  background: white;
  color: black;
  padding: 5px;
  height: 40px;
  border-radius: 8px;
  margin: 5px 0;
  cursor: move;
}
</style>