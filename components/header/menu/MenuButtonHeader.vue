<template>
    <div class="header_menu_button">
        <div class="header_menu_button_wrapper">
            <button aria-label="Меню" type="button" class="header__menu_button" @click="showMenu()" @mouseover="showMenu()">
          <span :class="active?activeClass:''" class="header__menu_button__hamburger">
            <span class="bar-1"></span>
            <span class="bar-2"></span>
          </span>
                Меню
            </button>
        </div>
        <div class="header_menu_button_wrapper__m">
            <button aria-label="Меню" type="button" class="header__menu_button" @click="showMenu()">
          <span :class="active?activeClass:''" class="header__menu_button__hamburger">
            <span class="bar-1"></span>
            <span class="bar-2"></span>
          </span>
            </button>
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import SmallIconLink from "~/components/links/SmallIconLink.vue";

export default defineComponent({
    components: {SmallIconLink},
    props: {
        active: {
            type: Boolean,
            default() {
                return false
            }
        }
    },
    methods: {
        showMenu() {
            this.$emit('show-menu')
        }
    },
    data() {
        return {
            activeClass: 'active'
        }
    }
})
</script>

<style lang="scss">
@import "@/assets/styles/scss/_colors.scss";

.header_menu_button_wrapper__m {
  display: none;
}

.header__menu_button {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 19px;
  background-color: unset;
  border: unset;
  cursor: pointer;
}

.header__menu_button:hover {
  color: #BABABA
}

.header__menu_button:hover .bar-1,
.header__menu_button:hover .bar-2,
{
  background-color: #BABABA;
}

.header__menu_button:active, .header__menu_button:focus-visible {
  border: unset;
}

.header__menu_button__hamburger {
  display: inline-block;
  margin-right: .3rem;
  margin-bottom: 0;
}

.bar-1 {
  margin-bottom: 4px;
}

.bar-1, .bar-2 {
  width: 14px;
  height: 2px;
  border-radius: 3px;
  background-color: $textPrimary;
  transition: 0.4s;
  display: block;
}

/* Rotate first bar */
.header__menu_button__hamburger.active .bar-1 {
  transform: translate(0, 2px) rotate(45deg);
}

/* Rotate last bar */
.header__menu_button__hamburger.active .bar-2 {
  transform: translate(0, -4px) rotate(-45deg);
}

@media (min-width: 1600px) {
  .bar-1, .bar-2 {
    width: 20px;
    height: 4px;
  }
  .header__menu_button__hamburger.active .bar-1 {
    transform: translate(0, 4px) rotate(45deg);
  }
}

@media (max-width: 980px) {
  .header_menu_button_wrapper {
    display: none;
  }
  .header_menu_button_wrapper__m {
    display: flex;

    .header__menu_button {
      padding: 0.75rem 1rem;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid #FFFFFF;
      border-radius: 16px;
      height: 32px;

      .header__menu_button__hamburger {
        margin-right: unset;
        margin-bottom: unset;
      }
    }
  }
}
</style>