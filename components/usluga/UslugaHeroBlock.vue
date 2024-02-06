<template>
    <div class="usluga__hero_block">
<!--        <h1 class="usluga__hero_block__head__title"><span>[Индивидуальная]</span> разработка сайта</h1>-->
        <div class="usluga__hero_block__head" v-html="title">
        </div>
        <div class="usluga__hero_block__body">
            <div class="usluga__hero_block__body__wrapper">
                <div class="usluga__text_editor">
                    <div class="usluga__text_editor__tab">
                        <span class="usluga__text_editor__tab__icon"><img src="/u/tab_icon.svg" alt=""></span>
                        Разработка.js
                    </div>
                    <div class="usluga__text_editor__body">
                        <ol>
                            <li class="usluga__text_editor__body__line">
                                <span class="usluga__text_editor__body__line__number">1</span>
                                <span class="usluga__text_editor__color__purple">создадим
                инструмент</span> (<span
                                    class="usluga__text_editor__color__green">‘настроенный под вашу аудиторию’</span>)
                            </li>
                            <li class="usluga__text_editor__body__line">
                                <span class="usluga__text_editor__body__line__number">2</span>
                            </li>
                            <li class="usluga__text_editor__body__line">
                                <span class="usluga__text_editor__body__line__number">3</span><span
                                    class="usluga__text_editor__color__gray">/ / бренд и продукты</span>
                            </li>
                            <li class="usluga__text_editor__body__line">
                                <span class="usluga__text_editor__body__line__number">4</span>с
                                учетом всех <span class="usluga__text_editor__color__blue">= бизнес процессов</span>,
                                что позволит вам
                                (<span
                                    class="usluga__text_editor__color__green">‘.добиться.’</span>)
                            </li>
                            <li class="usluga__text_editor__body__line">
                                <span class="usluga__text_editor__body__line__number">5</span>максимальной
                                эффективности и <span class="usluga__text_editor__color__blue">= выделиться на фоне конкурентов</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        <div class="usluga__hero_block__footer">
            <ContactButtons :phone="phoneText" :phone-link="phoneLink"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import ContactButtons from "~/components/home/ContactButtons.vue";
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from "pinia";

const settingStore = useSettingStore();
const {phoneText, phoneLink} = storeToRefs(settingStore);
const props = defineProps({
    title: String,
})
</script>

<style lang="scss">

.usluga__hero_block {
  padding-top: 10.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  cursor: default;
}

.usluga__hero_block__head {
}

.usluga__hero_block__head__title {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2.62500rem;
  //line-height: 49px;
  text-align: center;
  color: #FFFFFF;
}

.usluga__hero_block__head__title span {
  color: #C47AFF;
}

.usluga__hero_block__head__title:after {
  content: url('/icons/ellipse.svg');
  position: relative;
  top: -19px;
}

.usluga__hero_block__body {
}

.usluga__hero_block__body__wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  padding-bottom: 5.25rem;
}

.usluga__text_editor {
  position: relative;
  cursor: default;
}

.usluga__text_editor:before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #8F00FF;
  opacity: 0.2;
  filter: blur(100px);
  /*content: ' ';
  background: #8F00FF;
  opacity: 0.2;
  filter: blur(100px);
  position: absolute;
  top: 0;
  bottom: 0;
  display: block;*/
}

.usluga__text_editor__tab {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 0.625rem;
  background: #232234;
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  //line-height: 140%;
  /* identical to box height, or 20px */
  color: #FFFFFF;
  border-radius: 0.5rem 0.5rem 0 0;
  margin-left: 3rem;
  margin-bottom: -1px;
}

.usluga__text_editor__tab__icon {
  background: #FFFFFF;
  border-radius: 2px;
  padding: 0.3125rem 0.1875rem;
  display: inline-flex;
}

.usluga__text_editor__tab__icon img {
  width: 14px;
  height: 10px;
}

.usluga__text_editor__body {
  padding: 1.25rem 5.5rem 1.25rem 1.5rem;
  background: #232234;
  border-radius: 0.5rem;
  position: relative;
}

.usluga__text_editor__body:before {
  content: url('/u/u_hero_body_left.svg');
  position: absolute;
  top: -257px;
  left: -400px;
}

.usluga__text_editor__body:after {
  content: url('/u/u_hero_body_right.svg');
  position: absolute;
  top: -257px;
  right: -400px;
}

.usluga__text_editor__body__line,
.usluga__text_editor__body__line__number {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  color: #B8B8BC;
}

.usluga__text_editor__body__line__number {
  padding-right: 3rem;
}

.usluga__text_editor__color__purple {
  color: #BB7CD7;
}

.usluga__text_editor__color__green {
  color: #A1C281;
}

.usluga__text_editor__color__gray {
  color: #8280A1;
}

.usluga__text_editor__color__blue {
  color: #52AEAE;
}

.usluga__hero_block__footer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  //margin-top: -310px;
}

@media (min-width: 1600px) {
  .usluga__text_editor__tab {
    font-size: 1rem;
  }
  .usluga__text_editor__body__line, .usluga__text_editor__body__line__number {
    font-size: 1rem;
  }
  .usluga__text_editor__tab__icon img {
    width: 20px;
    height: 15px;
  }
}
@media (max-width: 986px) {
  .usluga__hero_block {
    padding-top: 7.5rem;
    padding-left: 18px;
    padding-right: 18px;
    border-bottom: unset;

    .usluga__hero_block__head {
      .usluga__hero_block__head__title {
        font-size: 24px;

        &:after {
          content: none;
        }
      }
    }

    .usluga__hero_block__body {
      .usluga__hero_block__body__wrapper {
        .usluga__text_editor {
          position: relative;

          .usluga__text_editor__tab {
          }

          .usluga__text_editor__body {
            padding-right: 36px;
            transform-style: preserve-3d;

            &::before {
              transform: translateZ(-1px);
              left: -255px;
            }

            &:after {
              transform: translateZ(-1px);
              right: -255px;
            }

            ol {
              .usluga__text_editor__body__line {
                .usluga__text_editor__body__line__number {
                  padding-right: 1rem;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 586px) {
  .usluga__hero_block {
    .usluga__hero_block__body {
      .usluga__hero_block__body__wrapper {
        .usluga__text_editor {
          .usluga__text_editor__body {
            &::before {
              left: -25px;
            }

            &:after {
              right: -25px;
            }
          }
        }
      }
    }
  }
}
</style>