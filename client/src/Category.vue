<template>
  <div
    class="category"
    @dragover.prevent
    @drop.prevent="onDrop"
    data-dropzone="true"
  >
    {{ category.name }}
    <DraggableTask v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ICategory } from "./interfaces/ICategory";
import { ITask } from "./interfaces/ITask";
import DraggableTask from './DraggableTask.vue'
import { store } from "./store";

export default defineComponent({
  components: {
    DraggableTask
  },
  props: {
    category: {
      type: Object as () => ICategory,
    },
    tasks: {
      type: Array as () => ITask[],
    },
  },
  setup(props) {
    return {
      onDrop: (e: DragEvent) => {
        const id = e.dataTransfer.getData('text/plain');
        const task = document.querySelector(`[data-taskid="${id}"]`)
        // console.log(e.target.constructor.name);
        // https://stackoverflow.com/a/61164277/12658653
        const target: HTMLDivElement = e.target as HTMLDivElement
        // this avoids stacking the tasks on one another
        if (target.getAttribute('data-dropzone')) {
          // manual 'incorrect' drop method bec doesn't update db
          // target.appendChild(task)
          store.updateTask(id, props.category.id.toString());
        }
        console.log(id);
      }
    };
  },
});
</script>

<style scoped>
.category {
  background: silver;
  width: 150px;
  margin: 2px;
  padding: 5px;
  min-height: 400px;
  border-radius: 5px;
}
</style>
