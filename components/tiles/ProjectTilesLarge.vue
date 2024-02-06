<template>
  <div class="project_tiles_large_block">
    <ProjectTile v-for="(project, i) in projects" :project="project" :id="i" :color-text="primaryColorText"/>
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
const {getPortfolioSix} = storeToRefs(portfolioStore);

// const projects = getPortfolioSix
</script>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  methods: {
    tileGenerator(id: number) {
      return (id === 0) || ((id) % 3 === 0) ? 'tile_big_grid' : 'tile_small_grid'
    },
  },
  props: {
    projects: {
      type: Array,
      default() {
        return []
      }
    }
  }
})
</script>

<style lang="scss">
.project_tiles_large_block {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(46%, 1fr) 54%);
  grid-column-gap: 0;
  grid-row-gap: 0;
}
@media (max-width: 980px) {
  .project_tiles_large_block {
    grid-template-columns: 1fr;
  }
}
</style>