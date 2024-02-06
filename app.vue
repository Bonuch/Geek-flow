<template>
    <NuxtLayout :name="layout">
        <NuxtPage/>
    </NuxtLayout>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useSettingStore} from "~/stores/settings";

const {getSingletonItem} = useDirectusItems();
const fetchSettings: SettingsGlobal = await getSingletonItem<SettingsGlobal>({collection: 'settings_global'})

const settingStore = useSettingStore();
const {favicons, logoHeader, title, css_head, css_footer, js_head, js_footer} = storeToRefs(settingStore);
settingStore.updateData(fetchSettings)

let layout = 'default';

const favIcons: { rel: string; type: string; href: any; sizes: string; }[] = []

favicons.value.forEach(f => {
    favIcons.push({rel: 'icon', type: 'image/png', href: f.link, sizes:`${f.size}x${f.size}`},)
})

useHead({
    title: title,
    link: [...favIcons],
    meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    ]
})
</script>

<style lang="scss">
@import "@/assets/styles/scss/_colors.scss";
@import "@/assets/styles/scss/_sizes.scss";
@import "@/assets/styles/scss/_fonts.scss";

* {
  color: $textPrimary;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  background-color: #000;
  scroll-behavior: smooth;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

@media (min-width: 1600px) {
  html {
    font-size: $largeSize;
  }
}
</style>
