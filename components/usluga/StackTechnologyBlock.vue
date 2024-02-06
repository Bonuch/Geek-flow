<template>
    <div class="stack_technology_block">
        <div class="stack_technology_block__head">
            <h2 class="stack_technology_block__head__title">{{ value.title }}</h2>
            <!--      <div class="banner_switcher">
                    <fieldset id="switch" class="radio">
                      <input checked="" name="switch" id="dev" type="radio">
                      <label for="dev">Разработка</label>
                      <input name="switch" id="design" type="radio">
                      <label for="design">Дизайн</label>
                    </fieldset>
                  </div>-->
        </div>
        <div class="stack_technology_block__body">
            <div class="stack_technology_tiles">
                <p v-for="item in stackDev" class="stack_technology_tiles__item">
                    <span>{{ item.name }}</span>
                </p>
            </div>
            <div class="stack_technology_tiles__mob">
                <p v-for="item in value.stack_item" class="stack_technology_tiles__item">
                    <span>{{ item.name }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    value: Object,
})

const stackDevNormal = ['HTML', 'CSS', 'JavaScript', 'Laravel', 'React', 'Vue.js', 'Django', 'Nuxt.js', 'Python', 'Yii2'];
// const stackDev = [...stackDevNormal];
const stackDev = [...props.value.stack_item];
stackDev.splice(0, 0, props.value.stack_item[0]);
stackDev.splice(5, 0, props.value.stack_item[4]);
stackDev.splice(7, 0, props.value.stack_item[5]);
stackDev.splice(12, 0, props.value.stack_item[9]);
// stackDev = ['HTML', 'HTML', 'CSS', 'JavaScript', 'Laravel', 'React', 'React', 'Vue.js', 'Vue.js', 'Django', 'Nuxt.js', 'Python', 'Yii2', 'Yii2'];
</script>

<style lang="scss">
.stack_technology_block__head {
  padding-right: 11.25rem;
  padding-left: 11.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2.37500rem;
}

.stack_technology_block__body {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.stack_technology_block__head__title {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 140%;
  /* identical to box height, or 45px */
  color: #FFFFFF;
}

.stack_technology_tiles {
  /*display: flex;
  flex-wrap: wrap;*/
  display: grid;
  grid-template-columns: repeat(7, 200px);
  grid-template-rows: 1fr;
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
  overflow: visible;
}

.stack_technology_tiles__mob {
  display: none;
}

.stack_technology_tiles__item {
  //width: 20%;
  background: #232234;
  border: 1px solid #41414B;
  border-radius: 10px;
  padding: 0.75rem 1.25rem;
  //3.4375rem
  text-align: center;
  cursor: default;
}

/*.stack_technology_tiles__item:nth-child(3),
.stack_technology_tiles__item:nth-child(9),
.stack_technology_tiles__item:nth-child(13),
{
  background: #34334B;
  border: 1px solid #575764;
  border-radius: 10px;
}*/

.stack_technology_tiles__item span {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  //line-height: 140%;
  /* identical to box height, or 45px */
  text-align: center;
  color: #C57AFF;
}

.stack_technology_tiles__item:nth-child(1),
.stack_technology_tiles__item:nth-child(7),
.stack_technology_tiles__item:nth-child(8),
.stack_technology_tiles__item:nth-child(14),
{
  background: #232234;
  border: 1px solid #41414B;
  border-radius: 10px;
  opacity: 0.3;
}

.stack_technology_tiles__item:nth-child(1) span,
.stack_technology_tiles__item:nth-child(7) span,
.stack_technology_tiles__item:nth-child(8) span,
.stack_technology_tiles__item:nth-child(14) span,
{
  filter: blur(7px);
}

@media (min-width: 1600px) {
    .stack_technology_tiles {
        grid-template-columns: repeat(7, 1fr);
    }
}
@media (max-width: 986px) {
  .stack_technology_block {
    .stack_technology_block__head {
      padding-right: 18px;
      padding-left: 18px;
      justify-content: center;

      .stack_technology_block__head__title {
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: #C47AFF;
      }
    }

    .stack_technology_block__body {
      .stack_technology_tiles {
        display: none;
      }

      .stack_technology_tiles__mob {
        display: grid;
        width: 1005%;
        padding-left: 18px;
        padding-right: 18px;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;

        .stack_technology_tiles__item {
          &:nth-child(1), &:nth-child(7), &:nth-child(8), &:nth-child(14) {
            opacity: unset;

            span {
              filter: unset;
            }
          }

          span {
            font-size: 24px;
          }
        }
      }
    }
  }
}
</style>