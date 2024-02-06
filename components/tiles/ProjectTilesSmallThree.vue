<template>
  <div class="project_tiles_small_three_block">
    <ProjectTile v-for="(project, i) in props.projects" :project="project" :id="i" :color-text="primaryColorText"
                 :simple-mod="true"/>
  </div>
</template>

<script lang="ts" setup>
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from 'pinia';
import {usePortfolioStore} from "~/stores/portfolio";
import ProjectTile from "~/components/tiles/ProjectTile.vue";

const settingStore = useSettingStore();
const portfolioStore = usePortfolioStore()
const {primaryColorText} = storeToRefs(settingStore);

const props = defineProps({
    projects: {
        type: Array,
        default() {
            return []
        }
    }
})
</script>

<style lang="scss">
.project_tiles_small_three_block {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  /*grid-template-columns: repeat(auto-fit, minmax(46%, 1fr) 54%);
  grid-column-gap: 0;
  grid-row-gap: 0;*/
}
@media (max-width: 980px) {
  .project_tiles_small_three_block {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>