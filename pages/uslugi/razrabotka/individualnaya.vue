<template>
    <article class="usluga_no_code">
        <UslugaHeroBlock :title="page.hero_title"/>
        <StackTechnologyBlock :value="page.stack[0].item" class="usluga__stack_technology_block"/>
        <RoadMapBlock :value="page.roadmap[0].item" class="usluga__road_map_block"/>
        <AdvantagesBlock class="usluga__road_advantage_block"/>
        <ProjectShortLargeTiles title="Все кейсы сайтов" class="usluga__project_short_block"/>
        <ContactFooterBlock/>
    </article>
</template>

<script setup lang="ts">
import UslugaHeroBlock from "~/components/usluga/UslugaHeroBlock.vue";
import StackTechnologyBlock from "~/components/usluga/StackTechnologyBlock.vue";
import RoadMapBlock from "~/components/usluga/RoadMapBlock.vue";
import AdvantagesBlock from "~/components/usluga/AdvantagesBlock.vue";
import ProjectShortLargeTiles from "~/components/tiles/ProjectShortLargeTiles.vue";
import ContactFooterBlock from "~/components/contacts/ContactFooterBlock.vue";
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from "pinia";
import {fetchIndividualnaya} from "#imports";

const settingStore = useSettingStore();
const {
    title, description
} = storeToRefs(settingStore);

const page = await fetchIndividualnaya()

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
.usluga_no_code {
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

.usluga__road_advantage_block {
  padding-left: 11.25rem;
  padding-right: 11.25rem;
  padding-bottom: 12.8125rem;
}

@media (min-width: 1600px) {
    .usluga__road_map_block {
        padding-left: 9rem;
        padding-right:9rem;
    }
    .usluga__road_advantage_block {
        padding-left: 9rem;
        padding-right:9rem;
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
}
</style>