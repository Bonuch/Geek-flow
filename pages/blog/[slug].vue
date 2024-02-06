<template>
    <article class="post">
        <div class="post_item__head" :style="{backgroundImage: 'url('+getImageUrl(post.preview_img)+')'}">
            <div class="post_item__head__wrapper">
                <h1 class="post_item__head__title" v-html="post.title"/>
                <div class="post_item__head__wrapper__tags">
                    <span v-for="tag in tags()">{{ tag.name }}</span>
                </div>
            </div>
        </div>
        <div class="post_body">
            <div v-for="(item, i) in postSections()" class="post__section_item"
                 :class="'post__section_item_'+(i+1)">
                <div class="post__section_item__slide">
                    <div class="post__section_item__slide__wrapper">
                        <div v-if="i+1 === 3" class="post__section_item__slide__wrapper_img_block__parent">

                            <div class="post__section_item__slide__wrapper_img_block__parent__wrapper">
                                <div class="post__section_item__slide__wrapper_img_block__parent__wrapper__image_shadow"
                                     :style="{backgroundImage: 'url('+getImageUrl(item.banner)+')'}"></div>
                                <img class="post__section_item__slide__wrapper_img_block__parent__wrapper__image"
                                     :src="getImageUrl(item.banner)"
                                     :alt="item.banner.description +' | '+ item.banner.title">
                            </div>
                        </div>
                        <img v-else :src="getImageUrl(item.banner)"
                             :alt="item.banner.description +' | '+ item.banner.title">
                        <div class="post__section_item__slide__bottom">
                            <span v-if="item.banner_title" class="post__section_item__slide__bottom__title">{{
                                item.banner_title
                                }}</span>
                            <p v-if="item.banner_description" class="post__section_item__slide__bottom__descr">{{
                                item.banner_description
                                }}</p>
                        </div>
                    </div>
                </div>
                <div class="post__section_item__body" v-html="item.body"/>
            </div>
        </div>
        <ContactFooterBlock/>
    </article>
</template>

<script setup lang="ts">
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from 'pinia';
import ContactFooterBlock from "~/components/contacts/ContactFooterBlock.vue";

const settingStore = useSettingStore();
const {primaryColorText, title, description} = storeToRefs(settingStore);

const route = useRoute()
const slug = route.params.slug
const post = await fetchBlogById(Array.isArray(slug) ? slug[0] : slug)
const tags = () => {
    const tTags: { slug: any; name: any; }[] = [];
    post.post_tags.forEach((tag: { item: { name: any; slug: any }; }) => {
        tTags.push({slug: tag.item.slug, name: tag.item.name})
    })
    return tTags
}

const postSections = () => {
    const tPortfolioSections: [] = [];
    post.post_sections.forEach((section: { item: any; }) => {
        tPortfolioSections.push(section.item);
    })
    return tPortfolioSections
}
useHead({
    title: post.title + ' | ' + title,
    meta: [
        {name: 'description', content: post.description ?  post.description + ' | ' + description.value : description.value}
    ]
})
</script>

