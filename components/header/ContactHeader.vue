<template>
<div class="contact_header">
  <div class="contact_header__phone_wrapper">
    <PhoneCallDefault :phone="phone" :phone-link="phoneLink"/>
  </div>
  <ContactPlayButton/>
</div>
</template>
<script setup lang="ts">
import PhoneCallDefault from "~/components/contacts/PhoneCallDefault.vue";
import ContactPlayButton from "~/components/contacts/ContactPlayButton.vue";
</script>
<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    phone: String,
    phoneLink: String,
  },
})
</script>

<style lang="scss">
@import "@/assets/styles/scss/_colors.scss";
@import "@/assets/styles/scss/_sizes.scss";
.contact_header {
display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 0;
}

.contact_header .contact_header__phone_wrapper {
  margin-right: 3.8rem;
}
</style>