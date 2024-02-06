<template>
    <footer class="footer_block">
        <div class="footer_block__pc__wrapper">
            <div class="footer_block_c1">
                <img @click="scrollToTop()" :src="logoFooter" alt="GeekFlow Footer" class="footer_logo">
                <p class="footer_ur_info">{{ footerAdditionalText }}</p>
            </div>
            <div class="footer_block_c2">
                <nav class="footer_nav_link">
                    <NuxtLink class="footer_nav_link__item" to="/uslugi">Услуги →</NuxtLink>
<!--                    <NuxtLink class="footer_nav_link__item" to="/portfolio">Портфолио →</NuxtLink>-->
                    <NuxtLink class="footer_nav_link__item" to="/blog">Наш блог →</NuxtLink>
                    <!--                    <NuxtLink class="footer_nav_link__item" to="/uslugi">О компании →</NuxtLink>-->
                    <!--                    <NuxtLink class="footer_nav_link__item" to="/uslugi">Главные проекты →</NuxtLink>-->
                    <NuxtLink class="footer_nav_link__item" :to="route.fullPath">В начало →</NuxtLink>
                </nav>
            </div>
            <div class="footer_block_c3">
                <div class="footer_block_c3_top">
                    <EmailDefault class="footer_block_c3_top__link" :email="email"/>
                    <PhoneCallDefault class="footer_block_c3_top__link" :phone="phoneText" :phone-link="phoneLink"/>
                </div>
                <div class="footer_block_c3_bottom">
                    <SocialItemFooter class="footer_block_c3_bottom__link" v-for="soc in socialList" :color="'#8E8E8E'"
                                      :link="soc.link" :text="soc.name"/>
                </div>
            </div>
        </div>
        <div class="footer_block__mob__wrapper">
            <div class="footer_block__mob__row">
                <img :src="logoFooter" alt="GeekFlow Footer" class="footer_logo">
                <div class="footer_block__mob__social_block">
                    <NuxtLink v-for="soc in socialList" :to="soc.link" class="footer_block__mob__social__item">
                        <img src="/icons/soc/telegram.png" :alt="soc.name+' GeekFlow'"
                             class="footer_block__mob__social__item__icon">
                    </NuxtLink>
                    <!--                    <a href="#" class="footer_block__mob__social__item">
                                            <img src="/icons/soc/vk.png" alt="VK GeekFlow" class="footer_block__mob__social__item__icon">
                                        </a>
                                        <a href="#" class="footer_block__mob__social__item">
                                            <img src="/icons/soc/insta.png" alt="Instagram GeekFlow"
                                                 class="footer_block__mob__social__item__icon">
                                        </a>
                                        <a href="#" class="footer_block__mob__social__item">
                                            <img src="/icons/soc/in.png" alt="LinkedIn GeekFlow"
                                                 class="footer_block__mob__social__item__icon">
                                        </a>-->
                </div>
            </div>
            <div class="footer_block__mob__row">
                <nav class="footer_mobile_nav">
                    <NuxtLink class="footer_mobile_nav__item" to="/uslugi">Услуги <img alt="Услуги" src="/icons/arrow_stroke.png"
                                                                                       class="footer_mobile_nav__item__icon">
                    </NuxtLink>
                    <!--                    <NuxtLink class="footer_mobile_nav__item" to="#">О компании <img src="/icons/arrow_stroke.png"-->
                    <!--                            class="footer_mobile_nav__item__icon"></NuxtLink>-->
<!--                    <NuxtLink class="footer_mobile_nav__item" to="/portfolio">Портфолио <img alt="Портфолио"-->
<!--                            src="/icons/arrow_stroke.png"-->
<!--                            class="footer_mobile_nav__item__icon"></NuxtLink>-->
                    <NuxtLink class="footer_mobile_nav__item" to="/blog">Наш блог <img alt="Наш блог" src="/icons/arrow_stroke.png"
                                                                                       class="footer_mobile_nav__item__icon">
                    </NuxtLink>
                </nav>
            </div>
            <div class="footer_block__mob__row">
                <p class="footer_ur_info">{{ footerAdditionalText }}</p>
                <div class="footer_block__mob__actions">
                    <SmallIconLink class="footer_block__mob__actions__link" :link="'mailto:'+email" icon="email"/>
                    <SmallIconLink class="footer_block__mob__actions__link" :link="phoneLink" icon="phone"/>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import EmailDefault from "~/components/contacts/EmailDefault.vue";
