<template>
    <div class="contact_footer_block" id="contact_footer_block__move">
        <div class="contact_footer_block__left">
            <h4 class="contact_footer_block__left__title">{{ appsFormSettings.left_title }}</h4>
            <div class="contact_footer_block__left__contacts_wrapper">
                <EmailDefault class="contact_footer_block__left__contacts_wrapper__m" :email="email"/>
                <PhoneCallDefault class="contact_footer_block__left__contacts_wrapper__m
        contact_footer_block__left__contacts_wrapper__phone" style="font-weight: 500;"
                                  :phone="phoneText" :phone-link="phoneLink"/>
                <TelegramDefault :link="telegramLink" :text="telegramText"/>
            </div>
            <LinkDefault v-if="breef.length > 0" :target-blank="true" class="contact__breef" text="Скачать бриф"
                         :link="breef"/>
        </div>
        <div class="contact_footer_block__right">
            <div class="contact_footer_block__right__wrapper">
                <p class="contact_footer_block__right__title">{{ appsFormSettings.right_title }}</p>
                <form class="contact_footer_block__right__form" action="">
                    <div class="contact_footer_block__right__form__row">
                        <input type="text" id="c_f__name" placeholder="Имя">
                        <input type="tel" id="c_f__phone" placeholder="Номер телефона">
                    </div>
                    <input type="email" id="c_f__email" placeholder="Почта">
                    <div class="contact_footer_block__right__form__bottom">
                        <button aria-label="Отправить" type="submit" id="c_f__submit">Отправить заявку
                            <img class="button_link_icon__icon" :src="'/icons/arrow.svg'" alt="Отправить заявку"/>
                        </button>
                        <p class="contact_footer_block__right__form__bottom__politic">Нажав на кнопку, соглашаюсь на
                            обработку <NuxtLink href="#" target="_blank">персональных данных</NuxtLink></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import EmailDefault from "~/components/contacts/EmailDefault.vue";
import PhoneCallDefault from "~/components/contacts/PhoneCallDefault.vue";
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from 'pinia';
import TelegramDefault from "~/components/contacts/TelegramDefault.vue";
import LinkDefault from "~/components/contacts/LinkDefault.vue";
import {fetchAppsFormSettings} from "~/composables/cmsOtherSettings";

const settingStore = useSettingStore();
const {phoneText, phoneLink, email, telegramText, telegramLink, breef} = storeToRefs(settingStore);

const appsFormSettings = await fetchAppsFormSettings()
</script>

<style lang="scss">
@import "@/assets/styles/scss/_sizes.scss";
@import "@/assets/styles/scss/_colors.scss";

.contact_footer_block {
  display: grid;
  //grid-template-columns: 1fr fit-content(50%);
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0;
  grid-row-gap: 0;
  //border-top: 1px solid rgba(255, 255, 255, 0.2);
  background: url('/footer-contact/bgc.png') no-repeat;
  background-size: cover;
}

.contact_footer_block__left {
  padding-top: $standardBlockPadding;
  padding-left: $standardBlockPadding;
  padding-bottom: 3.75rem;
}

.contact_footer_block__left__title {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2.62500rem;
  line-height: 49px;
  color: #FFFFFF;
  margin-bottom: 1.5rem;
}

.contact_footer_block__left__contacts_wrapper {
  display: flex;
  margin-bottom: 6.0625rem;
}

.contact_footer_block__left__contacts_wrapper__m {
  margin-right: 1.5rem;
}

.contact_footer_block__right {
  display: flex;
  align-items: center;
  background: rgba(203, 203, 203, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
  /* Note: backdrop-filter has minimal browser support */
  padding-right: $standardBlockPadding;
  padding-left: $standardBlockPadding;
}

.contact_footer_block__right__title {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  /* identical to box height */
  color: #FFFFFF;
}

.contact_footer_block__right__form {
  margin-top: 1.5rem;
}

.contact_footer_block__right__form__row {
  display: flex;
  margin-bottom: 0.875rem;
}

.contact_footer_block__right__form input {

  display: inline-block;
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  color: #FFFFFF;

  background: unset;

  border: 1px solid #FFFFFF;
  backdrop-filter: blur(5px);
  border-radius: 1.5rem;

  padding: 0.875rem 1.37500rem;
}

.contact_footer_block__right__form input:focus-visible {
  outline: none;

}

.contact_footer_block__right__form input::placeholder {
  color: #FFFFFF;
  opacity: 0.6;
}

#c_f__name {
  margin-right: 0.875rem;
}

#c_f__name,
#c_f__phone,
{
  width: 50%;
}

#c_f__email,
{
  width: 100%;
  margin-bottom: 0.875rem;
}

.contact_footer_block__right__form__bottom {
  display: flex;
  align-items: center;
}

#c_f__submit {
  color: $textPrimary;
  border: 1px solid #FFFFFF;
  backdrop-filter: blur(5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 1.5rem;

  padding: 0.875rem 1.87500rem;
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  /* identical to box height */

  background: unset;
  cursor: pointer;
  margin-right: 1.12500rem;
  white-space: nowrap;
}

.contact_footer_block__right__form__bottom__politic {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 140%;
  color: rgba(255, 255, 255, 0.7);
}

.contact_footer_block__right__form__bottom__politic a {
  text-decoration: unset;
}

@media (min-width: 1600px) {
  .contact_footer_block__left__title {
    line-height: 2.625rem;
  }
}

@media (max-width: 1080px) {
  .contact_footer_block {
    grid-template-columns: 1fr;
  }
  .contact_footer_block__left {
    padding-top: 2.5rem;
  }
  .contact_footer_block__left__contacts_wrapper {
    margin: 0;
  }
  .contact_footer_block__left__contacts_wrapper__phone, .contact__breef {
    display: none;
  }
  .contact_footer_block__right__wrapper {
    padding-top: 3.75rem;
    padding-bottom: 1.5rem;
  }
  .contact_footer_block__right {
    display: block;
  }
}

@media (max-width: 586px) {
  .contact_footer_block {
    background: url("/footer-contact/bgc_m.png");
    background-size: cover;
    background-position-y: top;
    background-position-x: center;
    overflow: hidden;
  }

  .contact_footer_block__left {
    padding: 40px $mobileBlockPadding 60px;
  }

  .contact_footer_block__left__title {
    font-size: 36px;
    line-height: 42px;
  }
  .contact_footer_block__right__form__row {
    flex-direction: column;
    margin-bottom: unset;
  }
  #c_f__name, #c_f__phone {
    width: 100%;
    margin-bottom: 18px;
  }

  .contact_footer_block__right__title {
    font-size: 18px;
  }

  .contact_footer_block__right {
    padding-left: 18px;
    padding-right: 18px;

    .contact_footer_block__right__wrapper {
      padding-top: 20px;
      padding-bottom: 24px;

      .contact_footer_block__right__form {
        margin-top: 18px;

        #c_f__email {
          margin-bottom: 18px;
        }

        .contact_footer_block__right__form__bottom {
          flex-direction: column;

          #c_f__submit, .contact_footer_block__right__form__bottom__politic {
            width: 100%;
          }

          #c_f__submit {
            margin-bottom: 12px;
            margin-right: unset;
          }

          .contact_footer_block__right__form__bottom__politic {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>