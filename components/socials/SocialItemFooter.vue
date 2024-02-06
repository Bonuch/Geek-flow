<template>
  <NuxtLink class="social_item" :to="link" target="_blank" :style="{color: color}">
    {{text}}
    <img class="social_item__icon" src="/icons/ellipse-grey.svg"  :alt="text"/>
  </NuxtLink>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    link: String,
    text: String,
    color: String,
  }
})
</script>

<style lang="scss">
.social_item {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.18rem;
  /* identical to box height */
  text-decoration: unset;
}

.social_item .social_item__icon {
  margin-right: 0.5rem;
  width: 0.625rem;
  height: 0.625rem;
}
</style>