<template>
    <div class="uslugi_menu_page">
        <div class="uslugi_menu_page__head">
            <h1 class="uslugi_menu_page__head__title">Все услуги</h1>
            <h2 class="uslugi_menu_page__head__subtitle">Выберите необходимое направление и услугу</h2>
        </div>
        <div class="uslugi_menu_page__body">
            <div class="uslugi_menu_page__body__nav_block">
                <div class="uslugi_nav_container">
                    <h3 class="uslugi_nav_head">Разработка</h3>
                    <nav class="uslugi_nav_body">
                        <NuxtLink to="/uslugi/razrabotka/individualnaya" class="uslugi_nav_item">Индивидуальная
                            разработка →
                        </NuxtLink>
                        <NuxtLink to="/uslugi/razrabotka/no-code" class="uslugi_nav_item">Разработка лендингов [no-code]
                            →
                        </NuxtLink>
                        <NuxtLink to="/uslugi/razrabotka/gotovye-resenia" class="uslugi_nav_item">Готовые решения →
                        </NuxtLink>
                    </nav>
                </div>
            </div>
            <!--            <div class="uslugi_menu_page__body__nav_block">
                            <div class="uslugi_nav_container">
                                <h4 class="uslugi_nav_head">Разработка</h4>
                                <nav class="uslugi_nav_body">
                                    <NuxtLink to="#" class="uslugi_nav_item">UX/UI дизайн →</NuxtLink>
                                    <NuxtLink to="#" class="uslugi_nav_item">Брендинг →</NuxtLink>
                                    <NuxtLink to="#" class="uslugi_nav_item">3D Дизайн →</NuxtLink>
                                </nav>
                            </div>
                        </div>-->
            <div class="uslugi_menu_page__body__nav_block">
                <div class="uslugi_nav_container">
                    <h3 class="uslugi_nav_head">Продвижение</h3>
                    <nav class="uslugi_nav_body">
                        <NuxtLink to="/uslugi/prodvizhenie/seo" class="uslugi_nav_item">SEO →</NuxtLink>
                        <NuxtLink to="/uslugi/prodvizhenie/kontekstnaya-reklama" class="uslugi_nav_item">Контекстная
                            реклама →
                        </NuxtLink>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from "pinia";
import {fetchUslugiSettings} from "~/composables/cmsOtherSettings";

/*const {getItems} = useDirectusItems()
const categories = await getItems({
    collection: 'category_uslug'
})*/
// console.log()
const settingStore = useSettingStore();
const {
    phoneLink,
    phoneText,
    email,
    telegramLink,
    telegramText,
    primaryColorText,
    socialList
} = storeToRefs(settingStore);

const {
    title, description
} = storeToRefs(settingStore);

const page = await fetchUslugiSettings()

useHead({
    title: page.title ? page.title + ' | ' + title.value : title.value,
    meta: [
        {
            name: 'description',
            content: page.description ? page.description + ' | ' + description.value : description.value
        }
    ],
})
</script>

<style lang="scss">
//height: 100vh;
.uslugi_menu_page {
  min-height: 100vh;
  background-color: #141420;

  .uslugi_menu_page__head {
    padding: 9.5625rem 40px 5rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;

    .uslugi_menu_page__head__title {
      font-family: 'Onest Regular', serif;
      font-style: normal;
      font-weight: 500;
      font-size: 42px;
      line-height: 49px;
      /* identical to box height */
      color: #FFFFFF;
    }

    .uslugi_menu_page__head__subtitle {
      font-family: 'Onest Regular', serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */
      text-align: left;
      color: #FFFFFF;
    }
  }

  .uslugi_menu_page__body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;

    .uslugi_menu_page__body__nav_block {
      padding: 80px 40px 150px;
      position: relative;

      &:before {
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        mix-blend-mode: screen;
        filter: blur(20px);
        content: " ";
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }

      &:nth-child(1) {
        &:before {
          background-image: url("/u/menu/bg-1.jpeg");
        }
      }

      &:nth-child(2) {
        &:before {
          background-image: url("/u/menu/bg-2.jpeg");
        }
      }

      &:nth-child(3) {
        &:before {
          background-image: url("/u/menu/bg-3.jpeg");
        }
      }

      &:after {
        border-right: 1px solid rgba(255, 255, 255, 0.05);
        content: ' ';
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        right: 0;
        top: 40px;
      }

      &:last-child {
        &:after {
          border-right: none;
        }
      }

      .uslugi_nav_container {
        z-index: 4;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 56px;

        .uslugi_nav_head {
          font-family: 'Onest Regular', serif;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 28px;
          /* identical to box height */


          color: #FFFFFF;
        }

        .uslugi_nav_body {
          display: flex;
          flex-direction: column;
          gap: 25px;

          .uslugi_nav_item {
            font-family: 'Onest Regular', serif;
            font-style: normal;
            font-weight: 450;
            font-size: 20px;
            color: #FFFFFF;
            text-decoration: unset;
            white-space: nowrap;
          }
        }
      }
    }
  }
}

@media (min-width: 1600px) {
  .uslugi_menu_page {
    .uslugi_menu_page__head {
      .uslugi_menu_page__head__title {
        font-size: 2.62rem;
        padding-bottom: 20px;
      }

      .uslugi_menu_page__head__subtitle {
        font-size: 1rem;
      }
    }

    .uslugi_menu_page__body {
      .uslugi_menu_page__body__nav_block {
        .uslugi_nav_container {
          .uslugi_nav_head {
            font-size: 1.5rem;
          }

          .uslugi_nav_body {
            .uslugi_nav_item {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1189px) {
  .uslugi_menu_page {
    .uslugi_menu_page__body {
      .uslugi_menu_page__body__nav_block {
        .uslugi_nav_container {
          .uslugi_nav_body {
            .uslugi_nav_item {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 986px) {
  .uslugi_menu_page {
    .uslugi_menu_page__body {
      grid-template-columns: 1fr 1fr;
      //grid-template-rows: repeat(2, 1fr);
      //grid-auto-columns: 1fr;
      grid-auto-flow: dense;

      .uslugi_menu_page__body__nav_block {
        &:last-child {
          //grid-column-end: -2;
        }

        .uslugi_nav_container {
          .uslugi_nav_body {
            .uslugi_nav_item {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 554px) {
  .uslugi_menu_page {
    .uslugi_menu_page__body {
      grid-template-columns: 1fr;
      //grid-template-rows: repeat(2, 1fr);
      //grid-auto-columns: 1fr;
      //grid-auto-flow: dense;
    }
  }
}
</style>