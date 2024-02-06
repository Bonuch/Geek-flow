<template>
    <article class="portfolio">
        <div class="portfolio_item__head" :style="{backgroundImage: 'url('+getImageUrl(portfolio.background_img)+')'}">
            <div class="portfolio_item__head__wrapper">
                <h1 class="portfolio_item__head__title" v-html="portfolio.title"/>
                <div class="portfolio_item__head__wrapper__tags">
                    <span v-for="tag in tags()">{{ tag.name }}</span>
                </div>
            </div>
        </div>
        <div class="portfolio_body">
            <div v-for="(item, i) in portfolioSections()" class="portfolio__section_item"
                 :class="'portfolio__section_item_'+(i+1)">
                <div class="portfolio__section_item__slide">
                    <div class="portfolio__section_item__slide__wrapper">
                        <div v-if="i+1 === 3" class="portfolio__section_item__slide__wrapper_img_block__parent">

                            <div class="portfolio__section_item__slide__wrapper_img_block__parent__wrapper">
                                <div class="portfolio__section_item__slide__wrapper_img_block__parent__wrapper__image_shadow"
                                     :style="{backgroundImage: 'url('+getImageUrl(item.banner)+')'}"></div>
                                <img class="portfolio__section_item__slide__wrapper_img_block__parent__wrapper__image"
                                     :src="getImageUrl(item.banner)"
                                     :alt="item.banner.description +' | '+ item.banner.title">
                            </div>
                        </div>
                        <img v-else :src="getImageUrl(item.banner)"
                             :alt="item.banner.description +' | '+ item.banner.title">
                        <div class="portfolio__section_item__slide__bottom">
                            <span v-if="item.banner_title" class="portfolio__section_item__slide__bottom__title">{{
                                item.banner_title
                                }}</span>
                            <p v-if="item.banner_description" class="portfolio__section_item__slide__bottom__descr">{{
                                item.banner_description
                                }}</p>
                        </div>
                    </div>
                </div>
                <div class="portfolio__section_item__body" v-html="item.body"/>
            </div>
        </div>
        <div class="portfolio_footer">
            <div class="portfolio_footer__left">
                <div class="portfolio_dates">
                    <span class="portfolio_dates__date_of_issue">дата выпуска {{ portfolio.date_of_issue }}</span>
                    <span class="portfolio_dates__terms">Сделано за {{
                        portfolio.done_in_days
                        }} {{ portfolio.done_in_days > 5 ? 'дней' : 'дня' }}</span>
                </div>
                <div class="portfolio_members">
                    <div v-for="performer in portfolio.performers" class="portfolio_members_item">
                        <span class="portfolio_members_item__job">{{ performer.role }}</span>
                        <span class="portfolio_members_item__name">{{ performer.name }}</span>
                    </div>
                </div>
            </div>
            <div class="portfolio_footer__left__mob">
                <div class="portfolio_members">
                    <div class="portfolio_dates">
                        <span class="portfolio_dates__date_of_issue">дата выпуска {{ portfolio.date_of_issue }}</span>
                        <span class="portfolio_dates__terms">Сделано за {{
                            portfolio.done_in_days
                            }} {{ portfolio.done_in_days > 5 ? 'дней' : 'дня' }}</span>
                    </div>
                    <div v-for="performer in portfolio.performers" class="portfolio_members_item">
                        <span class="portfolio_members_item__job">{{ performer.role }}</span>
                        <span class="portfolio_members_item__name">{{ performer.name }}</span>
                    </div>
                </div>
            </div>
            <div class="portfolio_footer__right">
                <ButtonLinkIcon class="portfolio_footer__all_keises" :text="'Ещё проекты'" link="/portfolio"
                                :color="primaryColorText" :icon="'arrow'"/>
            </div>
        </div>
        <ContactFooterBlock/>
    </article>
</template>

<script setup lang="ts">
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from 'pinia';
import ButtonLinkIcon from "~/components/links/ButtonLinkIcon.vue";
import ContactFooterBlock from "~/components/contacts/ContactFooterBlock.vue";

const settingStore = useSettingStore();
const {primaryColorText, title, description} = storeToRefs(settingStore);

const route = useRoute()
const slug = route.params.slug
const portfolio = await fetchPortfolioById(Array.isArray(slug) ? slug[0] : slug)
const tags = () => {
    const tTags: { slug: any; name: any; }[] = [];
    portfolio.tags.forEach((tag: { item: { name: any; slug: any }; }) => {
        tTags.push({slug: tag.item.slug, name: tag.item.name})
    })
    return tTags
}

const portfolioSections = () => {
    const tPortfolioSections: [] = [];
    portfolio.sections.forEach((section: { item: any; }) => {
        tPortfolioSections.push(section.item);
    })
    return tPortfolioSections
}
useHead({
    title: portfolio.title + ' | ' + title,
    meta: [
        {
            name: 'description',
            content: portfolio.description ? portfolio.description + ' | ' + description.value : description.value
        }
    ]
})
</script>

