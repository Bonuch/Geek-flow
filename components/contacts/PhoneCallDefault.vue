<template>
  <NuxtLink :href="'tel:'+phoneLink" class="phone_call">
    <img src="/icons/phone.png" alt="GeekFlow номер телефона">
    {{phone}}
  </NuxtLink>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  props: {
    phone: String,
    phoneLink: String,
  },
  computed: {
    phoneHref(){
      return this.phone.replaceAll(" ", "")
          .replaceAll("-", "")
          .replaceAll("(", "")
          .replaceAll(")","")
    }
  }
})
</script>

<style lang="scss">
.phone_call {
  text-decoration: unset;
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  //line-height: 1.18rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
}
.phone_call:hover {
  filter: invert(27%);
}
.phone_call img {
  //min-width: 14px;
  //min-height: 10px;
  width: .7rem;
  margin-right: .3rem;
  margin-top: -3px;
}

@media (min-width: 1600px) {
  .phone_call img {
    width: .9rem;
  }
}
</style>