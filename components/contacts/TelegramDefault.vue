<template>
  <NuxtLink :href="link" class="telegram_default">
    <img src="/icons/telegram.png" alt="GeekFlow Telegram">
    {{text}}
  </NuxtLink>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    link: String,
    text: String,
  },
  computed: {
  }
})
</script>

<style lang="scss">
.telegram_default {
  text-decoration: unset;
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  //line-height: 1.18rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.telegram_default:hover {
  filter: invert(27%);
}
.telegram_default img {
  //min-width: 14px;
  //min-height: 10px;
  margin-right: .3rem;
}
</style>