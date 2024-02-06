<template>
    <main class="main_home">
        <OneScreenHome :title="home.hero_title" :spline_url="home.hero_spline_url" class="main_home__one_screen_home"/>
        <AboutHome
                :img_result_with_gf="'//geek-flow.ru/cms/assets/'+home.img_result_with_gf.id + '/'+home.img_result_with_gf.filename_download"
                :spline_anim_result_with_gf="home.spline_anim_result_with_gf"
                :items_result_with_gf="home.items_result_with_gf"
                :title_result_with_gf="home.title_result_with_gf" :service_enum_items="home.service_enum_items"
                :call_2_actions="home.call_2_action_section" :ticker="home.ticker" class="main_home__about_home"/>
        <ProjectTilesSmallHome/>
        <HomeBlog :title="home.blog_title"/>
        <ContactFooterBlock/>
    </main>
</template>

<script lang="ts" setup>
import OneScreenHome from "~/components/home/OneScreenHome.vue";
import AboutHome from "~/components/home/AboutHome.vue";
import HomeBlog from "~/components/home/HomeBlog.vue";
import ContactFooterBlock from "~/components/contacts/ContactFooterBlock.vue";
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from 'pinia';
import ProjectTilesSmallHome from "~/components/tiles/ProjectTilesSmallHome.vue";
import {fetchHome} from "~/composables/cmsHome";
import {splineScript} from "~/composables/splineScript";

const settingStore = useSettingStore();
const {
    title, description
} = storeToRefs(settingStore);
settingStore.headerBorderOff()

const home = await fetchHome()

useHead({
    title: home.title ? home.title + ' | ' + title.value : title.value,
    meta: [
        {name: 'description', content: home.description ?  home.description + ' | ' + description.value : description.value}
    ],
    // script: [{type: "module", src: "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"}]
})
onBeforeMount(() => {
    splineScript()
})
</script>

<style lang="scss">
.main_home {
  background: linear-gradient(90deg, #2D2848 0%, #464061 100%);
}

.main_home__one_screen_home {
  //height: 115vh;
}

.main_home__about_home {
  //position: relative;
  //top: -15vh;
  /*z-index: 2;
  &:before {
    content: '';
    position: absolute; !* Абсолютное позиционирование *!
    left: 0; right: 0; top: 0; bottom: 0;
    z-index: -1;
    background: linear-gradient(90deg, #2D2848 0%, #464061 100%);
    filter: blur(5px);
  }*/
}
</style>