<template>
    <div class="contact_buttons">
        <div class="contact_buttons__button_wrapper">
            <ContactPlayButton class="contact_buttons__button_m"/>
        </div>
        <PhoneCallDefault v-if="phone" class="contact_buttons__phone" :phone="phone" :phone-link="phoneLink"/>
        <SmallIconLink class="contact_buttons__phone_m" icon="phone" :link="'tel:'+phoneLink"/>
    </div>
</template>

<script setup lang="ts">
import ContactPlayButton from "~/components/contacts/ContactPlayButton.vue";
import PhoneCallDefault from "~/components/contacts/PhoneCallDefault.vue";
import SmallIconLink from "~/components/links/SmallIconLink.vue";
</script>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    props: {
        phone: String,
        phoneLink: String,
    }
})
</script>

<style lang="scss">
@import '@/assets/styles/scss/_colors.scss';

.contact_buttons {
  display: inline-flex;
  padding: 1.56rem 2.12rem;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid $textPrimary;
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 34px;
}

.contact_buttons .contact_buttons__button_wrapper {
  margin-right: 1.62rem;
}

.contact_buttons__phone_m {
    display: none !important;
}

@media (max-width: 480px) {
  .contact_buttons {
      background: unset;
      backdrop-filter: unset;
      border: unset;
      border-radius: unset;
      padding: unset;

      .contact_buttons__button_wrapper {
          .contact_buttons__button_m {
              background: rgba(255, 255, 255, 0.1);
              border: 1px solid #FFFFFF;
              backdrop-filter: blur(4px);
              border-radius: 24px;
              display: flex;
              padding: 14px 88px 15px;

              img {
                  margin-top: -1px;
              }
          }
      }

      .contact_buttons__phone {
          display: none;
      }

      .contact_buttons__phone_m {
          display: flex !important;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
          border: 1px solid #FFFFFF;
      }
  }
}

@media (max-width: 364px) {
    .contact_buttons {
        .contact_buttons__button_wrapper {
            margin-right: .5rem;
            .contact_buttons__button_m {
                padding: 14px 50px 15px;
            }
        }
    }
}
</style>