import PhoneCallDefault from "~/components/contacts/PhoneCallDefault.vue";
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from 'pinia';
import SocialItemFooter from "~/components/socials/SocialItemFooter.vue";
import SmallIconLink from "~/components/links/SmallIconLink.vue";

const settingStore = useSettingStore();
const {
    phoneText,
    phoneLink,
    email,
    primaryColorText,
    socialList,
    footerAdditionalText,
    logoFooter
} = storeToRefs(settingStore);
const route = useRoute();
const scrollToTop = () => {
    window.scrollTo(0, 0)
}
</script>

<style lang="scss">
.footer_block {
  background: #181720;
  overflow: hidden;
}

.footer_block__pc__wrapper {
  padding: 2.62500rem 2.5rem 2.37500rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

.footer_block__mob__wrapper {
  display: none;
}

.footer_block_c1,
.footer_block_c2 {
  padding-right: 1rem;
}

.footer_block_c1 {
  max-width: 11.75rem;
}

.footer_logo {
  margin-bottom: 1rem;
  cursor: pointer;
}

.footer_ur_info {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 450;
  font-size: 0.75rem;
  color: #8E8E8E;
}

.footer_nav_link {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 13px;
  grid-auto-columns: 1fr;
  height: 100%;
  grid-auto-flow: column;
}

.footer_nav_link__item {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  color: #8E8E8E;
  text-decoration: unset;
  /*width: 33%;*/
  display: block;
  white-space: nowrap;
  /*margin-right: 2.62500rem;*/
  padding-right: 0.5rem;
}

.footer_block_c3 {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
}

.footer_block_c3_top {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

.footer_block_c3_top__link {
  margin-right: 2rem;
}

.footer_block_c3_top__link:last-child {
  margin-right: unset;
}

.footer_block_c3_bottom {
  display: flex;
}

.footer_block_c3_bottom__link {
  white-space: nowrap;
  padding-right: .2rem;
}

.footer_block_c3_bottom__link:last-child img {
  margin-right: unset;
}

@media (max-width: 1080px) {
  .footer_block__pc__wrapper {
    display: none;
  }
  .footer_block__mob__wrapper {
    display: block;
  }
  .footer_block__mob__row {
    &:nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem 1.12500rem 1.3125rem;

      .footer_logo {
        margin-bottom: unset;
      }

      .footer_block__mob__social_block {
        display: flex;
        align-items: center;

        .footer_block__mob__social__item {
          margin-right: 1rem;
        }

        .footer_block__mob__social__item:last-child {
          margin-right: unset;
        }
      }
    }

    &:nth-child(2) {
      .footer_mobile_nav {
        display: flex;
        flex-direction: column;

        .footer_mobile_nav__item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.12500rem;
          text-decoration: unset;
          font-family: 'Onest Regular', serif;
          font-style: normal;
          font-weight: 500;
          font-size: 0.875rem;
          /* identical to box height, or 18px */
          letter-spacing: -0.02em;
          color: #74748E;
          //border-top: 1px solid #36363E;
          border-bottom: 1px solid #36363E;

          &:first-child {
            border-top: 1px solid #36363E;
          }
        }
      }
    }

    &:nth-child(3) {
      padding: 1rem 1.12500rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .footer_ur_info {
        max-width: 8.8125rem;
        font-family: 'Onest Regular', serif;
        font-style: normal;
        font-weight: 500;
        font-size: 0.625rem;
        line-height: 125.5%;
        letter-spacing: -0.02em;
        color: #74748E;
      }

      .footer_block__mob__actions {
        display: flex;
        align-items: center;
        justify-content: center;

        .footer_block__mob__actions__link {
          margin-right: 0.75rem;

          &:last-child {
            margin-right: unset;
          }
        }
      }
    }
  }
}
</style>