<template>
  <NuxtLink :href="'mailto:'+email" class="email_default">
    <img src="/icons/email.png" alt="GeekFlow Email">
    {{email}}
  </NuxtLink>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    email: String
  },
  computed: {
  }
})
</script>

<style lang="scss">
.email_default {
  text-decoration: unset;
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  //line-height: 1.18rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
}
.email_default:hover {
  filter: invert(27%);
}
.email_default img {
  //min-width: 14px;
  //min-height: 10px;
  margin-right: .3rem;
}
</style>