<template>
  <!-- <select name="projects" id="project-select"> -->
  <select>
    <option v-for="project in projects" :key="project.id">
      {{ project.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ISelectProject } from "./types";

export default defineComponent({
  props: {
    projects: {
      type: Array as () => ISelectProject[],
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
