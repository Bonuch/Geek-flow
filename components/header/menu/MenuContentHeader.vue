<template>
    <nav class="menu_container">
        <div class="menu_container__top">
            <div class="menu_wrapper">
                <div class="main_nav">
                    <div v-for="(m, i) in menu" class="main_nav__container_item">
                        <button :aria-label="m.name" v-if="'subs' in m" class="main_nav__item"
                                @mouseover="settingStore.activeMenuItemChange(i)"
                                @click="settingStore.activeMenuItemChange(i)"
                                :class="m.active?'main_nav__item__active':''">
                            <img class="main_nav__item__icon_active" src="/icons/play.svg" :alt="m.name">
                            <span class="main_nav__item__counter">{{ i + 1 < 10 ? ('0' + (i + 1)) : (i + 1) }}</span>
                            {{ m.name }}
                        </button>
                        <NuxtLink v-else class="main_nav__item" :to="m.link"
                                  @mouseover="settingStore.activeMenuItemChange(i)"
                                  @click="settingStore.activeMenuItemChange(i)"
                                  :class="m.active?'main_nav__item__active':''">
                            <img class="main_nav__item__icon_active" src="/icons/play.svg" :alt="m.name">
                            <span class="main_nav__item__counter">{{ i + 1 < 10 ? ('0' + (i + 1)) : (i + 1) }}</span>
                            {{ m.name }}
                        </NuxtLink>
                    </div>
                </div>
                <div class="sub_nav_content">
                    <div v-if="currentMenuActive !== -1 && 'subs' in menu[currentMenuActive]"
                         v-for="c in menu[currentMenuActive].subs" class="sub_nav_content__column">
                        <!--            <div class="sub_nav_content__column__title">{{c.name}}</div>-->
                        <NuxtLink :to="c.slug" class="sub_nav_content__column__title">{{ c.name }}</NuxtLink>
                        <NuxtLink v-for="sub in c.items" :to="sub.slug" class="sub_nav_content__column__item">
                            {{ sub.name }} →
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="menu_call_2_action">
                <NuxtLink :href="linkToForm" class="menu_call_2_action__button">Обсудить проект →</NuxtLink>
                <p class="menu_call_2_action__descr">Мы сможем предложить лучшее решение с расчетом стоимости и
                    сроков</p>
            </div>
        </div>
        <div class="menu_container__bottom">
            <div class="menu_container__bottom__left">
                <NuxtLink v-for="mB in menuBottom" :to="mB.link" class="menu_container__bottom__nav__item">{{ mB.name }}
                    →
                </NuxtLink>
            </div>
            <div class="menu_container__bottom__right">
                <p class="header_menu_copyright">GeekFlow © 2022 - {{ new Date().getFullYear() }}</p>
                <NuxtLink :to="'tel:'+phoneLink" class="header_menu_phone">{{ phoneText }}</NuxtLink>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
import {storeToRefs} from 'pinia'
import {useSettingStore} from "~/stores/settings";

const settingStore = useSettingStore()

const {menu, currentMenuActive, menuBottom, phoneText, phoneLink} = storeToRefs(settingStore);

const linkToForm = '#contact_footer_block__move'

</script>
<style lang="scss">
.menu_container {
  padding: 2rem 5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.menu_container__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.8125rem;
}

.menu_wrapper {
  display: flex;
  align-items: flex-start;
}

.main_nav {
  display: flex;
  flex-direction: column;
  padding-right: 3.75rem;
}

.main_nav__item {
  text-decoration: unset;
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2rem;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  background: unset;
  border: unset;
  padding: 0;
  cursor: pointer;
}

.main_nav__container_item {
  padding-bottom: 1.3125rem;
}

.main_nav__container_item:last-child {
  padding-bottom: unset;
}

.main_nav__item__counter {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.1875rem;
  /* identical to box height */
  color: #FFFFFF;
  margin-right: 0.875rem;
}

.main_nav__item__icon_active {
  display: none;
  width: 10px;
  height: 10px;
  margin-top: -5px;
  margin-right: 0.375rem;
}

.main_nav__item__active .main_nav__item__icon_active {
  display: block;
  opacity: 0;
  animation: showArrow 1s forwards;
}

@keyframes showArrow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.sub_nav_content {
  display: flex;
  text-align: left;
}

.sub_nav_content__column {
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
}

.sub_nav_content__column__title, .sub_nav_content__column__item {
  padding-bottom: 0.75rem;
  white-space: nowrap;
}

.sub_nav_content__column__title {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: #FFFFFF;
  opacity: 0.6;
  text-decoration: unset;
}

.sub_nav_content__column__item, {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #FFFFFF;
  text-decoration: unset;
}

.menu_call_2_action {
  text-align: right;
  max-width: 18.5625rem;
}

.menu_call_2_action__button {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2rem;
  text-align: right;
  color: #FFFFFF;
  background: unset;
  border: unset;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: unset;
}

.menu_call_2_action__descr {
  padding-top: 0.75rem;
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: right;
  color: #FFFFFF;
}

.menu_container__bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.menu_container__bottom__nav__item {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #FFFFFF;
  text-decoration: unset;
  padding-right: 1.5rem;
}

.menu_container__bottom__nav__item:last-child {
  padding-right: unset;
}

.menu_container__bottom__right {
  display: flex;
}

.header_menu_copyright,
.header_menu_phone {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1rem;
  color: #FFFFFF;
}

.header_menu_copyright {
  padding-right: 1.5rem;
}

.header_menu_phone {
  text-decoration: unset;
}

@media (max-width: 1213px) {
  .menu_container {
    padding-right: 3rem;
    padding-left: 3rem;

    .menu_wrapper {
      .main_nav {
        padding-right: 2rem;
      }

      .sub_nav_content__column {
        padding-right: 1rem;
      }
    }
  }
}

@media (max-width: 1113px) {
  .menu_container {
    .menu_container__top {
      justify-content: center;

      .menu_wrapper {
        justify-content: space-between;
        width: 100%;
      }

      .menu_call_2_action {
        display: none;
      }
    }
  }
}

@media (max-width: 986px) {
  .menu_call_2_action {
    display: none;
  }
}

@media (max-width: 831px) {
  .menu_container {
    .menu_container__top {
      .menu_wrapper {
        flex-direction: column;

        .main_nav {
          width: 100%;
          margin-bottom: 20px;
        }
      }
    }
  }
}

@media (max-width: 598px) {
  .menu_container {
    padding-left: 18px;
    padding-right: 18px;

    .menu_container__top {
      .menu_wrapper {
        .main_nav {
        }

        .sub_nav_content {
          flex-direction: column;
        }
      }
    }

    .menu_container__bottom {
      flex-direction: column;
      align-items: baseline;

      .menu_container__bottom__left {
        a {
          text-align: left;
          white-space: nowrap;
          display: block;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>