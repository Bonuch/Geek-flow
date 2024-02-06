<template>
    <div class="portfolio_page">
        <div class="portfolio_block__head">
            <h1 class="portfolio_block__head__title">Все кейсы</h1>
            <CategoryFilter :active-category="categoryActive" @change-category="change_category"
                            :categories="categories"/>
        </div>
        <div>
            <!--      <ProjectTile :id="0" :project="projectOne"/>-->
            <!--      <ProjectTilesLarge :projects="projectsSix"/>-->
            <!--      <ProjectTilesSmall :projects="portfolioOther"/>-->
            <ProjectTilesSmallThree :projects="projects"/>
        </div>
        <ContactsContactFooterBlock/>
    </div>
</template>

<script setup lang="ts">
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from 'pinia';
import CategoryFilter from "~/components/filter/CategoryFilter.vue";
import ProjectTilesSmallThree from "~/components/tiles/ProjectTilesSmallThree.vue";
import {fetchCategoriesPortfolio, fetchPortfolioSettings} from "~/composables/cmsPortfolio";

const settingStore = useSettingStore();
settingStore.headerBorderOn()

const route = useRoute()
const categoryActive = route.params.category

const {title, description} = storeToRefs(settingStore);
const page = await fetchPortfolioSettings()

const categories = [
    {name: 'Без категории', value: 'uncategorized'},
    // {name: 'Разработка', value: 'development'},
    // {name: 'Продвижение', value: 'promotion'},
    // {name: 'Дизайн', value: 'design'},
]

const fetchedCats = await fetchCategoriesPortfolio()
fetchedCats.reverse()
fetchedCats.forEach(c => {
    categories.push({name: c.name, value: c.slug, id: c.id})
})

/*const route = useRoute()
console.log(route.params)*/

useHead({
    title: page.title ? page.title + ' | ' + title.value : title.value,
    meta: [
        {
            name: 'description',
            content: page.description ? page.description + ' | ' + description.value : description.value
        }
    ],
})


let projects = []

const catFilter = categories.filter(c => c.value == categoryActive);
if (catFilter.length <= 0) {
    throw createError({statusCode: 404, statusMessage: 'Page Not Found'})
}

try {
    projects = await fetchPortfolioPreview(page.default_output_count, catFilter[0].id)
} catch (e) {
    console.log(e)
}

const change_category = (slug) => {
    if (slug == 'uncategorized') {
        navigateTo('/portfolio')
    } else if (slug != categoryActive) {
        navigateTo('/portfolio/c-' + slug)
    }
}
</script>

<style lang="scss">
@import "assets/styles/scss/_sizes.scss";

.portfolio_page {
  background: linear-gradient(107.9deg, #151520 0%, #0E0E1C 100%);
}

.portfolio_block__head {
  padding: 9.5625rem $standardBlockPadding $standardBlockPadding;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.portfolio_block__head__title {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 49px;
  /* identical to box height */


  color: #FFFFFF;
}

@media (min-width: 1600px) {
  .portfolio_block__head__title {
    font-size: 2.62500rem;
    line-height: 2.62500rem;
  }
}

@media (max-width: 986px) {
  .portfolio_block__head {
    display: flex;
    flex-direction: column;
    padding-left: 35px;
    padding-right: 35px;
    gap: 30px;

    .portfolio_block__head__title {
      font-size: 24px;
    }
  }
}
</style>