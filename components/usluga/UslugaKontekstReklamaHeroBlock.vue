<template>
    <div class="usluga_kontekst_reklama__hero_block">
        <div class="usluga_kontekst_reklama__hero_block__section_one">
            <div class="usluga_kontekst_reklama__hero_block__head">
                <h1 class="usluga_kontekst_reklama__hero_block__head__title" v-html="title"></h1>
                <div class="usluga_kontekst_reklama__hero_block__head__subtitle" v-html="description">
                </div>
<!--                <h2 class="usluga_kontekst_reklama__hero_block__head__subtitle" v-html=""></h2>-->
            </div>
            <div class="usluga_kontekst_reklama__hero_block__body">
                <div class="spline_wrapper">
                    <spline-viewer id="spline_kontekst_reklama" loading-anim
                                   :url="animation_url"></spline-viewer>
                </div>
            </div>
            <div class="usluga_kontekst_reklama__hero_block__footer">
                <ContactButtons :phone="phoneText" :phone-link="phoneLink"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ContactButtons from "~/components/home/ContactButtons.vue";
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from "pinia";
import {splineScript} from "~/composables/splineScript";

const settingStore = useSettingStore();
const {phoneText, phoneLink} = storeToRefs(settingStore);

const props = defineProps({
    title: String,
    description: String,
    animation_url: String,
})

useHead({
    // script: [{type: "module", src: "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"}]
})
onBeforeMount(() => {
    splineScript()
})
</script>

<style lang="scss">
.usluga_kontekst_reklama__hero_block {
  position: relative;

  .usluga_kontekst_reklama__hero_block__section_one {
    padding-top: 8.4375rem;
    padding-left: 40px;
    padding-right: 40px;
    overflow: hidden;
    cursor: default;
    min-height: 100vh;
    //background-image: url("/u/ready-solutions/bg-hero.jpeg");
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;

    .usluga_kontekst_reklama__hero_block__head {
      display: flex;
      flex-direction: column;
      gap: 14px;
      align-items: center;

      .usluga_kontekst_reklama__hero_block__head__title {
        font-family: 'Onest Regular', serif;
        font-style: normal;
        font-weight: 500;
        font-size: 2.62500rem;
        //line-height: 49px;
        text-align: center;
        color: #FFFFFF;
      }

      .usluga_kontekst_reklama__hero_block__head__subtitle {
        font-family: 'Onest Regular', serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 140%;
        /* or 22px */

        text-align: center;

        color: #FFFFFF;

        max-width: 670px;
      }
    }

    .usluga_kontekst_reklama__hero_block__body {
      position: relative;
      //height: 100vh;
      margin-top: -50px;

      .spline_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        #spline_kontekst_reklama {
          max-width: 800px;
          width: 100%;
          margin-right: -50px;
          //position:absolute;
          //left: 22%;
        }
      }
    }

    .usluga_kontekst_reklama__hero_block__footer {
      display: flex;
      align-items: center;
      justify-content: center;
      //margin-top: -310px;
    }
  }

  .usluga_kontekst_reklama__hero_block__section_two {
    padding: 67px 40px 55px;

    .usluga_kontekst_reklama__hero_block__section_two__body {
      display: flex;
      align-items: center;

      .usluga_kontekst_reklama__hero_block__section_two__body_left {
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

      .usluga_kontekst_reklama__hero_block__section_two__body_right {
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

}

@media (max-width: 986px) {
  .usluga_kontekst_reklama__hero_block {
    .usluga_kontekst_reklama__hero_block__section_one {
      padding-top: 7.5rem;
      padding-left: 18px;
      padding-right: 18px;
      border-bottom: unset;
        min-height: auto;

      .usluga_kontekst_reklama__hero_block__head {
        .usluga_kontekst_reklama__hero_block__head__title {
          font-size: 1.5rem;

          &:after {
            content: none;
          }
        }
      }

      .usluga_kontekst_reklama__hero_block__body {
        display: none;
      }

      .usluga_kontekst_reklama__hero_block__footer {
        margin-top: 20px;
      }

    }

    .usluga_kontekst_reklama__hero_block__section_two {
      .usluga_kontekst_reklama__hero_block__section_two__body {
        .usluga_kontekst_reklama__hero_block__section_two__body_left {
          p {
            font-size: 1.5rem;
            line-height: 110%;
          }
        }
      }
    }
  }
}

@media (max-width: 711px) {
  .usluga_kontekst_reklama__hero_block {
    .usluga_kontekst_reklama__hero_block__section_two {
      .usluga_kontekst_reklama__hero_block__section_two__body {
        .usluga_kontekst_reklama__hero_block__section_two__body_left {
          p {
          }
        }
      }
    }
  }
}

@media (max-width: 586px) {
  .usluga_kontekst_reklama__hero_block {
    .usluga_kontekst_reklama__hero_block__section_one {
      .usluga_kontekst_reklama__hero_block__body {
        .usluga_kontekst_reklama__hero_block__body__wrapper {
        }
      }
    }
  }
}
</style>