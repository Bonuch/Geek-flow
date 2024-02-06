<template>
    <section class="project_tiles_large_block__wrapper">
        <ProjectTilesSmallThree :projects="projects"/>
        <ButtonLinkIconWhite class="project_tiles_large__all_keises_b" :text="'Все кейсы'" link="/portfolio"
                             :icon="'arrow'"/>
    </section>
</template>

<script lang="ts" setup>
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from 'pinia';
import {usePortfolioStore} from "~/stores/portfolio";
import ButtonLinkIconWhite from "~/components/links/ButtonLinkIconWhite.vue";
import ProjectTilesSmallThree from "~/components/tiles/ProjectTilesSmallThree.vue";
import {fetchPortfolioPreview} from "~/composables/cmsPortfolio";

const settingStore = useSettingStore();
const portfolioStore = usePortfolioStore()
const {primaryColorText} = storeToRefs(settingStore);

const projects = await fetchPortfolioPreview();
</script>

<style lang="scss">
.project_tiles_large_block__wrapper {
  display: flex;
  flex-wrap: wrap;
}

.project_tiles_large__all_keises_b {
  display: inline-block;
  margin: 2.875rem auto 0 auto;
}

@media (max-width: 980px) {
  .project_tiles_large__all_keises_b {
    margin: 1.5rem auto 0 auto;
  }
}
</style>