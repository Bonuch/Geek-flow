<template>
  <NuxtLink aria-label="Связаться" class="contact_play_button" :href="actionLink">
    <img src="/icons/play.svg" class="contact_play_button__icon" alt="GeekFlow форма связи">
    Связаться
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
  font-weight: 600;
  font-size: 1rem;
  line-height: 19px;
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

@media (min-width: 1600px) {
  .contact_play_button .contact_play_button__icon {
    min-width: 25px;
    min-height: 25px;
  }
}
</style>