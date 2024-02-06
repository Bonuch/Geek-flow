<template>
    <section class="advantages_kontekst_reklama_block">
        <h3 class="advantages_kontekst_reklama_block__title">Преимущества Таргетированной рекламы</h3>
        <div class="advantages_block__grid_0">
            <div class="advantages_kontekst_reklama_block__grid__item advantages_block__grid_0__item__1">
                <p><span>Быстрый</span> результат</p>
                <img src="/u/kontekst-reklama/advantage/arrow.png" alt="Быстрый результат">
            </div>
        </div>
        <div class="advantages_kontekst_reklama_block__grid_1">
            <div class="advantages_kontekst_reklama_block__grid__item advantages_kontekst_reklama_block__grid_1__item__1">
                <p><span>Теплые целевые</span><br> клиенты</p>
                <img src="/u/kontekst-reklama/advantage/thermometer.png" alt="Теплые целевые клиенты"
                     class="advantages_kontekst_reklama_block__grid_1__item__1__thermometer">
            </div>
            <div class="advantages_kontekst_reklama_block__grid__item advantages_kontekst_reklama_block__grid_1__item__2">
                <p>Оценка эффективности <br>
                    в режиме <span>реального времени</span></p>
            </div>
        </div>
        <div class="advantages_kontekst_reklama_block__grid_2">
            <div class="advantages_kontekst_reklama_block__grid__item advantages_kontekst_reklama_block__grid_2__item__1">
                <p><span>Большой выбор</span> рекламных инструментов</p>
                <div class="advantages_kontekst_reklama_block__grid_2__item__1__icons">
                    <img src="/u/kontekst-reklama/advantage/yandex.png"
                         alt="Большой выбор рекламных инструментов yandex"
                         class="advantages_kontekst_reklama_block__grid_2__item__3__icon">
                    <img src="/u/kontekst-reklama/advantage/vk.png" alt="Большой выбор рекламных инструментов vk"
                         class="advantages_kontekst_reklama_block__grid_2__item__3__icon">
                    <img src="/u/kontekst-reklama/advantage/my_target.png"
                         alt="Большой выбор рекламных инструментов my target"
                         class="advantages_kontekst_reklama_block__grid_2__item__3__icon">
                    <img src="/u/kontekst-reklama/advantage/google.png"
                         alt="Большой выбор рекламных инструментов google"
                         class="advantages_kontekst_reklama_block__grid_2__item__3__icon">
                </div>
            </div>
            <div class="advantages_kontekst_reklama_block__grid__item advantages_kontekst_reklama_block__grid_2__item__2">
                <p>Возможность <span>быстро реагировать</span> на поведенческие факторы</p>
                <div class="advantages_kontekst_reklama_block__grid_2__item__2_bottom">
                    <ButtonLinkClear class="advantages_kontekst_reklama_block__grid_2__item__2_bottom__link"
                                     text="Оставить заявку" to="#contact_footer_block__move"/>
                </div>
            </div>
        </div>
        <div class="advantages_block__grid_3">
            <div class="advantages_kontekst_reklama_block__grid__item advantages_block__grid_3__item__1">
                <p>Положительное влияние на <span>рост
                    позиций</span> в органической выдаче</p>
                <img src="/u/kontekst-reklama/advantage/vector.png" alt="Положительное влияние на рост
                    позиций в органической выдаче" class="advantages_block__grid_3__item__1__vector">
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ButtonLinkClear from "~/components/links/ButtonLinkClear.vue";
</script>

<style lang="scss" scoped>
.advantages_kontekst_reklama_block__title {
  text-align: center;
  margin-bottom: 3.75rem;
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  /*line-height: 140%;*/
  color: #FFFFFF;
}

.advantages_kontekst_reklama_block__grid__item {
  background: #06060A;
  border-radius: 16px;

  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: #FFFFFF;
  font-size: 2rem;
}

.advantages_kontekst_reklama_block__grid__item span {
  color: #C57AFF;
}

.advantages_block__grid_0 {
  margin-bottom: 50px;
}

.advantages_block__grid_0__item__1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 115px 80px 40px;
}

.advantages_kontekst_reklama_block__grid_1 {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr) 45%);
  grid-column-gap: 3.125rem;
  grid-row-gap: 3.125rem;
  padding-bottom: 3.125rem;
  grid-auto-rows: 1fr;
}

.advantages_kontekst_reklama_block__grid_1__item__1 {
  grid-row: span 1;

  .advantages_kontekst_reklama_block__grid_1__item__1__thermometer {
    margin-right: 40px;
  }
}

