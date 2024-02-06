<template>
    <div ref="homeScreen" class="home_one_screen" id="home_one_screen_id" onmousemove="">
        <spline-viewer class="spline_discs" id="spline_discs" loading-anim
                       :url="spline_url"></spline-viewer>
        <div class="home_one_screen__wrapper">
            <div class="home_one_screen__top">
                <!--                    <h1 class="home_one_screen__title">-->
                <!--                        <span class="home_one_screen__title__part">Правая рука</span>
                                        <span class="home_one_screen__title__part">вашего бизнеса</span>
                                        <span class="home_one_screen__title__part">в digital пространстве</span>-->
                <!--            <span class="home_one_screen__title__part home_one_screen__title__space">вашего бизнеса</span>-->
                <!--                    </h1>-->
                <div v-if="title" class="home_one_screen__title__wrapper" v-html="title">
                </div>
            </div>
            <div class="home_one_screen__bottom">
                <div class="left_content">
                    <ContactButtons :phone="phoneText" :phone-link="phoneLink"/>
                </div>
                <div class="right_content">
                    <SocialItemsBlock/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ContactButtons from "~/components/home/ContactButtons.vue";
import SocialItemsBlock from "~/components/home/SocialItemsBlock.vue";
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from 'pinia';

const settingStore = useSettingStore();
const {phoneText, phoneLink} = storeToRefs(settingStore);

const props = defineProps({
    title: String,
    spline_url: String,
});

/*var colors = ['#54097F','#96d3fd','#c996fd'];

function animateCircles(event) {
    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);

    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';

    var color = colors[Math.floor(Math.random() * colors.length)];
    circle.style.borderColor = color;

    circle.style.transition = "all 1.5s linear 0s";
    circle.style.left = circle.offsetLeft - 20 + 'px';
    circle.style.top = circle.offsetTop - 20 + 'px';

    circle.style.width = "70px";
    circle.style.height = "70px";
    circle.style.borderWidth = "5px";
    circle.style.opacity = 0;
}*/

</script>

<style lang="scss">
@import "@/assets/styles/scss/_sizes.scss";

#spline_discs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}

.circle {
  width: 15px;
  height: 15px;
  border: .8px solid purple;
  position: absolute;
  border-radius: 50%;
  z-index: 1000;
}

.home_one_screen {
  //background-image: url("/home/1_screen.jpg");
  //background-repeat: no-repeat;
  //background-size: cover;
  background: rgb(72, 61, 89);
  background: linear-gradient(0deg, rgba(72, 61, 89, 1) 0%, rgba(79, 76, 133, 1) 30%, rgba(89, 73, 135, 1) 100%);
  padding: $standardBlockPadding;
  height: 100vh;
  position: relative;
  cursor: url("/icons/ellipse.svg"), pointer;
}

.home_one_screen__wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  position: relative;
  z-index: 2;
}

.home_one_screen__wrapper > div {
  flex: 1;
}

.home_one_screen .home_one_screen__title {
  margin-top: 5rem;
}

.home_one_screen .home_one_screen__title__wrapper .home_one_screen__title {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2.62rem;
  line-height: 3.06rem;
}

.home_one_screen .home_one_screen__title .home_one_screen__title__part {
  display: block;

}

.home_one_screen .home_one_screen__title .home_one_screen__title__part.home_one_screen__title__space {
  margin-left: 5rem;
}

.home_one_screen__bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 1600px) {
  .home_one_screen {
    padding: $largeBlockPadding;
    height: 100vh;
  }

  .home_one_screen .home_one_screen__title {
    margin-top: 5rem;
  }

  //.home_one_screen .home_one_screen__title__wrapper .home_one_screen__title {
  //  font-family: 'Onest Regular', serif;
  //  font-style: normal;
  //  font-weight: 500;
  //  font-size: 2.62rem;
  //  line-height: 2.06rem;
  //}

  .home_one_screen .home_one_screen__title .home_one_screen__title__part.home_one_screen__title__space {
    margin-left: 2.5rem;
  }

}

@media (max-width: 980px) {
  .home_one_screen {
    //padding-left: $mobileBlockPadding;
    //padding-right: $mobileBlockPadding;
    padding-top: 5.5rem;
    height: auto;
  }
  .home_one_screen__top {
    padding-bottom: 13.12500rem;
  }
  .home_one_screen .home_one_screen__title__wrapper .home_one_screen__title {
    font-size: 2.25rem;
    line-height: 2.62500rem;
    margin-top: unset;
  }
  .home_one_screen .home_one_screen__title .home_one_screen__title__part.home_one_screen__title__space {
    margin-left: 2.5rem;
  }
  .home_one_screen__bottom {
    flex-direction: column;
  }
  .home_one_screen__bottom .left_content {
    padding-bottom: 1.8125rem;
  }
}

@media (max-width: 480px) {
  .home_one_screen {
    padding: 5.5rem $mobileBlockPadding 1.87500rem;
  }
}
</style>