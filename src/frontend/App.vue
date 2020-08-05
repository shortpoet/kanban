<template>
  <SelectProject :projects="projects" v-model="selectedProject" />
  <div class="categories">
    <Category
      v-for="category in categories"
      :key="category.id"
      :category="category"
      :tasks="getTasks(category)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { store } from "./store";
import SelectProject from "./SelectProject.vue";
import Category from "./Category.vue";
import { ICategory } from "../interfaces/ICategory";
import { ITask } from "../interfaces/ITask";

export default defineComponent({
  components: { SelectProject, Category },
  setup() {
    store.fetchProjects();
    const selectedProject = ref<string>();
    watch(selectedProject, (id) => {
      if (!id) return; // defensive programming: null checks
      store.fetchProject(id);
    });

    const getTasks = (category: ICategory): ITask[] => {
      const tasks: ITask[] = [];
      for (const [id, task] of Object.entries(
        store.getState().currentProject?.tasks
      )) {
        if (task.categoryId == category.id) tasks.push(task);
      }
      return tasks;
    };

    return {
      projects: computed(() => store.getState().projects),
      // use nullable operator to short circuit out if currentProject or categories is undefined
      categories: computed(() => store.getState().currentProject?.categories),
      selectedProject,
      getTasks,
    };
  },
});
</script>

<style scoped>
.categories {
  margin: 10px 0 0 0;
  display: flex;
}
</style>
