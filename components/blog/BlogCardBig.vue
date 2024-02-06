<template>
  <article class="blog_card_big">
    <img class="blog_card_big__image" :src="imageLink" :alt="title">
    <div class="blog_card_big__body">
      <div class="blog_card_big__body_left">
        <div class="blog_card_big__tags">
          <span class="blog_card_big__tags__item">
            <img src="/icons/star-purple.png" alt="Новое GeekFlow" class="blog_card_big__tags__item__icon">
            Новое
          </span>
          <span class="blog_card_big__tags__item">
            <img src="/icons/circle-time.png" alt="Время чтения 10 минут GeekFlow" class="blog_card_big__tags__item__icon">
            Время чтения {{readingTime}} {{readingTime > 5?'минут':'минуты'}}
          </span>
        </div>
        <h2 class="blog_card_big__title">{{ title }}</h2>
        <p class="blog_card_big__descr">{{ shortDescr }}</p>
        <ButtonLinkIcon style="display: inline-block;" class="" :icon="'arrow'" :link="link" :color="color"
                        text="Читать"/>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import CircleArrowLink from "~/components/links/CircleArrowLink.vue";
import ButtonLinkIcon from "~/components/links/ButtonLinkIcon.vue";
</script>
<script lang="ts">
export default defineComponent({
  props: {
    imageLink: String,
    title: String,
    shortDescr: String,
    link: String,
    color: String,
      readingTime: String,
  }
})
</script>
<style lang="scss">
.blog_card_big {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.blog_card_big__image {
  //margin-right: 2.75rem;
  width: 48%;
}

.blog_card_big__body {
  width: 48%;
}

.blog_card_big__tags {
  margin-bottom: 0.75rem;
}

.blog_card_big__tags__item {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  /* identical to box height, or 20px */
  color: #FFFFFF;
  margin-right: 1.12500rem;
}
.blog_card_big__tags__item:last-child {
  margin-right: unset;
}

.blog_card_big__tags__item__purple {
  color: #C47AFF;
}

.blog_card_big__title {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 28px;
  color: #FFFFFF;
  margin-bottom: 1.12500rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog_card_big__descr {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  color: #B8B8BC;
  margin-bottom: 2.25rem;
  line-height: 140%;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
@media (min-width: 1600px) {
  .blog_card_big__title {
    line-height: 1.65rem;
  }
}
</style>