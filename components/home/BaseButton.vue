<template>
  <NuxtLink aria-label="Подробнее" class="contact_buttons__button_m contact_play_button" :href="actionLink">
    Подробнее
  </NuxtLink>
</template>
<script setup lang="ts">
const actionLink = "#contact_footer_block__move"
</script>
<style lang="scss">
.contact_play_button {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 18px;
  background-color: unset;
  border: unset;
  cursor: pointer;
  text-decoration: unset;
}

.contact_play_button:hover {
  filter: invert(27%);
}

.contact_play_button:active, .contact_play_button:focus-visible {
  border: unset;
}

.contact_play_button .contact_play_button__icon {
  min-width: 14px;
  min-height: 13px;
  margin-right: .3rem;
  margin-top: 0;
}

.contact_buttons__button_m {
  background: transparent;
  border: 1px solid #FFFFFF;
  backdrop-filter: blur(4px);
  border-radius: 24px;
  display: flex;
  padding: 14px 36px 15px;

  img {
    margin-top: -1px;
  }
}

@media (min-width: 1600px) {
  .contact_play_button .contact_play_button__icon {
    min-width: 25px;
    min-height: 25px;
  }
  .contact_buttons__button_m {
    padding: 18px 38px 18px;
  }
}
@media (max-width: 364px) {
  .contact_buttons__button_m {
    padding: 14px 50px 15px;
  }
}
</style>