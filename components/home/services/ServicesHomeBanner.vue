<template>
  <div>
<!--                    :effect="'cards'"-->
    <swiper
      :pagination="{
      type: 'progressbar',
    }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :grabCursor="true"

      :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    >
      <swiper-slide v-for="ci in call_2_action_items">
        <div class="services_project_banner">
          <div class="services_project_banner_wrapper">
            <div class="services_project_banner_wrapper__top">
              <div class="services_project_banner_wrapper__top__left">
                <!--                                <TagsBlock class="services_project_banner_wrapper__top__left__tags" :tags="tags"
                                                           :color="primaryColorText"/>-->
                <h3 class="services_project_banner_wrapper__top__left__header">{{ ci.item.title }}
                </h3>
                <p class="services_project_banner_wrapper__top__left__header__subtitle">
                  {{ ci.item.subtitle }}
                </p>

                <h3 class="services_project_banner_wrapper__top__left__header_m">
                  {{ ci.item.title }}
                </h3>
              </div>
            </div>
            <div class="services_project_banner_wrapper__body">
              <img :src="'//geek-flow.ru/cms/assets/'+ci.item.image" alt=""
                   class="services_project_banner">
            </div>
            <div class="services_project_banner_wrapper__body_m">
              <img :src="'//geek-flow.ru/cms/assets/'+ci.item.image" alt=""
                   class="services_project_banner__m">
            </div>
            <div class="services_project_banner_wrapper__bottom">
              <div class="services_project_banner_wrapper__bottom__left">
                <CircleArrowLinkWhite :link="ci.item.link"/>
              </div>
            </div>
            <div class="services_project_banner_wrapper__bottom_m">
              <p class="services_project_banner_m__subtitle " v-if="ci.item.subtitle">{{
                  ci.item.subtitle
                }}</p>
              <ButtonLinkIcon class="services_project_banner_wrapper__bottom_m__buttons"
                              :text="'Подробнее'"
                              :link="ci.item.link" :color="primaryColorText" :icon="'arrow'"/>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!--            <swiper-slide>
                      <div class="services_project_banner">
                          <div class="services_project_banner_wrapper">
                              <div class="services_project_banner_wrapper__top">
                                  <div class="services_project_banner_wrapper__top__left">
                                      <TagsBlock class="services_project_banner_wrapper__top__left__tags" :tags="tags"
                                                 :color="primaryColorText"/>
                                      <h3 class="services_project_banner_wrapper__top__left__header">
                                          Сайт банкетного<br/>
                                          ресторана SOLO
                                      </h3>
                                      <h3 class="services_project_banner_wrapper__top__left__header_m">
                                          Сайт банкетного ресторана SOLO
                                      </h3>
                                  </div>
                                                              <div class="services_project_banner_wrapper__top__right">
                                                                  <div class="banner_switcher">
                                                                      <fieldset id="switch" class="radio">
                                                                          <input checked="" name="switch" id="site" type="radio">
                                                                          <label for="site">Сайты</label>
                                                                          <input name="switch" id="landing" type="radio">
                                                                          <label for="landing">Лендинги</label>
                                                                      </fieldset>
                                                                  </div>
                                                              </div>-->
<!--  </div>-->
<!--  <div class="services_project_banner_wrapper__body_m">-->
<!--    <img src="/services-home-banner/mockup.png" alt="" class="services_project_banner__m">-->
<!--  </div>-->
<!--  <div class="services_project_banner_wrapper__bottom">-->
<!--    <div class="services_project_banner_wrapper__bottom__left">-->
<!--      <CircleArrowLinkWhite :link="'#'"/>-->
<!--    </div>-->
<!--    <div class="services_project_banner_wrapper__bottom__right">-->
<!--      <BlurLink link="/portfolio" :color="primaryColorText" text="Все статьи"/>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="services_project_banner_wrapper__bottom_m">-->
<!--    <p class="services_project_banner_m__subtitle">Разрабатываем сайты-->
<!--      для ваших проектов</p>-->
<!--    <ButtonLinkIcon class="services_project_banner_wrapper__bottom_m__buttons" :text="'Ещё'"-->
<!--                    link="/blog" :color="primaryColorText" :icon="'arrow'"/>-->
<!--    &lt;!&ndash;                            <ButtonLinkIcon class="services_project_banner_wrapper__bottom_m__buttons" :text="'Лендинги'" link="/portfolio" :color="primaryColorText" :icon="'arrow'" />&ndash;&gt;-->
<!--  </div>-->
<!--  </div>-->
<!--  </div>-->
<!--  </swiper-slide>-->
  </swiper>
  </div>
</template>

<script lang="ts" setup>
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from 'pinia';
import ButtonLinkIcon from "~/components/links/ButtonLinkIcon.vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, EffectCreative, Navigation, Pagination} from 'swiper';
import CircleArrowLinkWhite from "~/components/links/CircleArrowLinkWhite.vue";

const props = defineProps({
  call_2_action_items: Array,
})

const settingStore = useSettingStore();
const {primaryColorText} = storeToRefs(settingStore);

