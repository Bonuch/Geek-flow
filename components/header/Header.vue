<template>
<header @mouseleave="menuActive = false" class="header">
  <div class="header_wrapper">
    <div class="header__one_column">
        <SmallIconLink class="header__one_column__phone" icon="phone" :link="'tel:'+phoneLink"/>
        <MenuButtonHeader :active="menuActive" @show-menu="showMenu()"/>
    </div>
    <logo-header/>
    <contact-header :phone="phoneText" :phone-link="phoneLink"/>
  </div>
  <MenuContentHeader v-if="menuActive" />
</header>
</template>

<script setup lang="ts">
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from 'pinia';
import ContactHeader from "~/components/header/ContactHeader.vue";
import LogoHeader from "~/components/header/LogoHeader.vue";
import MenuButtonHeader from "~/components/header/menu/MenuButtonHeader.vue";
import MenuContentHeader from "~/components/header/menu/MenuContentHeader.vue";
import SmallIconLink from "~/components/links/SmallIconLink.vue";
import {fetchCategoriesPortfolio} from "~/composables/cmsPortfolio";

const settingStore = useSettingStore();

settingStore.updateMenuPortfolio(await fetchCategoriesPortfolio())

const {phoneText, phoneLink, headerBorder, menuActive} = storeToRefs(settingStore);

const route = useRoute();

watch(route, () => {
  menuActive.value = false;
})

watch(menuActive, () => {
    stateActiveMenu()
})

watch(headerBorder, () => {
    const el = document.querySelector('.header');
    if (el == null){
        return;
    }
    if (headerBorder){
        el.classList.add('header_border')
    } else {
        el.classList.remove('header_border')
    }
})
const showMenu = () => {
    menuActive.value = !menuActive.value
    stateActiveMenu()
}

const stateActiveMenu = () => {
    const el = document.querySelector('.header');
    if (el == null){
        return;
    }
    if (menuActive){
        el.classList.add('header_menu_active')
    } else {
        el.classList.remove('header_menu_active')
    }
}

let elY = 0;
let scrollY = 0;
const onScroll = () => {
    const el = document.querySelector('.header');
    if (el == null){
        return;
    }
    const height = el.offsetHeight;
    const pos = window.pageYOffset;
    const diff = scrollY - pos;

    elY = Math.min(0, Math.max(-height, elY + diff));
    if (pos >= height){
        el.classList.add('header_sticky')
    } else {
        el.classList.remove('header_sticky')
    }
    scrollY = pos;
}
onBeforeMount(() => {
    window.addEventListener("scroll", onScroll);
    onScroll()
})
onBeforeUnmount(() => {
    window.removeEventListener("scroll", onScroll);
})
</script>

<style lang="scss">
.header {
  display: block;
  position: absolute;
  width: 100%;
  z-index: 10;
}
.header_sticky {
  position: fixed;
  width: 100%;
  top: 0;
  background: rgba(203, 203, 203, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
}
.header_menu_active {
  background: rgba(203, 203, 203, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(15px);
}
.header_wrapper {
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem 2.5rem;
}
.header_border {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  /* Note: backdrop-filter has minimal browser support */
}
.header__one_column {
  flex-grow: 1;
  .header__one_column__phone {
    display: none;
  }
}
.contact_header {
  flex-grow: 0;
}
.logo {
  flex-grow: 2;
}
@media (max-width: 980px) {
  .header_wrapper {
    flex-direction:  row-reverse;
    display: flex;
    .header__one_column {
      display: flex;
      align-items: center;
      flex-grow: unset;
      .header__one_column__phone {
        display: block;
        height: 32px;
        width: 48px;
        background: rgba(255, 255, 255, 0.1);
        border: 0.765193px solid #FFFFFF;
        margin-right: 10px;
      }
    }
    .contact_header {
      display: none;
    }
    .logo {
      flex-grow: unset;
      justify-content: start;
    }
  }
}
</style>