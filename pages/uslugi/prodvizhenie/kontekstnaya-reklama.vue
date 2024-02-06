<template>
    <article class="usluga_kontekst_reklama">
      <UslugaGeneralHeroBlock :animation_url="page.spline_anim" :title="page.hero_title"
                              :description="page.hero_description" :type="4"
                              class="usluga__kontekst_reklama_hero_block"/>
<!--        <UslugaKontekstReklamaHeroBlock :animation_url="page.spline_anim" :title="page.hero_title"-->
<!--                                        :description="page.hero_description"-->
<!--                                        class="usluga__kontekst_reklama_hero_block"/>-->
        <TypeContekstReklamaBlock :value="page.stack[0].item" class="usluga__type_kontekst_reklama_block"/>
        <RoadMapBlock :value="page.roadmap[0].item" class="usluga__kontekst_reklama__road_map_block"/>
        <div class="usluga_kontekst_reklama__fill_breef">
            <ButtonLinkClear text="Заполнить бриф" to="#contact_footer_block__move"/>
        </div>
        <AdvantagesKontekstReklamaBlock class="usluga__road_advantage_block"/>
        <ProjectShortLargeTiles title="Все кейсы сайтов" class="usluga__project_short_block"/>
        <ContactFooterBlock/>
    </article>
</template>

<script setup lang="ts">
import RoadMapBlock from "~/components/usluga/RoadMapBlock.vue";
import ProjectShortLargeTiles from "~/components/tiles/ProjectShortLargeTiles.vue";
import ContactFooterBlock from "~/components/contacts/ContactFooterBlock.vue";
import {useSettingStore} from "~/stores/settings";
import UslugaKontekstReklamaHeroBlock from "~/components/usluga/UslugaKontekstReklamaHeroBlock.vue";
import TypeContekstReklamaBlock from "~/components/usluga/TypeContekstReklamaBlock.vue";
import AdvantagesKontekstReklamaBlock from "~/components/usluga/AdvantagesKontekstReklamaBlock.vue";
import {storeToRefs} from "pinia";
import ButtonLinkClear from "~/components/links/ButtonLinkClear.vue";
import UslugaGeneralHeroBlock from "~/components/usluga/UslugaGeneralHeroBlock.vue";

const settingStore = useSettingStore();
const {
    title, description
} = storeToRefs(settingStore);

const page = await fetchKontekstnayaReklama()

useHead({
    title: page.title ? page.title + ' | ' + title.value : title.value,
    meta: [
        {
            name: 'description',
            content: page.description ? page.description + ' | ' + description.value : description.value
        }
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
.usluga_kontekst_reklama {
  background: linear-gradient(0deg, #151520, #151520), linear-gradient(90deg, #2D2848 0%, #464061 100%);
}

.usluga__kontekst_reklama_hero_block {
  padding-bottom: 56px;
}

.usluga__type_kontekst_reklama_block,
.usluga__kontekst_reklama__road_map_block {
  padding-top: 12.5rem;
}

.usluga__kontekst_reklama__road_map_block {
  padding-left: 9.6875rem;
  padding-right: 11.25rem;
  padding-bottom: 107px;
}

.usluga__road_advantage_block {
  padding-left: 11.25rem;
  padding-right: 11.25rem;
  padding-bottom: 12.8125rem;
}

.usluga_kontekst_reklama__fill_breef {
    padding-left: 11.25rem;
    padding-right: 11.25rem;
    padding-bottom: 120px;
}

@media (max-width: 986px) {
  .usluga__type_kontekst_reklama_block {
    padding-top: unset;
  }
  .usluga__kontekst_reklama__road_map_block {
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 80px;
  }
  .usluga__road_advantage_block {
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 85px;
  }
    .usluga_kontekst_reklama__fill_breef {
        padding-left: unset;
        padding-right: unset;

        text-align: center;
    }
}
</style>