<style lang="scss">
.post {
  background: linear-gradient(107.9deg, #151520 0%, #0E0E1C 100%), linear-gradient(90deg, #2D2848 0%, #464061 100%);
}

.post_item__head,
.post__section_item {
  padding-left: 21.5625rem;
  padding-right: 21.5625rem;
}

.post_item__head {
  padding-top: 7.5625rem;
  padding-bottom: 7.5625rem;
  background-size: cover;
  background-repeat: no-repeat;
}

.post_item__head__title {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2.62500rem;
  //line-height: 49px;

  color: #FFFFFF;
}

.post_item__head__wrapper {
  display: flex;
  justify-content: space-between;
}

.post_item__head__wrapper__tags {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.post_item__head__wrapper__tags span {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  text-align: right;

  color: #FFFFFF;
}

.post__section_item:first-child {
  margin-top: -3rem;
}

.post__section_item__slide {
  margin-bottom: 4.37500rem;
}

.post__section_item__slide__wrapper img {
  width: 100%;
  border-radius: 0.9rem;
}

.post__section_item__slide__bottom {
  margin-top: 1.62500rem;
}

.post__section_item__slide__bottom__title {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  /* identical to box height, or 20px */
  color: #FFFFFF;
}

.post__section_item__slide__bottom__descr {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  color: #B8B8BC;
}

.post__section_item__slide__bottom,
.post__section_item__body {
  padding-left: 4.37500rem;
  padding-right: 4.37500rem;
}

.post__section_item__slide__bottom {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.post__section_item__slide__bottom__title {
  margin-right: 0.875rem;
  white-space: nowrap;
}

.post__section_item__body {
    * {
        font-family: 'Onest Regular', serif;
        font-style: initial;
        font-weight: inherit;
        //font-size: 0.875rem;
        //color: #B8B8BC;
        line-height: 130%;
    }
    ul, ol {
        list-style: initial;
    }
    p {
        margin: 12px 0;
    }
    b, strong {
        font-weight: 700;
    }
    ol li, ul li {
        margin: 10px 0 10px 2em;
        word-wrap: break-word;
    }
}

/*.post__section_item_1 .post__section_item__body p {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  color: #FFFFFF;
}*/

.post__section_item__body {
  padding-bottom: 5.62500rem;
}

/*.post__section_item_2 .post__section_item__body p:first-child {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  color: #FFFFFF;
}*/

.post__section_item__slide__wrapper_img_block__parent img {
  position: relative;
  width: 100%;
}

.post__section_item__slide__wrapper_img_block__parent .post__section_item__slide__wrapper_img_block__parent__wrapper {
  position: relative;
  text-align: center;
}

.post__section_item__slide__wrapper_img_block__parent__wrapper__image_shadow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(11px);
  border-radius: 0.9rem;
}

/*.post__section_item_3 .post__section_item__body p:first-child,
.post__section_item_4 .post__section_item__body p:first-child,
{
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  color: #FFFFFF;
}*/

.post_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 5rem;
  margin-right: 5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding-top: 1.5rem;
  padding-bottom: 5.62500rem;

  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */


  color: #FFFFFF;
}

.post_dates {
  display: inline-flex;
  flex-direction: column;
  margin-right: 4.37500rem;
}

.post_members {
  display: inline-flex;
}

.post_members_item {
  display: flex;
  flex-direction: column;
  margin-right: 4.37500rem;
}

.post_footer__all_keises {
  display: inline-block;
  padding: 0.875rem 1.25rem;
  float: right;
}

.post_dates__terms {
  color: #B8B8BC;
}

.post_members_item__name {
  color: #C47AFF;
}

.post_footer__left__mob {
  display: none;
}

@media (min-width: 1600px) {
  .post_item__head, .post__section_item {
    padding-left: 15.5625rem;
    padding-right: 15.5625rem;
  }
    .post__section_item__body {
        a, li, p, strong {
            font-family: 'Onest Regular', serif;
            font-style: normal;
            font-weight: 500;
            font-size: 0.875rem;
            color: #B8B8BC;
            line-height: 130%;
        }
    }
}

@media (max-width: 1300px) {
  .post_item__head, .post__section_item {
    padding-left: 16.5625rem;
    padding-right: 16.5625rem;
  }
}

@media (max-width: 1139px) {
  .post_item__head, .post__section_item {
    padding-left: 10rem;
    padding-right: 10rem;
  }
}

@media (max-width: 986px) {
  .post_item__head, .post__section_item {
    padding-left: 18px;
    padding-right: 18px;
  }
  .post_item__head__wrapper {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 8px;

    .post_item__head__title {
      font-size: 24px;
      text-align: center;
      display: block;
    }

    .post_item__head__wrapper__tags {
      flex-direction: row;
      gap: 22px;

      span {
        position: relative;

        &:before {
          display: inline-block;
          content: " ";
          background: url("/icons/ellipse.svg");
          background-size: cover;
          width: 8px;
          height: 8px;
          top: 6px;
          left: -11px;
          position: absolute;
        }
      }
    }
  }

  .post_body {
    .post__section_item__slide__bottom {
      padding-left: 0;
      padding-right: 0;
    }

    .post__section_item__body {
      padding-left: 0;
      padding-right: 0;
    }

    .post__section_item_1 {
      .post__section_item__body {
        p {
          font-size: 18px;
        }
      }
    }

    .post__section_item_2 {
      .post__section_item__body {
        p {
          &:first-child {
            //font-size: 18px;
          }
        }
      }
    }

    .post__section_item_3 {
      .post__section_item__body {
        p {
          &:first-child {
            //font-size: 18px;
          }
        }
      }
    }

    .post__section_item_4 {
      .post__section_item__body {
        p {
          &:first-child {
            //font-size: 18px;
          }
        }
      }
    }
  }

  .post_footer {
    margin-left: 18px;
    margin-right: 18px;
    flex-direction: column;
    gap: 30px;

    .post_footer__left {
      display: none;
    }

    .post_footer__left__mob {
      display: flex;

      .post_members {
        display: flex;
        flex-wrap: wrap;
        gap: 18px;

        div {
          margin: unset;
          width: 45%;

          &:nth-child(1) {
            order: 4;
          }
        }
      }
    }
  }
}
</style>