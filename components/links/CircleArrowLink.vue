<template>
  <NuxtLink class="link_circle" :to="link" :style="{color: color, borderColor: color}">
    <img alt="arrow geekflow" class="link_circle__icon" :src="'/icons/'+(color === '#fff' ? 'arrow.svg':'arrow-black.svg')" />
  </NuxtLink>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    link: String,
    color: String,
  }
})
</script>

<style lang="scss">
.link_circle {
  text-decoration: unset;
  border: 1px solid #FFFFFF;
  width: 3rem;
  height: 3rem;
  display: flex;
  border-radius: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.link_circle .link_circle__icon {
  width: 0.75rem;
  height: 0.625rem;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
</style>