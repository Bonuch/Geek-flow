<template>
  <NuxtLink class="link_circle" :to="link">
    <img alt="arrow geekflow" class="link_circle__icon" src="/icons/arrow-black.svg" />
  </NuxtLink>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    link: String,
  }
})
</script>

<style lang="scss" scoped>
.link_circle {
  text-decoration: unset;
  border: 1px solid #000000;
  width: 3rem;
  height: 3rem;
  display: flex;
  border-radius: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #000000;
  -moz-transition: all 0.5s linear;
  -o-transition: all 0.5s linear;
  -webkit-transition: all 0.5s linear;
}

.link_circle:hover {
  color: #000000;
  background-color: #ffffff;
  border-color: #ffffff;
}

.link_circle:hover img {
  //filter: invert(100%);
}

.link_circle .link_circle__icon {
  width: 0.75rem;
  height: 0.625rem;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
</style>