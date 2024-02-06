<template>
  <NuxtLink class="link_clear" :to="link" :style="{color: color}">
    {{text}}
  </NuxtLink>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    link: String,
    color: String,
    text: String,
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/styles/scss/_colors.scss";
.link_clear {
  //background: rgba(255, 255, 255, 0.1);
  border: 1px solid $textPrimary;
  backdrop-filter: unset;
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 1.5rem;
  text-decoration: unset;

  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  /* identical to box height */
  text-align: center;
  color: $textPrimary;
  white-space: nowrap;

  padding: 0.875rem 1.87500rem;
}
</style>