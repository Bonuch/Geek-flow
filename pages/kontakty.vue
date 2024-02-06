<template>
    <div class="contacts_block">
        <div class="contacts_block__wrapper__mob">
            <div class="contacts_block__top">
                <h1 class="contacts_title">Контакты</h1>
                <p class="contacts_title__descr">Свяжитесь с нами</p>
            </div>
            <div class="contacts_block__bottom">
                <PhoneCallDefault class="contacts_block__top__contact_item" :phone="phoneText" :phone-link="phoneLink"/>
                <EmailDefault class="contacts_block__top__contact_item" :email="email"/>
                <TelegramDefault class="contacts_block__top__contact_item" :link="telegramLink" :text="telegramText"/>
            </div>
        </div>
        <div class="contacts_block__wrapper">
            <div class="contacts_block__top">
                <PhoneCallDefault class="contacts_block__top__contact_item" :phone="phoneText" :phone-link="phoneLink"/>
                <EmailDefault class="contacts_block__top__contact_item" :email="email"/>
                <TelegramDefault class="contacts_block__top__contact_item" :link="telegramLink" :text="telegramText"/>
            </div>
            <div class="contacts_block__bottom">
                <SocialItem class="contacts_block__bottom__soc_item" v-for="soc in socialList" :color="primaryColorText"
                            :link="soc.link" :text="soc.name"/>
            </div>
        </div>
        <ContactFooterBlock/>
    </div>
</template>

<script setup lang="ts">
import PhoneCallDefault from "~/components/contacts/PhoneCallDefault.vue";
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from "pinia";
import ContactFooterBlock from "~/components/contacts/ContactFooterBlock.vue";
import EmailDefault from "~/components/contacts/EmailDefault.vue";
import TelegramDefault from "~/components/contacts/TelegramDefault.vue";
import SocialItem from "~/components/socials/SocialItem.vue";
import {fetchContactsSettings} from "~/composables/cmsOtherSettings";

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

const page = await fetchContactsSettings()

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
.contacts_block__wrapper {
  height: 100vh;
  background: url('/contacts/bg.jpg') center center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2.5rem;
  padding-top: 30vh;
}

.contacts_block__top {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contacts_block__top__contact_item {
  font-size: 2.62500rem;
  font-weight: 500;
  margin-bottom: 10vh;
}

.contacts_block__top__contact_item img {
  width: 1.5rem;
  margin-right: 0.8125rem;
}

.contacts_block__bottom__soc_item {
  margin-right: 2.25rem;
}

.contacts_block__bottom__soc_item:last-child {
  margin-right: unset;
}

.contacts_block__wrapper__mob {
  display: none;
}

@media (min-width: 1600px) {
  .contacts_block__wrapper {
    padding-bottom: 2.5rem;
    padding-top: 30vh;
  }

  .contacts_block__top__contact_item {
    font-size: 2.62500rem;
    font-weight: 500;
    margin-bottom: 10vh;
  }

  .contacts_block__top__contact_item img {
    width: 1.5rem;
    margin-right: 0.8125rem;
  }

  .contacts_block__bottom__soc_item {
    margin-right: 2.25rem;
  }
}

@media (max-width: 986px) {
  .contacts_block__wrapper {
    display: none;
  }

  .contacts_block__wrapper__mob {
    display: flex;
    flex-direction: column;
    gap: 230px;
    background: url('/contacts/bg.jpeg') center center no-repeat;
    padding: 100px 18px 36px;

    .contacts_block__top {
      display: flex;
      flex-direction: column;
      gap: 18px;

      .contacts_title {
        font-family: 'Onest Regular', serif;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        color: #FFFFFF;
        position: relative;

        &:after {
          content: url('/icons/ellipse.svg');
          position: relative;
          top: -16px;
          right: -1px;
        }
      }

      .contacts_title__descr {
        font-family: 'Onest Regular', serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        text-align: center;
        color: #FFFFFF;
      }
    }

    .contacts_block__bottom {
      .contacts_block__top__contact_item {
        font-family: 'Onest Regular', serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #FFFFFF;

        width: 100%;

        background: rgba(255, 255, 255, 0.1);
        border: 1px solid #FFFFFF;
        border-radius: 24px;

        padding-top: 15px;
        padding-bottom: 15px;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        img {
          width: 14px;
        }
      }
    }
  }
}
</style>