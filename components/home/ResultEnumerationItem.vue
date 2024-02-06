<template>
  <article class="result_enumeration_item_block">
    <h4 class="result_enumeration_item_block__title">{{title}}</h4>
    <p class="result_enumeration_item_block__body">{{bodyText}}</p>
  </article>
</template>

<script setup lang="ts">
</script>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    title: String,
    bodyText: String,
  }
})
</script>
<style lang="scss">
@import "@/assets/styles/scss/_colors.scss";
.result_enumeration_item_block__title {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.75rem;
  /* identical to box height */
  color: $textPrimary;
  margin-bottom: 0.75rem;
}

.result_enumeration_item_block__body {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 140%;
  /* or 20px */
  color: rgba(255, 255, 255, 0.7);
  max-width: 20.5rem;
}
@media (max-width: 980px) {
  .result_enumeration_item_block__body {
    max-width: unset;
  }
}
</style>