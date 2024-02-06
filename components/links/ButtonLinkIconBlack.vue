<template>
  <NuxtLink class="button_link_icon" :to="link">
    {{ text }}
    <img v-if="icon" class="button_link_icon__icon" :src="'/icons/'+icon+'-black.svg'"
         :alt="text"/>
  </NuxtLink>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  props: {
    link: String,
    text: String,
    icon: {
      type: String,
      default() {
        return null
      }
    }
  }
})
</script>

<style lang="scss">
@import "@/assets/styles/scss/_colors.scss";

.button_link_icon {
  display: inline-block;
  border: 1px solid $textPrimary;
  backdrop-filter: blur(5px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 1.5rem;
  text-decoration: unset;

  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  /* identical to box height */
  text-align: center;
  color: $textPrimary;

  padding: 0.875rem 1.87500rem;
  white-space: nowrap;
}

.button_link_icon:hover {
  background-color: #121217;
  color: #ffffff;
}

.button_link_icon:hover img {
  filter: invert(100%);
}
</style>