// const modules = [Pagination, Navigation, Autoplay, EffectCreative];

/*tags: [
        {text: 'сайт'},
        {text: 'брендинг'},
        {text: 'foodtech'},
    ],
    BANNER_ONE: 'BANNER_ONE',
    BANNER_TWO: 'BANNER_TWO',
    activeBanner: '',*/

/*let activeBanner = props.BANNER_ONE

const bannerSwitch = () => {
    if (activeBanner === props.BANNER_ONE) {
        activeBanner = props.BANNER_TWO
    } else {
        activeBanner = props.BANNER_ONE
    }
}*/
</script>

<style lang="scss">
@import "assets/styles/scss/_colors.scss";

:root {
  --swiper-theme-color: #fff;
}

.services_project_banner {
  height: 100%;
  background: linear-gradient(107.9deg, #151520 0%, #0E0E1C 100%);

  .services_project_banner_wrapper {
    padding: 1.875rem 1.875rem 2.5rem 1.875rem;
    width: 100%;
    height: 100%;
    min-height: 480px;
    position: relative;
    //background: url("/services-home-banner/slider-1.png") no-repeat;
    //background-size: cover;
    .services_project_banner_wrapper__top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 16rem;
      z-index: 2;
      position: relative;

      .services_project_banner_wrapper__top__left {
        max-width: 200px;

        .services_project_banner_wrapper__top__left__header {
          font-family: 'Onest Regular', serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1.5rem;
          line-height: 130%;
          /* or 31px */

          color: $textPrimary;
        }

        .services_project_banner_wrapper__top__left__header__subtitle {
          margin-top: 1rem;
          font-family: 'Onest Regular', serif;
          font-style: normal;
          font-weight: 500;
          font-size: 1rem;
          line-height: 130%;
          /* or 31px */

          color: $textPrimary;
        }

        .services_project_banner_wrapper__top__left__header_m {
          display: none;
        }
      }
    }

    .services_project_banner_wrapper__body {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .services_project_banner_wrapper__body_m {
      display: none;
    }

    .services_project_banner_wrapper__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      bottom: 40px;
      z-index: 1;
    }

    .services_project_banner_wrapper__bottom_m {
      display: none;
    }
  }
}

@media(min-width: 1600px) {
  .services_project_banner {
    .services_project_banner_wrapper {
      min-height: 655px;
      .services_project_banner_wrapper__top {
        //margin-bottom: 16rem;

        .services_project_banner_wrapper__top__left {
          max-width: 300px;

          .services_project_banner_wrapper__top__left__header {
            font-size: 1.5rem;
            line-height: 130%;
          }

          .services_project_banner_wrapper__top__left__header__subtitle {
            margin-top: 1rem;
            font-size: 1rem;
            line-height: 130%;
          }

          .services_project_banner_wrapper__top__left__header_m {
          }
        }
      }

      .services_project_banner_wrapper__body {
        img {
        }
      }

      .services_project_banner_wrapper__body_m {
      }

      .services_project_banner_wrapper__bottom {
      }

      .services_project_banner_wrapper__bottom_m {
      }
    }
  }
}

@media(max-width: 980px) {
}

@media (max-width: 480px) {
  .services_project_banner_wrapper {
    background: unset;
    overflow: hidden;
  }
  .services_project_banner_wrapper__top__left__header {
    display: none;
  }
  .services_project_banner_wrapper__top__left__header_m {
    display: block;
    font-family: 'Onest Regular', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    color: #FFFFFF;
  }
  .services_project_banner_wrapper__top {
    display: block;
    text-align: center;
    margin-bottom: 25px;
  }
  .services_project_banner_wrapper__top__left__tags {
    display: none;
  }
  .services_project_banner_wrapper__top__right {
    display: none;
  }

  .services_project_banner_wrapper__body_m {
    display: block;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
  }

  .services_project_banner_wrapper__bottom {
    display: none;
  }

  .services_project_banner_wrapper__bottom_m {
    display: block;
    max-width: 270px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    //padding-right: 24px;
    //padding-left: 24px;

    &:before {
      overflow: hidden;
      top: 0;
      content: " ";
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid #FFFFFF;
      border-radius: 20px;
      position: absolute;
      height: 100%;
      width: 100px;
      left: -60%;
    }

    &:after {
      overflow: hidden;
      top: 0;
      content: " ";
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid #FFFFFF;
      border-radius: 20px;
      position: absolute;
      height: 100%;
      width: 100px;
      right: -60%;
    }

    .services_project_banner_m__subtitle {
      font-family: 'Onest Regular', serif;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 140%;
      text-align: center;
      color: #FFFFFF;
      margin-bottom: 22px;
    }

    .services_project_banner_wrapper__bottom_m__buttons {
      background: rgba(255, 255, 255, 0.1);
      //border: 1px solid #FFFFFF;
      //border-radius: 24px;
      width: 100%;
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: unset;
      }
    }
  }

  .services_project_banner__m {
    max-width: 340px;
    width: 100%;
  }
}

</style>