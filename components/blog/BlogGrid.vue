<template>
  <div class="blog_grid">
    <BlogCard v-for="article in props.articles"
              :link="'/blog/'+article.id"
              :image-link="getImageUrl(article.preview_img)"
              :short-descr="article.short_description ? article.short_description : article.description"
              :title="article.short_title ? article.short_title : article.title"
              :reading-time="article.reading_time"
              :color="primaryColorText"/>
  </div>
</template>

<script setup lang="ts">
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from "pinia";

const settingStore = useSettingStore()
const {primaryColorText} = storeToRefs(settingStore);
const props = defineProps({
    articles: Array
});
</script>
<style lang="scss">
.blog_grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 3.0625rem;
  grid-row-gap: 3.75rem;
}
</style>