<style lang="scss">
.portfolio {
  background: linear-gradient(107.9deg, #151520 0%, #0E0E1C 100%), linear-gradient(90deg, #2D2848 0%, #464061 100%);
}

.portfolio_item__head,
.portfolio__section_item {
  padding-left: 21.5625rem;
  padding-right: 21.5625rem;
}

.portfolio_item__head {
  padding-top: 7.5625rem;
  padding-bottom: 7.5625rem;
  background-size: cover;
  background-repeat: no-repeat;
}

.portfolio_item__head__title {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2.62500rem;
  //line-height: 49px;

  color: #FFFFFF;
}

.portfolio_item__head__wrapper {
  display: flex;
  justify-content: space-between;
}

.portfolio_item__head__wrapper__tags {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.portfolio_item__head__wrapper__tags span {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  text-align: right;

  color: #FFFFFF;
}

.portfolio__section_item:first-child {
  margin-top: -3rem;
}

.portfolio__section_item__slide {
  margin-bottom: 4.37500rem;
}

.portfolio__section_item__slide__wrapper img {
  width: 100%;
  border-radius: 0.9rem;
}

.portfolio__section_item__slide__bottom {
  margin-top: 1.62500rem;
}

.portfolio__section_item__slide__bottom__title {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  /* identical to box height, or 20px */
  color: #FFFFFF;
}

.portfolio__section_item__slide__bottom__descr {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  color: #B8B8BC;
}

.portfolio__section_item__slide__bottom,
.portfolio__section_item__body {
  padding-left: 4.37500rem;
  padding-right: 4.37500rem;
}

.portfolio__section_item__slide__bottom {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.portfolio__section_item__slide__bottom__title {
  margin-right: 0.875rem;
  white-space: nowrap;
}

.portfolio__section_item__body p {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  color: #B8B8BC;
  line-height: 130%;
}

.portfolio__section_item_1 .portfolio__section_item__body p {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  color: #FFFFFF;
}

.portfolio__section_item__body {
  padding-bottom: 5.62500rem;
}

.portfolio__section_item_2 .portfolio__section_item__body p:first-child {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  color: #FFFFFF;
}

.portfolio__section_item__slide__wrapper_img_block__parent img {
  position: relative;
  width: 100%;
}

.portfolio__section_item__slide__wrapper_img_block__parent .portfolio__section_item__slide__wrapper_img_block__parent__wrapper {
  position: relative;
  text-align: center;
}

.portfolio__section_item__slide__wrapper_img_block__parent__wrapper__image_shadow {
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

.portfolio__section_item_3 .portfolio__section_item__body p:first-child,
.portfolio__section_item_4 .portfolio__section_item__body p:first-child,
{
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  color: #FFFFFF;
}

.portfolio_footer {
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

.portfolio_dates {
  display: inline-flex;
  flex-direction: column;
  margin-right: 4.37500rem;
}

.portfolio_members {
  display: inline-flex;
}

.portfolio_members_item {
  display: flex;
  flex-direction: column;
  margin-right: 4.37500rem;
}

.portfolio_footer__all_keises {
  display: inline-block;
  padding: 0.875rem 1.25rem;
  float: right;
}

.portfolio_dates__terms {
  color: #B8B8BC;
}

.portfolio_members_item__name {
  color: #C47AFF;
}

.portfolio_footer__left__mob {
  display: none;
}

@media (min-width: 1600px) {
  .portfolio_item__head,
  .portfolio__section_item {
    padding-left: 15.5625rem;
    padding-right: 15.5625rem;
  }
  .portfolio_item__head__wrapper__tags {
    span {
      font-size: 1rem;
    }
  }

  .portfolio_footer {
    font-size: 1rem;
    line-height: 140%;


    color: #FFFFFF;
  }
}

@media (max-width: 1300px) {
  .portfolio_item__head, .portfolio__section_item {
    padding-left: 16.5625rem;
    padding-right: 16.5625rem;
  }
}

@media (max-width: 1139px) {
  .portfolio_item__head, .portfolio__section_item {
    padding-left: 10rem;
    padding-right: 10rem;
  }
}

@media (max-width: 986px) {
  .portfolio_item__head, .portfolio__section_item {
    padding-left: 18px;
    padding-right: 18px;
  }
  .portfolio_item__head__wrapper {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 8px;

    .portfolio_item__head__title {
      font-size: 24px;
      text-align: center;
      display: block;
    }

    .portfolio_item__head__wrapper__tags {
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

  .portfolio_body {
    .portfolio__section_item__slide__bottom {
      padding-left: 0;
      padding-right: 0;
    }

    .portfolio__section_item__body {
      padding-left: 0;
      padding-right: 0;
    }

    .portfolio__section_item_1 {
      .portfolio__section_item__body {
        p {
          font-size: 18px;
        }
      }
    }

    .portfolio__section_item_2 {
      .portfolio__section_item__body {
        p {
          &:first-child {
            font-size: 18px;
          }
        }
      }
    }

    .portfolio__section_item_3 {
      .portfolio__section_item__body {
        p {
          &:first-child {
            font-size: 18px;
          }
        }
      }
    }

    .portfolio__section_item_4 {
      .portfolio__section_item__body {
        p {
          &:first-child {
            font-size: 18px;
          }
        }
      }
    }
  }

  .portfolio_footer {
    margin-left: 18px;
    margin-right: 18px;
    flex-direction: column;
    gap: 30px;

    .portfolio_footer__left {
      display: none;
    }

    .portfolio_footer__left__mob {
      display: flex;

      .portfolio_members {
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