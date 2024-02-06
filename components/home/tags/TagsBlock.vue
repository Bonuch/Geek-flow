<template>
  <div class="tags_block">
    <TagItem class="tags_block__tag_wrapper" v-for="tag in props.tags" :text="tag.name" :color="color"/>
  </div>
</template>

<script setup lang="ts">
import TagItem from "~/components/home/tags/TagItem.vue";
const props = defineProps({
    tags: Array, color: String
})
</script>

<style lang="scss">
.tags_block {
  display: flex;
  margin-bottom: 0.75rem;
}
.tags_block__tag_wrapper {
  margin-right: 1.3125rem;
}
.tags_block__tag_wrapper:last-child {
  margin-right: unset;
}

@media(max-width: 980px) {
  .tags_block__tag_wrapper {
    margin-right: 0.7rem;
  }
}
</style>