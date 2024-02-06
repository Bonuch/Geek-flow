<template>
  <article class="blog_card">
    <img class="blog_card__image" :src="imageLink" :alt="title">
    <div class="blog_card__body">
      <div class="blog_card__body_left">
        <h2 class="blog_card__title">{{title}}</h2>
        <p class="blog_card__descr">{{shortDescr}}</p>
      </div>
      <div class="blog_card__body_right">
        <CircleArrowLinkWhite class="blog_card__body_right__link" :link="link"/>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import CircleArrowLinkWhite from "~/components/links/CircleArrowLinkWhite.vue";
const props = defineProps({
    imageLink: String,
    title: String,
    shortDescr: String,
    link: String,
    color: String,
})
</script>
<style lang="scss">
.blog_card__image {
  width: 100%;
  height: auto;
  margin-bottom: 1.62500rem;
  border-radius: 10px;
}
.blog_card__body {
  display: flex;
  justify-content: space-between;
}

.blog_card__body_left {
  max-width: 18.37500rem;
}
.blog_card__title {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 28px;
  color: #FFFFFF;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.blog_card__descr {
  margin-top: 0.75rem;
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 140%;
  /* or 20px */
  color: rgba(255, 255, 255, 0.7);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
@media (min-width: 1600px) {
  .blog_card__title {
    line-height: 1.65rem;
  }
}
@media (max-width: 980px) {
  .blog_card__body_right__link {
    height: 100%;
    border-radius: 26px;
  }
}
</style>