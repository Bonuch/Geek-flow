<template>
  <div class="usluga_no_code__hero_block">
    <div class="usluga_no_code__hero_block_img usluga_no_code__hero_block_img_1" v-if="type === 1"></div>
    <div class="usluga_no_code__hero_block_img usluga_no_code__hero_block_img_2" v-if="type === 2"></div>
    <div class="usluga_no_code__hero_block_img usluga_no_code__hero_block_img_3" v-if="type === 3"></div>
    <div class="usluga_no_code__hero_block_img usluga_no_code__hero_block_img_4" v-if="type === 4"></div>
    <div class="usluga_no_code__hero_block__section_one">
      <div class="usluga_no_code__hero_block__head">
        <h1 class="usluga_no_code__hero_block__head__title" v-html="title"></h1>
        <div class="usluga_no_code__hero_block__head__subtitle" v-html="description"></div>
        <BaseButton/>
      </div>
<!--      <div class="usluga_no_code__hero_block__body">-->
<!--        <div class="spline_wrapper">-->
<!--          <spline-viewer id="spline_no_code" loading-anim-->
<!--                         :url="animation_url"></spline-viewer>-->
<!--        </div>-->
<!--      </div>-->
    </div>

  </div>
</template>

<script setup lang="ts">
import ContactButtons from "~/components/home/ContactButtons.vue";
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from "pinia";
import {splineScript} from "~/composables/splineScript";
import BaseButton from "~/components/home/BaseButton.vue";

const settingStore = useSettingStore();
const {phoneText, phoneLink} = storeToRefs(settingStore);
const props = defineProps({
  title: String,
  description: String,
  type: Number,
})
useHead({
  // script: [{type: "module", src: "https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"}]
})
onBeforeMount(() => {
  splineScript()
})
</script>

<style lang="scss" scoped>
.usluga_no_code__hero_block {
  &_img {
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    min-height: 100vh;
    object-fit: cover;
    &_1 {
      background-image: url("/tiles/plug_11.jpg");
    }

    &_2 {
      background-image: url("/tiles/plug_12.jpg");
    }

    &_3 {
      background-image: url("/tiles/plug_13.jpg");
    }

    &_4 {
      background-image: url("/tiles/plug_14.jpg");
    }
  }
  .usluga_no_code__hero_block__section_one {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    z-index: 2;
    //padding-top: 8.4375rem;
    padding-left: 40px;
    padding-right: 40px;
    overflow: hidden;
    cursor: default;
    min-height: 100vh;

    .usluga_no_code__hero_block__head {
      display: flex;
      flex-direction: column;
      gap: 14px;
      align-items: flex-start;
      max-width: 555px;

      .usluga_no_code__hero_block__head__title {
        font-family: 'Onest Regular', serif;
        font-style: normal;
        font-weight: 700;
        font-size: 2.62500rem;
        line-height: 2.7rem;
        text-align: start;
        color: #FFFFFF;
        margin-bottom: 16px;
      }

      .usluga_no_code__hero_block__head__subtitle {
        font-family: 'Onest Regular', serif;
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 22px;
        text-align: start;
        color: #FFFFFF;
        margin-bottom: 42px;
      }
    }

    .usluga_no_code__hero_block__body {
      position: relative;
      margin-top: -50px;

      .spline_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        #spline_no_code {
          max-width: 800px;
          width: 100%;
          margin-right: -50px;
        }
      }
    }

    .usluga_no_code__hero_block__footer {
      display: flex;
      align-items: center;
      justify-content: center;
      //margin-top: -310px;
    }
  }
}

@media (min-width: 1600px) {
  .usluga_no_code__hero_block {
    &_img {
      background-position: right;
    }
    .usluga_no_code__hero_block__section_one {
      .usluga_no_code__hero_block__head {
        max-width: 670px;
        .usluga_no_code__hero_block__head__title {
        }

        .usluga_no_code__hero_block__head__subtitle {
          line-height: 30px;
        }
      }

      .usluga_no_code__hero_block__body {
      }

      .usluga_no_code__hero_block__footer {
      }
    }
  }
}

@media (max-width: 1440px) {
  .usluga_no_code__hero_block {
    &_img {
      //&_1 {
      //  background-image: url("/tiles/plug_15.jpg");
      //}
      //&_2 {
      //  background-image: url("/tiles/plug_16.jpg");
      //}
      //&_3 {
      //  background-image: url("/tiles/plug_17.jpg");
      //}
      //&_4 {
      //  background-image: url("/tiles/plug_18.jpg");
      //}
    }
  }
}

@media (max-width: 986px) {
  .usluga_no_code__hero_block {
    &_img {
      min-height: 43%;
    }
    .usluga_no_code__hero_block__section_one {
      padding-top: 7.5rem;
      padding-left: 18px;
      padding-right: 18px;
      padding-bottom: 100px;
      border-bottom: unset;
      min-height: unset;

      .usluga_no_code__hero_block__head {
        .usluga_no_code__hero_block__head__title {
          font-size: 1.5rem;
          margin-bottom: 10px;
          &:after {
            content: none;
          }
        }
        .usluga_no_code__hero_block__head__subtitle {
          margin-bottom: 20px;
        }
      }

      .usluga_no_code__hero_block__body {
        display: none;
      }

      .usluga_no_code__hero_block__footer {
        margin-top: 20px;
      }
    }
  }
}
@media (max-width: 767px) {
  .usluga_no_code__hero_block {
    &_img {
      background-position: center;
      min-height: 39%;
    }
    .usluga_no_code__hero_block__section_one {
      padding-bottom: 60px;
    }
  }
}

@media (max-width: 586px) {
  .usluga_no_code__hero_block {
    &_img {
      min-height: 37%;
    }
    .usluga_no_code__hero_block__section_one {
      .usluga_no_code__hero_block__head {
        .usluga_no_code__hero_block__head__title {
          line-height: 2rem;
        }
      }
      .usluga_no_code__hero_block__body {
        .usluga_no_code__hero_block__body__wrapper {
        }
      }
    }
  }
}

@media (max-width: 390px) {
  .usluga_no_code__hero_block {
    &_img {
      min-height: 53%;
    }
  }
}
</style>