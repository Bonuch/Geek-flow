<template>
    <div class="services_block" id="services__scroll">
        <ServicesHomeBanner :call_2_action_items="call_2_actions" class="services_block__services_home_banner_wrapper"/>
        <ServicesHomeEnumeration :service_enum_items="service_enum_items" ref="servicesBlockEnumW"
                                 class="services_block__services_home_enumeration_wrapper"
                                 id="services_block_enum_w"/>
    </div>
</template>

<script lang="ts" setup>
import ServicesHomeBanner from "~/components/home/services/ServicesHomeBanner.vue";
import ServicesHomeEnumeration from "~/components/home/services/ServicesHomeEnumeration.vue";

const props = defineProps({
    call_2_actions: Array,
    service_enum_items: Array,
})
</script>

<style lang="scss">
.services_block {
  display: flex;

  .services_block__services_home_banner_wrapper {
    margin-right: 4.6875%;
    width: 66.25%;
    position: sticky;
    top: 54px;
    align-self: start;
  }

  .services_block__services_home_enumeration_wrapper {
    width: 29.0625%;
    //background: linear-gradient(180deg, #FFFFFF 35.68%, rgba(255, 255, 255, 0) 100%);
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
  }
}


@media (max-width: 980px) {
  .services_block {
    display: block;
      .services_block__services_home_enumeration_wrapper {
          display: none;
      }
      .services_block__services_home_banner_wrapper {
          margin-right: unset;
          width: 100%;
      }
  }
}

@media (max-width: 480px) {
}
</style>