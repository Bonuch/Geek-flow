<template>
  <div class="service_home_enumeration_item_block">
<!--    <span class="service_home_enumeration_item_block__id">{{Number(id)<10?'0'+id:id}}</span>-->
    <h2 class="service_home_enumeration_item_block__title">{{title}}</h2>
    <div class="service_home_enumeration_item_block__tags_wrapper">
      <TagItemEnumeration class="service_home_enumeration_item_block__tag_wrapper" v-for="tag in tags" :color="color" :text="tag.name" :link="tag.link" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TagItemEnumeration from "~/components/home/tags/TagItemEnumeration.vue";
</script>
<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  data(){
    return {
    }
  },
  props: {
    id: String,
    title: String,
    tags: Array,
    color: String,
  }
})
</script>

<style lang="scss">
@import "@/assets/styles/scss/_colors.scss";
.service_home_enumeration_item_block__id {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  /* identical to box height */
  color: $textPrimary;

  margin-bottom: 0.5rem;
  display: block;
}
.service_home_enumeration_item_block__title {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 140%;
  /* or 45px */
  color: $textPrimary;
  margin-bottom: 1.25rem;
}

.service_home_enumeration_item_block__tag_wrapper {
  display: inline-block;
  text-decoration: unset;
  word-break:break-all;
  margin-right: 1.62500rem;
  margin-bottom: 0.875rem;
}
.service_home_enumeration_item_block__tag_wrapper:last-child {
  margin-right: unset;
}

@media(min-width: 979px) and (max-width: 1200px) {
  .service_home_enumeration_item_block__title {
    font-size: 1.5rem;
  }
}
</style>