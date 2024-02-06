<template>
  <div class="ticker_item">
    <img v-if="iconUrl" class="ticker_item__icon" :src="iconUrl" :alt="text"/>
    <h2 class="ticker_item__text">{{ text }}</h2>
  </div>
</template>

<script lang="ts" setup>
</script>
<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    iconUrl: String,
    text: String,
  }
})
</script>

<style lang="scss">
@import "@/assets/styles/scss/_colors.scss";
.ticker_item {
  display: flex;
  align-items: center;
  margin-right: 1.62rem;
  white-space: nowrap;
}
.ticker_item__text {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2.62rem;
  //line-height: 2.625rem;
  color: $textPrimary;
}

.ticker_item__icon {
  margin-right: 1.62rem;
  width: 1.75rem;
  height: 2.625rem;
}

@media (max-width: 980px) {
  .ticker_item__text {
    font-size: 1.5rem;
  }

  .ticker_item__icon {
    margin-right: 0.75rem;
    width: 1rem;
    height: 1.5rem;
  }
}
</style>