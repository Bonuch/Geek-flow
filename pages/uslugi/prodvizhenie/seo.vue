<template>
    <article class="usluga_seo">
      <UslugaGeneralHeroBlock :animation_url="page.spline_anim" :type="3" :title="page.hero_title" :description="page.hero_description"/>
<!--        <UslugaSeoHeroBlock :animation_url="page.spline_anim" :title="page.hero_title" :description="page.hero_description"/>-->
        <Banner :text_button="page.banner_button_text" :title="page.banner_title" class="usluga_seo__banner" />
        <RoadMapBlock  :value="page.roadmap[0].item" class="usluga__road_map_block"/>
        <div class="usluga_seo__fill_breef">
            <ButtonLinkClear text="Заполнить бриф" to="#contact_footer_block__move"/>
        </div>
        <AdvantagesSeoBlock class="usluga__road_advantage_block"/>
        <ProjectShortLargeTiles title="Все кейсы сайтов" class="usluga__project_short_block"/>
        <ContactFooterBlock/>
    </article>
</template>

<script setup lang="ts">
import RoadMapBlock from "~/components/usluga/RoadMapBlock.vue";
import ProjectShortLargeTiles from "~/components/tiles/ProjectShortLargeTiles.vue";
import ContactFooterBlock from "~/components/contacts/ContactFooterBlock.vue";
import {useSettingStore} from "~/stores/settings";
import ButtonLinkClear from "~/components/links/ButtonLinkClear.vue";
import Banner from "~/components/usluga/Banner.vue";
import AdvantagesSeoBlock from "~/components/usluga/AdvantagesSeoBlock.vue";
import {storeToRefs} from "pinia";
import UslugaGeneralHeroBlock from "~/components/usluga/UslugaGeneralHeroBlock.vue";

const settingStore = useSettingStore();
const {
    title, description
} = storeToRefs(settingStore);

const page = await fetchSeo()

useHead({
    title: page.title ? page.title + ' | ' + title.value : title.value,
    meta: [
        {name: 'description', content: page.description ?  page.description + ' | ' + description.value : description.value}
    ],
})
/*const {
    logoName
} = storeToRefs(settingStore);
onBeforeMount(() => {
    logoName.value = 'Услуги'
})*/
</script>

<style lang="scss">
.usluga_seo {
  background: linear-gradient(0deg, #151520, #151520), linear-gradient(90deg, #2D2848 0%, #464061 100%);
}

.usluga_seo__banner {
    margin-top: 114px;
    margin-left: 9.6875rem;
    margin-right: 11.25rem;
}

.usluga_seo__fill_breef {
    padding-left: 11.25rem;
    padding-right: 11.25rem;
    padding-bottom: 120px;
    //display: block;
}

.usluga__stack_technology_block,
.usluga__road_map_block {
  padding-top: 12.5rem;
}

.usluga__road_map_block {
  padding-left: 9.6875rem;
  padding-right: 11.25rem;
}

.usluga__road_advantage_block {
  padding-left: 11.25rem;
  padding-right: 11.25rem;
  padding-bottom: 12.8125rem;
}

@media (min-width: 1600px) {
    .usluga_seo__banner {
        margin-left: 9rem;
        margin-right: 9rem;
    }
}
@media (max-width: 1100px) {
    .usluga__road_advantage_block {
        padding-left: 18px;
        padding-right: 18px;
        padding-bottom: 85px;
    }
}
@media (max-width: 986px) {
    .usluga__stack_technology_block
    {
        padding-top: unset;
    }
    .usluga__road_map_block  {
        padding-left: 18px;
        padding-right: 18px;
        padding-top: 80px;
    }
    .usluga__road_advantage_block {
        padding-left: 18px;
        padding-right: 18px;
        padding-bottom: 85px;
    }
    .usluga_seo__banner {
        margin-left: 2rem;
        margin-right: 2rem;
    }
    .usluga_seo__fill_breef {
        padding-left: unset;
        padding-right: unset;
        text-align: center;
    }
}
</style>