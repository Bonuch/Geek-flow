<template>
<NuxtLink class="logo" to="/">
  <img :src="logoHeader" class="logo__img" alt="GeekFlow">
  <span class="logo__name">{{logoName}}</span>
</NuxtLink>
</template>

<script lang="ts" setup>
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from "pinia";
const settingStore = useSettingStore();
const {
    logoName, logoHeader
} = storeToRefs(settingStore);
</script>

<style lang="scss">
@import "@/assets/styles/scss/_fonts.scss";
@import "@/assets/styles/scss/_colors.scss";
@import "@/assets/styles/scss/_sizes.scss";
.logo {
  display: flex;
  justify-content: center;
  text-decoration: unset;
}
.logo .logo__img {
  margin-right: .4rem;
}
.logo .logo__name {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.12rem;
  line-height: 21px;
}

@media (min-width: 1600px) {
  .logo .logo__img {
    width: 30px;
  }
}
</style>