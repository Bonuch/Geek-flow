import { defineNuxtPlugin } from '#app'
import Spline from "spline-vue/v3";
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Spline)
})