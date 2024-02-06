<template>
    <NuxtLink :aria-label="link" :href="link" class="small_icon_link">
        <img :src="'/icons/'+icon+'.png'" alt="" class="small_icon_link__icon">
    </NuxtLink>
</template>

<script setup lang="ts">
</script>

<script lang="ts">
export default defineComponent({
    props: {
        icon: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: ''
        }
    }
})
</script>

<style lang="scss">
.small_icon_link {
  border: 0.765193px solid #FFFFFF;
  border-radius: 16px;
  padding: 0.4375rem 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
    text-align: center;
  .small_icon_link__icon {
    max-width: 1.12500rem;
    max-height: 1.12500rem;
  }
}
</style>