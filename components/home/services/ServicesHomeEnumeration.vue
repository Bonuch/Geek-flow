<template>
  <div class="services_home_enumeration_block">
    <ServiceHomeEnumerationItem class="services_home_enumeration_block__enum_item" v-for="(service, index) in service_enum_items" :color="primaryColorText" :id="String(index)"
                                :tags="service.links" :title="service.title"/>
  </div>
</template>

<script lang="ts" setup>
import ServiceHomeEnumerationItem from "~/components/home/services/ServiceHomeEnumerationItem.vue";
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from 'pinia';

const settingStore = useSettingStore();
const {primaryColorText} = storeToRefs(settingStore);

const props = defineProps({
    service_enum_items: Array,
})

const services = [
  {
    title: 'Разрабатываем сайты для ваших проектов',
    tags: [{text: 'Сайты', link: '#'}, {text: 'Лендинги', link: '#'}]
  },
  {
    title: 'Эффективно продвигаем бизнес',
    tags: [{text: 'Контекстная реклама', link: '#'}, {text: 'SEO', link: '#'}, {
      text: 'Таргетированная реклама',
      link: '#'
    }]
  },
  {
    title: 'И просто офигенно для ваших проектов',
    tags: [{text: 'Лендинги', link: '#'}, {text: 'Сайты', link: '#'}]
  },
]
</script>

<style lang="scss">
.services_home_enumeration_block {
  overflow-y: scroll;
  //background: linear-gradient(180deg, #FFFFFF 35.68%, rgba(255, 255, 255, 0) 100%);
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
/* Hide scrollbar for Chrome, Safari and Opera */
.services_home_enumeration_block::-webkit-scrollbar {
  display: none;
}

.services_home_enumeration_block__enum_item {
  margin-bottom: 2.5rem;
}
</style>