<template>
  <div class="social_items_block">
    <div v-for="soc in socialList" class="social_items_block__wrapper">
      <SocialItem :color="primaryColorText" :link="soc.link" :text="soc.name"/>
    </div>
  </div>
</template>

<script lang="ts">
</script>

<script setup lang="ts">
import SocialItem from "~/components/socials/SocialItem.vue";
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from 'pinia';

const settingStore = useSettingStore();
const {socialList, primaryColorText} = storeToRefs(settingStore);
</script>

<style lang="scss">
.social_items_block {
  max-width: 17.93rem;
  text-align: right;
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-template-rows: 1fr; */
  /* grid-column-gap: 24px; */
  /* grid-auto-flow: dense; */
  /* grid-row-gap: 0px; */
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
}
.social_items_block__wrapper {
  //margin-right: 1.75rem;
  //flex: 1;
  //width:calc( ( 100% - 40px ) / 3 );
}

@media (max-width: 980px) {
  .social_items_block {
    max-width: unset;
    justify-content: center;
  }
}
</style>