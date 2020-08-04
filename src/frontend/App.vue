<template>
  <div>
    <SelectProject :projects="projects" v-model="selectedProject" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { store } from "./store";
import SelectProject from "./SelectProject.vue";

export default defineComponent({
  components: { SelectProject },
  setup() {
    store.fetchProjects();
    const selectedProject = ref<string>();
    watch(selectedProject, (id) => {
      if (!id) return; // defensive programming: null checks
      store.fetchProject(id);
    });
    return {
      projects: computed(() => store.getState().projects),
      selectedProject,
    };
  },
});
</script>

<style scoped></style>
