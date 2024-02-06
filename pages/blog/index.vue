<template>
    <section class="blog__page">
        <div class="blog__block">
            <div class="blog_block__head">
                <div class="blog_block__head__title">
                    <img src="/icons/book.svg" alt="Блог GeekFlow" class="blog_block__head__title__icon">
                    Блог
                </div>
                <CategoryFilter :categories="categories"/>
            </div>
            <div v-if="windowWidth > 986 || windowWidth === -1" class="blog_block__body">
                <BlogCardBig class="blog_block__body__card_big" :color="primaryColorText"
                             :link="'/blog/'+articles[0].id"
                             :image-link="getImageUrl(articles[0].preview_img)"
                             :short-descr="articles[0].short_description ? articles[0].short_description : articles[0].description"
                             :title="articles[0].short_title ? articles[0].short_title : articles[0].title"
                             :reading-time="articles[0].reading_time"
                />
                <BlogGrid style="margin-bottom: 5rem;" :articles="articles.slice(1)"/>
                <div class="blog_block__show_more">
                    <ButtonLink style="display: inline-block;" link="#" text="Показать еще" :color="primaryColorText"/>
                </div>
            </div>
            <div v-else class="blog_block__body">
                <BlogGrid style="margin-bottom: 5rem;" :articles="articles.slice(0, articles.length-1)"/>
                <!--                <div class="blog_block__show_more">
                                    <ButtonLink style="display: inline-block;" link="#" text="Показать еще" :color="primaryColorText"/>
                                </div>-->
            </div>
        </div>
        <ContactFooterBlock/>
    </section>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useSettingStore} from "~/stores/settings";
import ButtonLink from "~/components/links/ButtonLink.vue";
import ContactFooterBlock from "~/components/contacts/ContactFooterBlock.vue";
import CategoryFilter from "~/components/filter/CategoryFilter.vue";
import {fetchBlogPreview} from "#imports";
import {fetchBlogSettings} from "~/composables/cmsBlog";

const settingStore = useSettingStore()
const {primaryColorText, title, description} = storeToRefs(settingStore);
const page = await fetchBlogSettings()

useHead({
    title: page.title ? page.title + ' | ' + title.value : title.value,
    meta: [
        {
            name: 'description',
            content: page.description ? page.description + ' | ' + description.value : description.value
        }
    ],
})

console.log(page)

const articles = await fetchBlogPreview(page.default_output_count + 1)

const windowWidth = ref(-0);
const onResize = () => {
    windowWidth.value = window.innerWidth;
}
onBeforeUpdate(() => {
    onResize();
})
onBeforeMount(() => {
    window.addEventListener("resize", onResize);
    onResize()
})
onBeforeUnmount(() => {
    window.removeEventListener("resize", onResize);
})
const categories = [
    {name: 'Без категории', value: 'uncategorized'},
    // {name: 'Разработка', value: 'development'},
    // {name: 'Продвижение', value: 'promotion'},
    // {name: 'Дизайн', value: 'design'},
]
</script>

<style lang="scss">
.blog__page {
  background: linear-gradient(107.9deg, #151520 0%, #0E0E1C 100%), linear-gradient(90deg, #2D2848 0%, #464061 100%);
}

.blog__block {
  padding: 9.25rem 5rem 10rem;
}

.blog_block__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3.12500rem;
}

.blog_block__head__title {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2.62500rem;
  color: #FFFFFF;
}

.blog_block__body__card_big {
  margin-bottom: 6.25rem;
}

.blog_block__show_more {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1600px) {
  .blog__block {
    padding: 7.25rem 5rem 8rem;
  }
}

@media (max-width: 986px) {
  .blog__block {
    padding-left: 18px;
    padding-right: 18px;

    .blog_block__head {
      flex-direction: column;
      gap: 30px;
      padding-left: 35px;
      padding-right: 35px;

      .blog_block__head__title {
        font-size: 36px;

        .blog_block__head__title__icon {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
}
</style>