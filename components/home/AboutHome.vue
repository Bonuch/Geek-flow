<template>
    <div class="about_home_screen">
        <TickerBlock :ticker="ticker"/>
        <ServicesHome :service_enum_items="service_enum_items" :call_2_actions="call_2_actions"
                      class="services_wrapper"/>
        <ResultWithGeekFlow :title="title_result_with_gf" :items="items_result_with_gf"
                            :animation="spline_anim_result_with_gf" :img="img_result_with_gf"
                            class="result_with_geekflow_wrapper"/>
    </div>
</template>

<script lang="ts" setup>
import TickerBlock from "~/components/home/TickerBlock.vue";
import ServicesHome from "~/components/home/services/ServicesHome.vue";
import ResultWithGeekFlow from "~/components/home/ResultWithGeekFlow.vue";

const props = defineProps({
    ticker: Array,
    call_2_actions: Array,
    service_enum_items: Array,
    img_result_with_gf: String,
    spline_anim_result_with_gf: String,
    items_result_with_gf: Array,
    title_result_with_gf: String,
})
</script>

<style lang="scss">
@import "@/assets/styles/scss/_sizes.scss";

.about_home_screen {
  padding-top: 6.93rem;
  padding-bottom: 13.75rem;
}

.services_wrapper {
  margin: 6.875rem $standardBlockPadding 12.5rem;
}

.result_with_geekflow_wrapper {
  display: flex;
  justify-content: space-between;
  margin-right: $standardBlockPadding;
  margin-left: $standardBlockPadding;
}

@media (min-width: 1600px) {
  .about_home_screen {
    padding-bottom: 10rem;
  }
}
@media (max-width: 980px) {
  .about_home_screen {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }
  .services_wrapper {
    margin-top: 3.75rem;
    margin-bottom: 3.75rem;
  }
  .result_with_geekflow_wrapper {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .services_wrapper {
    margin-left: unset;
    margin-right: unset;
  }
  .result_with_geekflow_wrapper {
    margin-right: $mobileBlockPadding;
    margin-left: $mobileBlockPadding;
  }
}
</style>