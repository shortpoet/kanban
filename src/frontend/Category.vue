<template>
  <div class="category">
    {{ category.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ICategory } from "../interfaces/ICategory";

export default defineComponent({
  props: {
    category: {
      type: Object as () => ICategory,
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
