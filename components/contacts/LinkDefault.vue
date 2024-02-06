<template>
    <NuxtLink :to="link" class="link_default" :target="targetBlank?'_blank':'_self'">
        <img src="/icons/link.png" :alt="'GeekFlow' + text">
        {{ text }}
    </NuxtLink>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
    props: {
        link: String,
        text: String,
        targetBlank: false
    },
    computed: {}
})
</script>

<style lang="scss">
.link_default {
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

.link_default:hover, .link_default:active {
  //color: #C47AFF;
}

.link_default img {
  //min-width: 14px;
  //min-height: 10px;
  margin-right: .3rem;
}
</style>