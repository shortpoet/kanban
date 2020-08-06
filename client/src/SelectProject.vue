<template>
  <!-- <select name="projects" id="project-select"> -->
  <select @change="onChange" :value="modelValue">
    <option :value="null">Select a project</option>
    <!-- without binding to :value="project.id" it defaults to name -->
    <option v-for="project in projects" :key="project.id" :value="project.id">
      {{ project.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ISelectProject } from "../interfaces/ISelectProject";

export default defineComponent({
  props: {
    projects: {
      type: Array as () => ISelectProject[],
    },
    modelValue: {
      type: String,
    },
  },
  setup(props, ctx) {
    return {
      onChange: (e) => ctx.emit("update:modelValue", e.target.value),
    };
  },
});
</script>

<style scoped></style>
