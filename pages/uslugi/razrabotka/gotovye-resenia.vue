<template>
    <article class="usluga_gogtovye_resenia">
      <UslugaGeneralHeroBlock  :animation_url="page.spline_anim" :type="2" :title="page.hero_title" :description="page.hero_description"/>
<!--        <UslugaGogtovyeResheniaHeroBlock :animation_url="page.spline_anim" :title="page.hero_title" :description="page.hero_description"/>-->
        <StackTechnologyCmsBlock :value="page.stack[0].item" class="usluga__stack_technology_block"/>
        <RoadMapBlock :value="page.roadmap[0].item" class="usluga__road_map_block"/>
        <div class="usluga_gogtovye_resenia__fill_breef">
            <ButtonLinkClear text="Заполнить бриф" to="#contact_footer_block__move"/>
        </div>
        <AdvantagesReadySolutionsBlock class="usluga__road_advantage_block"/>
        <ProjectShortLargeTiles title="Все кейсы сайтов" class="usluga__project_short_block"/>
        <ContactFooterBlock/>
    </article>
</template>

<script setup lang="ts">
import RoadMapBlock from "~/components/usluga/RoadMapBlock.vue";
import ProjectShortLargeTiles from "~/components/tiles/ProjectShortLargeTiles.vue";
import ContactFooterBlock from "~/components/contacts/ContactFooterBlock.vue";
import {useSettingStore} from "~/stores/settings";
import StackTechnologyCmsBlock from "~/components/usluga/StackTechnologyCmsBlock.vue";
import AdvantagesReadySolutionsBlock from "~/components/usluga/AdvantagesReadySolutionsBlock.vue";
import ButtonLinkClear from "~/components/links/ButtonLinkClear.vue";
import {fetchGotovyeResenia} from "#imports";
import {storeToRefs} from "pinia";
import UslugaGeneralHeroBlock from "~/components/usluga/UslugaGeneralHeroBlock.vue";

const settingStore = useSettingStore();
const {
    title, description
} = storeToRefs(settingStore);

const page = await fetchGotovyeResenia()

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

<style lang="scss" scoped>
.usluga_gogtovye_resenia {
  background: linear-gradient(0deg, #151520, #151520), linear-gradient(90deg, #2D2848 0%, #464061 100%);
}

.usluga__stack_technology_block,
.usluga__road_map_block {
  padding-top: 12.5rem;
}

.usluga__road_map_block {
  padding-left: 9.6875rem;
  padding-right: 11.25rem;
}

.usluga_gogtovye_resenia__fill_breef {
  padding-left: 11.25rem;
  padding-right: 11.25rem;
  padding-bottom: 120px;
}

.usluga__road_advantage_block {
  padding-left: 11.25rem;
  padding-right: 11.25rem;
  padding-bottom: 12.8125rem;
}

@media (max-width: 986px) {
  .usluga__stack_technology_block {
    padding-top: 7.5rem;
  }
  .usluga__road_map_block {
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 80px;
  }
  .usluga__road_advantage_block {
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 85px;
  }
    .usluga_gogtovye_resenia__fill_breef {
        padding-left: unset;
        padding-right: unset;
        text-align: center;
    }
}
@media (max-width: 767px) {
  .usluga__stack_technology_block {
    padding-top: 5.5rem;
  }
}
</style>