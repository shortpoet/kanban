<template>
  <div class="category">
    {{ category.name }}
    <div v-for="task in tasks" :key="task.id">{{ task.name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ICategory } from "./interfaces/ICategory";
import { ITask } from "./interfaces/ITask";

export default defineComponent({
  props: {
    category: {
      type: Object as () => ICategory,
    },
    tasks: {
      type: Array as () => ITask[],
    },
  },
  setup() {
    return {};
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
