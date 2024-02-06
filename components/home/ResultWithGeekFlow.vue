<template>
    <div class="result_with_geekflow">
        <div class="result_with_geekflow__left">
            <h3 class="result_with_geekflow__left__header">{{ title }}</h3>
<!--            <nuxt-img :src="img" :alt="title"
                      class="result_with_geekflow__left__media" provider="cms"/>-->
            <img :src="img" :alt="title"
                 class="result_with_geekflow__left__media">
            <spline-viewer class="spline_logo" id="spline_logo" loading-anim
                           :url="animation"></spline-viewer>
        </div>
        <div class="result_with_geekflow_right">
            <div class="result_with_geekflow_right__enumeration">
                <ResultEnumerationItem class="result_with_geekflow_right__enumeration__wrapper_item"
                                       v-for="(resultEnum) in items" :title="resultEnum.title"
                                       :bodyText="resultEnum.description"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ResultEnumerationItem from "~/components/home/ResultEnumerationItem.vue";

const props = defineProps({
    title: String, items: Array,
    animation: String, img: String,
})
</script>

<style lang="scss">
@import "@/assets/styles/scss/_colors.scss";

.result_with_geekflow__left {
  margin-right: 8.9375rem;
  position: relative;
}

spline-viewer#spline_logo {
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
}

.result_with_geekflow__left__header {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2.62500rem;
  //line-height: 130%;
  /* identical to box height, or 55px */
  color: $textPrimary;
  white-space: nowrap;
  margin-bottom: 5rem;

}

.result_with_geekflow_right__enumeration {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.result_with_geekflow_right__enumeration__wrapper_item {
  padding-right: 3.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

.result_with_geekflow_right__enumeration__wrapper_item:nth-child(even) {
  padding-right: unset;
}

.result_with_geekflow_right__enumeration__wrapper_item:nth-last-child(-n+2),
.result_with_geekflow_right__enumeration__wrapper_item:nth-last-child(-n+1) {
  border-bottom: unset;
  padding-bottom: unset;
  margin-bottom: unset;
}

@media(max-width: 1270px) {
  .result_with_geekflow__left {
    margin-right: 8rem;
  }
}

@media(max-width: 1199px) {
  .result_with_geekflow__left {
    margin-right: 3rem;
  }
}

@media(max-width: 1099px) {
  .result_with_geekflow__left {
    margin-right: 2rem;
  }
}

@media(max-width: 980px) {
  .result_with_geekflow__left__header {
    text-align: center;
  }
  .result_with_geekflow__left__media {
    width: 80%;
  }
  .result_with_geekflow__left {
    margin-right: unset;
    margin-bottom: 2.5rem;
    text-align: center;
  }
  .result_with_geekflow_right__enumeration {
    grid-template-columns: 1fr;
  }
  .result_with_geekflow_right__enumeration__wrapper_item {
    padding: 1.25rem;
    margin: unset;
  }

  .result_with_geekflow_right__enumeration__wrapper_item,
  .result_with_geekflow_right__enumeration__wrapper_item:nth-child(even),
  .result_with_geekflow_right__enumeration__wrapper_item:nth-last-child(-n+2),
  .result_with_geekflow_right__enumeration__wrapper_item:nth-last-child(-n+1) {
    padding-right: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  .result_with_geekflow_right__enumeration__wrapper_item:nth-last-child(-n+2),
  .result_with_geekflow_right__enumeration__wrapper_item:nth-last-child(-n+1) {
    padding-bottom: 1.5rem;
  }
  .result_with_geekflow_right__enumeration__wrapper_item {
    border-top: unset;
  }
  .result_with_geekflow_right__enumeration__wrapper_item:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
  .result_with_geekflow_right__enumeration__wrapper_item:last-child,
  .result_with_geekflow_right__enumeration__wrapper_item:nth-last-child(-n+2) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
}

@media (max-width: 480px) {
  .result_with_geekflow__left__header {
    font-size: 24px;
  }
}
</style>