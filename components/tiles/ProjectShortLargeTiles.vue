<template>
    <section class="project_short_large_tiles_block">
        <div class="portfolio_block__head">
            <h1 class="portfolio_block__head__title">{{ title }}</h1>
            <ButtonLinkIcon :icon="'arrow'" link="/portfolio" :color="primaryColorText"
                            text="Портфолио"/>
        </div>
        <ProjectTilesSmallThree :projects="projects"/>
    </section>
</template>

<script setup lang="ts">
import ButtonLinkIcon from "~/components/links/ButtonLinkIcon.vue";
import {storeToRefs} from "pinia";
import {useSettingStore} from "~/stores/settings";
import ProjectTilesSmallThree from "~/components/tiles/ProjectTilesSmallThree.vue";

const settingStore = useSettingStore();
const {primaryColorText} = storeToRefs(settingStore);

const projects = await fetchPortfolioPreview(3)

const props = defineProps({
    title: {
        type: String,
        default() {
            return 'Все кейсы'
        }
    }
})

</script>

<style lang="scss">
.project_short_large_tiles_block .portfolio_block__head {
  padding-top: unset;
}

@media (max-width: 986px) {
}
</style>