.advantages_kontekst_reklama_block__grid_1__item__2, .advantages_kontekst_reklama_block__grid_1__item__3 {
  grid-row: span 1;
}

.advantages_kontekst_reklama_block__grid_2 {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr) 45%);
  grid-column-gap: 3.125rem;
  grid-row-gap: 3.125rem;
  padding-bottom: 3.125rem;
  grid-auto-rows: 1fr;
}

.advantages_kontekst_reklama_block__grid_3 {
  margin-bottom: 50px;
}

.advantages_kontekst_reklama_block__grid_3__item__1 {
  padding: 50px 100px 50px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.advantages_kontekst_reklama_block__grid_1__item__1 {
  font-size: 1.5rem;
}

.advantages_kontekst_reklama_block__grid_3__item__1 {
  font-size: 2rem;
}

.advantages_kontekst_reklama_block__grid_1__item__2, .advantages_kontekst_reklama_block__grid_1__item__3,
.advantages_kontekst_reklama_block__grid_2__item__1, .advantages_kontekst_reklama_block__grid_2__item__2 {
  font-size: 1.5rem;
}

.advantages_kontekst_reklama_block__grid_1__item__1 {
  position: relative;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  p {
    //padding-bottom: 2.75rem;
  }

  div {
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }
}

.advantages_kontekst_reklama_block__grid_1__item__2 {
  //padding: 1.5rem 2.625rem 1.75rem;
  text-align: left;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  padding: 30px;
  gap: 30px;

}

.advantages_kontekst_reklama_block__grid_1__item__2__arrow {
  max-width: 5.9375rem;
}

.advantages_kontekst_reklama_block__grid_1__item__3 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
}

.advantages_kontekst_reklama_block__grid_1__item__3__lock {
  margin-right: 1.5rem;
}

.advantages_kontekst_reklama_block__grid_2__item__1,
.advantages_kontekst_reklama_block__grid_2__item__2 {
  padding: 32px 30px;
}

.advantages_kontekst_reklama_block__grid_2__item__1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.9);

  p {
    max-width: 285px;
  }

  .advantages_kontekst_reklama_block__grid_2__item__1__icons {
    display: flex;
    gap: 26px;
    margin-bottom: 30px;
  }
}

.advantages_kontekst_reklama_block__grid_2__item__2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 48px;
  padding-bottom: 43px;

  p {
    max-width: 349px;
  }

  .advantages_kontekst_reklama_block__grid_2__item__2_bottom {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    .advantages_kontekst_reklama_block__grid_2__item__2_bottom__link {
      border: 1px solid #fff;
      -webkit-backdrop-filter: unset;
      backdrop-filter: unset;
      border-radius: 1.5rem;
      text-decoration: unset;
      font-family: "Onest Regular", serif;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      text-align: center;
      color: #fff;
      padding: 9px 22px;
      //max-height: 47px;
      display: block;
      //line-height: normal;
    }
  }
}

.advantages_block__grid_3__item__1 {
  font-size: 2rem;
  display: grid;
    grid-template-columns: 1fr 1fr;

  p {
    padding: 2.1875rem 2.5rem;
    font-size: 1.5rem;
    //background: url('/u/advantage/waves.png') no-repeat center;
    //background-size: cover;
      background: none;
  }

  .advantages_block__grid_3__item__1__vector {
    display: block;
    margin: 23px auto 0;
  }
}

@media (min-width: 1600px) {
    .advantages_kontekst_reklama_block__grid_2__item__2 {
        p {
            max-width: 70%;
        }
    }
    .advantages_block__grid_3__item__1__vector {
        width: 70%;
        display: block;
        margin: 63px auto 0;
    }
}
@media (max-width: 986px) {
  .advantages_kontekst_reklama_block {
    .advantages_kontekst_reklama_block__title {
      font-size: 1.5rem;
      color: #C47AFF;
    }

    .advantages_kontekst_reklama_block__grid__item {
      padding: 20px;
        grid-template-columns: 1fr;
      p {
        font-size: 1.25rem;
        line-height: 24px;
      }
    }
      .advantages_kontekst_reklama_block__grid_1,
      .advantages_kontekst_reklama_block__grid_2{
          grid-template-columns: 1fr;
      }
  }
    .advantages_block__grid_3__item__1 {
        p {
            padding: 1rem;
        }
    }
    .advantages_block__grid_3__item__1__vector {
        width: 90%;
        margin: 63px auto 0;
    }

}
@media (max-width: 586px) {
    .advantages_block__grid_0__item__1 {
        img {
            max-width: 120px;
        }
    }
}
</style>