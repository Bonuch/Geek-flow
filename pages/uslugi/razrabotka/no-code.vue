<template>
  <article class="usluga_no_code">
    <UslugaGeneralHeroBlock :hero_two_description="page.hero_two_description" :type="1"
                            :animation_url="page.spline_anim" :title="page.hero_title"
                            :description="page.hero_description"/>
    <!--        <UslugaNoCodeHeroBlock :hero_two_description="page.hero_two_description" :animation_url="page.spline_anim" :title="page.hero_title" :description="page.hero_description"/>-->
    <div class="usluga_no_code__hero_block__section_two">
      <div class="usluga_no_code__hero_block__section_two__body">
        <div class="usluga_no_code__hero_block__section_two__body_left">
          <p>{{ page.hero_two_description }}</p>
        </div>
        <nuxt-link :href="actionLink" class="usluga_no_code__hero_block__section_two__body_right">
          <img src="/u/no-code/card.png"
               :alt="page.hero_two_description">
        </nuxt-link>
      </div>
    </div>
    <p class="road_map_title">дорожная карта</p>
    <RoadMapBlock :value="page.roadmap[0].item" class="usluga_no_code__road_map_block"/>
    <div class="usluga_no_code__fill_breef">
      <ButtonLinkClear text="Заполнить бриф" to="#contact_footer_block__move"/>
    </div>
    <AdvantagesBlockNoCode class="usluga_no_code__road_advantage_block"/>
    <ProjectShortLargeTiles title="Все кейсы сайтов" class="usluga_no_code__project_short_block"/>
    <ContactFooterBlock/>
  </article>
</template>

<script setup lang="ts">
import ProjectShortLargeTiles from "~/components/tiles/ProjectShortLargeTiles.vue";
import ContactFooterBlock from "~/components/contacts/ContactFooterBlock.vue";
import RoadMapBlock from "~/components/usluga/RoadMapBlock.vue";
import UslugaNoCodeHeroBlock from "~/components/usluga/UslugaNoCodeHeroBlock.vue";
import AdvantagesBlockNoCode from "~/components/usluga/AdvantagesBlockNoCode.vue";
import ButtonLinkClear from "~/components/links/ButtonLinkClear.vue";
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from "pinia";
import {fetchNoCode} from "#imports";
import UslugaGeneralHeroBlock from "~/components/usluga/UslugaGeneralHeroBlock.vue";

const actionLink = "#contact_footer_block__move"

const settingStore = useSettingStore();
const {
  title, description
} = storeToRefs(settingStore);

const page = await fetchNoCode()

useHead({
  title: page.title ? page.title + ' | ' + title.value : title.value,
  meta: [
    {name: 'description', content: page.description ? page.description + ' | ' + description.value : description.value}
  ],
})
</script>

<style lang="scss">
.usluga_no_code {
  background: linear-gradient(107.9deg, #151520 0%, #0E0E1C 100%), linear-gradient(90deg, #2D2848 0%, #464061 100%);
}

.usluga_no_code__stack_technology_block,
.usluga_no_code__road_map_block {
  padding-top: 3.43rem;
}

.usluga_no_code__road_map_block,
.road_map_title {
  padding-left: 9.6875rem;
  padding-right: 11.25rem;
}

.usluga_no_code__fill_breef {
  padding-left: 11.25rem;
  padding-right: 11.25rem;
  padding-bottom: 120px;
  //display: block;
}

.usluga_no_code__road_advantage_block {
  padding-left: 11.25rem;
  padding-right: 11.25rem;
  padding-bottom: 7.625rem;
}

.road_map_title {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  color: #C47AFF;
}

.usluga_no_code__hero_block__section_two {
  padding-top: 146px;
  padding-bottom: 143px;
  padding-left: 9rem;
  padding-right: 9rem;
  overflow: hidden;

  .usluga_no_code__hero_block__section_two__body {
    display: flex;
    align-items: center;

    .usluga_no_code__hero_block__section_two__body_left {
      flex: 1;
      width: 50%;

      p {
        font-family: 'Onest Regular', serif;
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 140%;
        /* or 45px */


        color: #FFFFFF;
        max-width: 555px;
      }
    }

    .usluga_no_code__hero_block__section_two__body_right {
      flex: 1;
      width: 50%;
      position: relative;

      img {
        position: relative;
        right: -20%;
        width: 100%;
      }
    }
  }
}

@media (min-width: 1600px) {
  .usluga_no_code__road_map_block,
  .road_map_title {
    padding-left: 9rem;
    padding-right: 9rem;
  }
  .usluga_no_code__road_advantage_block {
    padding-left: 9rem;
    padding-right: 9rem;
    padding-bottom: 200px;
  }
  .usluga_no_code__hero_block__section_two {
    .usluga_no_code__hero_block__section_two__body {
      .usluga_no_code__hero_block__section_two__body_left {
        p {
          max-width: unset;
        }
      }
    }
  }
}

@media (max-width: 986px) {
  .usluga_no_code__hero_block__section_two {
    padding: 80px 18px 0 18px;
    .usluga_no_code__hero_block__section_two__body {
      .usluga_no_code__hero_block__section_two__body_left {
        p {
          font-size: 1.5rem;
          line-height: 110%;
        }
      }
    }
  }
  .usluga_no_code__stack_technology_block {
    padding-top: unset;
  }
  .usluga_no_code__road_map_block {
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 80px;
  }
  .usluga_no_code__road_advantage_block {
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 85px;
  }
  .road_map_title {
    display: none;
  }
  .usluga_no_code__fill_breef {
    padding-bottom: 120px;
    padding-right: unset;
    padding-left: unset;
    text-align: center;
  }
}

@media (max-width: 586px) {
  .usluga_no_code__hero_block__section_two {
    .usluga_no_code__hero_block__section_two__body {
      .usluga_no_code__hero_block__section_two__body_left {
        p {
        }

      }

      .usluga_no_code__hero_block__section_two__body_right {
        //display: none;

        img {
        }
      }
    }
  }
}

@media (max-width: 486px) {
  .usluga_no_code__hero_block__section_two {
    .usluga_no_code__hero_block__section_two__body {
      flex-direction: column;

      .usluga_no_code__hero_block__section_two__body_left {
        width: 100%;

        p {
        }
      }

      .usluga_no_code__hero_block__section_two__body_right {
        width: 100%;
        margin-top: 3rem;

        img {
          right: 0;
        }
      }
    }
  }
}
</style>