<template>
    <div>
        <div v-html="css_head"></div>
        <div v-html="js_head"></div>
        <Header/>
        <slot/>
        <Footer/>
        <div v-html="css_footer"></div>
        <div v-html="js_footer"></div>
    </div>
</template>

<script setup>

import Header from "~/components/header/Header.vue";
import Footer from "~/components/footer/Footer.vue";
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from "pinia";
const settingStore = useSettingStore();
const {css_head, css_footer, js_head, js_footer} = storeToRefs(settingStore);
</script>