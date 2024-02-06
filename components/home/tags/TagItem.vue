<template>
  <div class="tag_item">
    <img class="tag_item__icon" :src="'/icons/'+(color === '#ffffff' ? 'ellipse.svg':'ellipse-black.svg')" :alt="text"/>
    <h4 class="tag_item__title" :style="{color: color}">{{text}}</h4>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    text: String,
    color: String,
})
</script>

<style lang="scss">
.tag_item {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 450;
  font-size: 0.875rem;
  line-height: 1.18rem;
  /* identical to box height */
  text-decoration: unset;
  white-space: nowrap;
}

.tag_item .tag_item__icon {
  margin-right: 0.375rem;
  width: 0.5rem;
  height: 0.5rem;
}

.tag_item__title {
  display: inline-block;
}

@media (min-width: 1600px) {
  .tag_item {
    font-size: 1rem;
  }
}
</style>