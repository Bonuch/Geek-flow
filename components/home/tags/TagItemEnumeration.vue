<template>
  <NuxtLink class="tag_item_enumeration" :href="link" :style="{color: color}">
    <h4>{{text}}</h4>
<!--    <img class="tag_item_enumeration__icon" src="/icons/arrow.svg" :alt="text"/>-->
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
.tag_item_enumeration {
  text-decoration: unset;
  word-break:break-all;
  //margin-right: 1.62500rem;
  //margin-bottom: 0.875rem;
}
.tag_item_enumeration:last-child {
  //margin-right: unset;
}
.tag_item_enumeration h4 {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 450;
  font-size: 1rem;
  line-height: 19px;
  /* identical to box height */
  white-space: nowrap;
}

.tag_item_enumeration .tag_item_enumeration__icon {
  margin-right: 0.375rem;
  width: 0.5rem;
  height: 0.5rem;
}
</style>