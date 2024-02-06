<template>
    <section class="home_blog_block">
        <div class="home_blog_block__head">
            <h4 class="home_blog_block__head__title">{{ title }}</h4>
            <!--      <span class="home_blog_block__head__line"></span>-->
            <ButtonLinkIconWhite class="home_blog_block__head__b" :icon="'arrow'" link="/blog"
                                 text="Перейти в блог"/>
        </div>
        <div class="home_blog_block__body">
            <BlogGrid :articles="articles"/>
        </div>
        <div class="home_blog_block__bottom__b__wrapper">
            <ButtonLinkIconWhite class="home_blog_block__bottom__b" :icon="'arrow'" :link="'/blog'"
                                 text="Перейти в блог"/>
        </div>
    </section>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useSettingStore} from "~/stores/settings";
import ButtonLinkIconWhite from "~/components/links/ButtonLinkIconWhite.vue";
import {fetchBlogPreview} from "~/composables/cmsBlog";

const props = defineProps({
    title: String
})

const settingStore = useSettingStore()
const {primaryColorText} = storeToRefs(settingStore);
const articles = await fetchBlogPreview(7)
</script>

<style lang="scss">
@import "@/assets/styles/scss/_colors.scss";
@import "@/assets/styles/scss/_sizes.scss";

.home_blog_block {
  padding: 10.9375rem $standardBlockPadding 12.5rem;
}

.home_blog_block__head {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.home_blog_block__head__title {
  white-space: nowrap;
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2.62500rem;
  line-height: 130%;
  /* identical to box height, or 55px */
  color: $textPrimary;
  display: inline-block;
  width: 33%;
}

.home_blog_block__head__line {
  display: inline-block;
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: 1px;
  width: 47%;
  margin-right: 1.75rem;
  margin-left: 1.75rem;
  margin-top: 5px;
}

.home_blog_block__head__b {
  display: inline-block;
  //width: 11.37500%;
}

.home_blog_block__body {
  margin-top: 4.1875rem;
}

.home_blog_block__bottom__b__wrapper {
  display: none;
}

@media (min-width: 1600px) {
  .home_blog_block {
    padding: 7.9375rem $standardBlockPadding 9.5rem;
  }
}

@media (max-width: 980px) {
  .home_blog_block {
    padding-top: 3.75rem;
    padding-bottom: 3.75rem;
  }
  .home_blog_block__head {
    display: block;
  }
  .home_blog_block__head__title {
    text-align: center;
    width: 100%;
  }
  .home_blog_block__head__b {
    display: none;
  }
  .home_blog_block__body {
    margin-bottom: 1.75rem;
  }
  .blog_grid {
    grid-template-columns: 1fr;
  }

  .blog_card__image {
    margin-bottom: 1.12500rem;
  }

  .blog_card__title {
    font-size: 1.12500rem;
  }
  .home_blog_block__bottom__b__wrapper {
    display: block;
  }
  .home_blog_block__bottom__b {
    display: block;
    margin: 0 auto;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .home_blog_block {
    padding-left: $mobileBlockPadding;
    padding-right: $mobileBlockPadding;
  }
  .home_blog_block__head__title {
    font-size: 24px;
  }
  .home_blog_block__body {
    margin-top: 28px;
  }
}
</style>