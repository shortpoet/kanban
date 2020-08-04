<template>
  <div>
    <SelectProject :projects="projects" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { store } from "./store";
import SelectProject from "./SelectProject.vue";

export default defineComponent({
  components: { SelectProject },
  setup() {
    store.fetchProjects();
    return {
      projects: computed(() => store.getState().projects),
    };
  },
});
</script>

<style scoped></style>
