<template>
    <div class="type_kontekst_reklama_block">
        <div class="type_kontekst_reklama_block__head">
            <h2 class="type_kontekst_reklama_block__head__title">Типы Контекстной рекламы</h2>
        </div>
        <div class="type_kontekst_reklama_block__body">
            <div class="type_kontekst_reklama_tiles">
                <p v-for="item in stackDev" class="type_kontekst_reklama_tiles__item">
                    <span>{{ item.name }}</span>
                </p>
            </div>
            <div class="type_kontekst_reklama_tiles__mob">
                <p v-for="item in value.stack_item" class="type_kontekst_reklama_tiles__item">
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

const stackDevNormal = ['Поисковая реклама', 'Медийная реклама', 'Баннерная реклама'];
const stackDev = [...props.value.stack_item];
stackDev.splice(0, 0, props.value.stack_item[0]);
stackDev.splice(4, 0, props.value.stack_item[2]);
// stackDev.splice(7, 0, stackDevNormal[5]);
// stackDev.splice(12, 0, stackDevNormal[9]);
// stackDev = ['HTML', 'HTML', 'CSS', 'JavaScript', 'Laravel', 'React', 'React', 'Vue.js', 'Vue.js', 'Django', 'Nuxt.js', 'Python', 'Yii2', 'Yii2'];
</script>

<style lang="scss">
.type_kontekst_reklama_block__head {
  padding-right: 11.25rem;
  padding-left: 11.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2.37500rem;
}

.type_kontekst_reklama_block__body {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.type_kontekst_reklama_block__head__title {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 140%;
  /* identical to box height, or 45px */
  color: #FFFFFF;
}

.type_kontekst_reklama_tiles {
  /*display: flex;
  flex-wrap: wrap;*/
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
  overflow: visible;
}

.type_kontekst_reklama_tiles__mob {
  display: none;
}

.type_kontekst_reklama_tiles__item {
  //width: 20%;
  background: #232234;
  border: 1px solid #41414B;
  border-radius: 10px;
  padding: 0.75rem 1.25rem;
  //3.4375rem
  text-align: center;
  cursor: default;
}

/*.type_kontekst_reklama_tiles__item:nth-child(3),
.type_kontekst_reklama_tiles__item:nth-child(9),
.type_kontekst_reklama_tiles__item:nth-child(13),
{
  background: #34334B;
  border: 1px solid #575764;
  border-radius: 10px;
}*/

.type_kontekst_reklama_tiles__item span {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  //line-height: 140%;
  /* identical to box height, or 45px */
  text-align: center;
  color: #C57AFF;
  white-space: nowrap;
}

.type_kontekst_reklama_tiles__item:nth-child(1),
.type_kontekst_reklama_tiles__item:nth-child(7),
.type_kontekst_reklama_tiles__item:nth-child(8),
.type_kontekst_reklama_tiles__item:nth-child(5),
.type_kontekst_reklama_tiles__item:nth-child(14),
{
  background: #232234;
  border: 1px solid #41414B;
  border-radius: 10px;
  opacity: 0.3;
}

.type_kontekst_reklama_tiles__item:nth-child(1) span,
.type_kontekst_reklama_tiles__item:nth-child(7) span,
.type_kontekst_reklama_tiles__item:nth-child(5) span,
.type_kontekst_reklama_tiles__item:nth-child(8) span,
.type_kontekst_reklama_tiles__item:nth-child(14) span,
{
  filter: blur(7px);
}

@media (min-width: 1600px) {
    .stack_technology_tiles {
        grid-template-columns: repeat(7, 300px);
    }
}
@media (max-width: 986px) {
  .type_kontekst_reklama_block {
    .type_kontekst_reklama_block__head {
      padding-right: 18px;
      padding-left: 18px;
      justify-content: center;

      .type_kontekst_reklama_block__head__title {
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: #C47AFF;
      }
    }

    .type_kontekst_reklama_block__body {
      .type_kontekst_reklama_tiles {
        display: none;
      }

      .type_kontekst_reklama_tiles__mob {
        display: grid;
        width: 100%;
        padding-left: 18px;
        padding-right: 18px;
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;

        .type_kontekst_reklama_tiles__item {
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