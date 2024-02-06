<template>
    <div class="road_map_block">
        <p class="road_map_block__head_title_mob">
            Дорожная карта
        </p>
        <div class="road_map_block__left">
            <div class="road_map_block__left__timeline">
                <div class="road_map_block__left__timeline__container">
                    <div class="road_map_block__left__timeline__container__content"
                         v-for="(step, i) in value.step"
                         :data-itemn="i"
                    >
<!--                        @mouseover="activeRoadItem(i)"
                        @click="activeRoadItem(i)"-->
                        <div>
                            <span class="road_map_block__left__timeline__container__content__step">Этап {{
                                i + 1
                                }} — {{ step.name }}</span>
                            <p class="road_map_block__left__timeline__container__content__body">{{ step.title }}</p>
                        </div>
                        <div :id="'road_icon_'+(i+1)" class="road_icon">
                            <img :src="'/u/roadmap/'+(i+1)+'.png'" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--    <div class="road_map_block__right">
            </div>-->
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    value: Object
})

let iActiveStepItem = -1;
let activeStepItemIconTemp = 'road_icon_';
let activeStepItemIcon = activeStepItemIconTemp + (iActiveStepItem + 1);

const activeRoadItem = (i: number) => {
    const elems = window.document.getElementsByClassName('road_map_block__left__timeline__container__content')
    if (iActiveStepItem != i) {
        if (iActiveStepItem >= 0) {
            if (elems.item(iActiveStepItem)) {
                elems.item(iActiveStepItem).classList.remove('road_map_block__left__timeline__container__content__active')
            }
        }
        iActiveStepItem = i;
        activeStepItemIcon = activeStepItemIconTemp + (iActiveStepItem + 1);
        if (elems.item(iActiveStepItem)) {
            elems.item(iActiveStepItem).classList.add('road_map_block__left__timeline__container__content__active')
        }
    } else {
        if (elems.item(iActiveStepItem)) {
            if (!elems.item(iActiveStepItem).classList.contains('road_map_block__left__timeline__container__content__active')) {
                elems.item(iActiveStepItem).classList.add('road_map_block__left__timeline__container__content__active')
            }
        }
    }
}

const visibleRoadItem = function (el) {
    // Все позиции элемента
    let targetPosition = {
            top: window.pageYOffset + el.getBoundingClientRect().top + (el.offsetHeight*1),
            left: window.pageXOffset + el.getBoundingClientRect().left,
            right: window.pageXOffset + el.getBoundingClientRect().right,
            bottom: window.pageYOffset + el.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        activeRoadItem(el.dataset.itemn)
    } else {
        // Если элемент не видно, то запускаем этот код
        if (el.classList.contains('road_map_block__left__timeline__container__content__active')){
            el.classList.remove('road_map_block__left__timeline__container__content__active')
        }
    }
};

onMounted(() => {

    window.addEventListener('scroll', function() {
        document.querySelectorAll('.road_map_block__left__timeline__container__content').forEach(
            el => {
                visibleRoadItem (el);
            }
        )
    });
})
</script>

<style lang="scss">
.road_map_block {
  display: flex;
}

.road_map_block__left,
.road_map_block__right, {
  flex: 1;
}

.road_map_block__left__timeline {
  border-left: #313146 solid 2px;
  //border-width: 2px;
  //border-style: ;
  padding-left: 1.25rem;
}

.road_map_block__left__timeline__container {
  position: relative;
}

.road_map_block__left__timeline__container__content {
  margin-bottom: 6.87500rem;
  opacity: 0.2;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all .1s cubic-bezier(1, 1, 1, 1);
  transform: scale(1);

  .road_icon {
    opacity: 0;
    transition: all .3s cubic-bezier(1, 1, 1, 1);
    transform: scale(1);
    -webkit-animation: pulsing 1.5s infinite;
    animation: pulsing 1.5s infinite;
  }
}

.road_map_block__left__timeline__container__content__active {
  opacity: unset;
  /*:before {
      content: " ";
      border-left: #C47AFF solid 2px;
      position: absolute;
      top: 0;
  }*/
  .road_icon {
    opacity: 1;
  }
}

@-webkit-keyframes pulsing {
  0% {
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5)
  }
  50% {
    -webkit-transform: scale(1.0, 1.0);
    transform: scale(1.0, 1.0);
  }
  100% {
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
  }
}

@keyframes pulsing {
  0% {
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5)
  }
  50% {
    -webkit-transform: scale(1.0, 1.0);
    transform: scale(1.0, 1.0);
  }
  100% {
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
  }
}

.road_map_block__left__timeline__container__content__step {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  color: #C47AFF;
  padding-bottom: 0.75rem;
  display: block;
}

.road_map_block__left__timeline__container__content__active {
  .road_map_block__left__timeline__container__content__step {
    &:before {
      content: url("/icons/ellipse-purple.svg");
      position: relative;
      top: -2px;
      left: -1.55rem;
      width: 0.5rem;
      height: 0.5rem;
      display: inline-block;
    }
  }
}

.road_map_block__left__timeline__container__content__body {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 130%;
  color: #FFFFFF;
    max-width: 440px;
}

.road_map_block__right {
  text-align: center;
  display: flex;
  justify-content: center;
}

.road_map_block__right__text {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2.62500rem;
  line-height: 130%;
  color: #c47aff;
  max-width: 21rem;
  text-align: center;
}

.road_map_block__head_title_mob {
  display: none;
}

@media (min-width: 1600px) {
    .road_map_block__left__timeline__container__content__body {
        max-width: 70%;
    }
}
@media (max-width: 986px) {
  .road_map_block {
    flex-direction: column;
    gap: 40px;

    .road_map_block__head_title_mob {
      display: block;
      font-family: 'Onest Regular', serif;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      text-align: center;
      color: #C47AFF;
    }

    .road_map_block__left {
      .road_map_block__left__timeline {
        border-left: unset;
        padding-left: unset;
        margin-bottom: 80px;

        .road_map_block__left__timeline__container__content {
          opacity: unset;
          margin-bottom: 40px;

          &:before {
            content: unset;
          }

          &:last-child {
            margin-bottom: unset;
          }

          .road_map_block__left__timeline__container__content__step {
            font-size: 14px;

            &:before {
              content: unset;
            }
          }

          .road_map_block__left__timeline__container__content__body {
            font-size: 18px;
          }
        }
      }
    }

    .road_map_block__right {
      display: none;
    }
  }
}

@media (max-width: 525px) {
    .road_icon {
        display: none;
    }
}
</style>