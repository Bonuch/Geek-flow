<template>
  <section class="advantages_no_code_block">
    <h3 class="advantages_no_code_block__title">Преимущества no-code решений</h3>
    <div class="advantages_no_code_block__grid_1">
      <div class="advantages_no_code_block__grid__item advantages_no_code_block__grid_1__item__1">
        <p>Адаптирован <span>под все устройства</span></p>
        <img class="advantages_no_code_block__grid_1__item__1__mockup" src="/u/advantage/mobile_mockup.png"
             alt="Адаптирован под все устройства">
        <img class="advantages_no_code_block__grid_1__item__1__iphone" src="/u/advantage/iPhone.png"
             alt="Адаптирован под все устройства v2">
      </div>
      <div class="advantages_no_code_block__grid__item advantages_no_code_block__grid_1__item__2">
        <img src="/u/no-code/advantage/arrow.png" alt="Обладает высокой конверсией"
             class="advantages_no_code_block__grid_1__item__2__arrow">
        <p>Обладает <span>высокой</span> конверсией</p>
      </div>
    </div>
    <div class="advantages_no_code_block__grid_2">
      <div class="advantages_no_code_block__grid__item advantages_no_code_block__grid_2__item__1">
        <p><span>Прост</span> <br> в доработках</p>
      </div>
      <div class="advantages_no_code_block__grid__item advantages_no_code_block__grid_2__item__2">
        <p><span>Удобен</span> в тестировании гипотез</p>
      </div>
      <div class="advantages_no_code_block__grid__item advantages_no_code_block__grid_2__item__3">
        <img src="/u/no-code/advantage/google.png" alt="Оптимизирован под поисковые системы" class="advantages_no_code_block__grid_2__item__3__search">
        <p>Оптимизирован под <span>поисковые системы</span></p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.advantages_no_code_block__title {
  text-align: center;
  margin-bottom: 3.75rem;
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  /*line-height: 140%;*/
  color: #FFFFFF;
}

.advantages_no_code_block__grid__item {
  background: #06060A;
  border-radius: 16px;

  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: #FFFFFF;
}

.advantages_no_code_block__grid__item span {
  color: #C57AFF;
}

.advantages_no_code_block__grid_1 {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr) 40%);
  grid-column-gap: 3.125rem;
  grid-row-gap: 3.125rem;
  padding-bottom: 3.125rem;
  grid-auto-rows: 1fr;
}

.advantages_no_code_block__grid_1__item__1, .advantages_no_code_block__grid_1__item__2 {
  grid-row: span 2;
}

  /*.advantages_no_code_block__grid_1__item__2, .advantages_no_code_block__grid_1__item__3 {
    grid-row: span 1;
  }*/

.advantages_no_code_block__grid_2 {
  display: grid;
  width: 100%;
  //grid-template-columns: repeat(2, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr) 50%);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 3.125rem;
  grid-row-gap: 3.125rem;
  padding-bottom: 3.125rem;
  //grid-auto-rows: 1fr;
  //grid-auto-columns: 1fr;
}

.advantages_no_code_block__grid_2__item__1 {
  grid-area: 1 / 1 / 2 / 2;
}

.advantages_no_code_block__grid_2__item__2 {
  grid-area: 2 / 1 / 3 / 2;
}

.advantages_no_code_block__grid_2__item__3 {
  grid-area: 1 / 2 / 3 / 3;
}

.advantages_no_code_block__grid_2__item__4 {
  grid-area: 1 / 3 / 3 / 4;
  //grid-row: span 2;
  //grid-column: span 1;
}

.advantages_no_code_block__grid_1__item__1,
.advantages_no_code_block__grid_3__item__1 {
  font-size: 2rem;
}

.advantages_no_code_block__grid_1__item__2, .advantages_no_code_block__grid_1__item__3,
.advantages_no_code_block__grid_2__item__1, .advantages_no_code_block__grid_2__item__2,
.advantages_no_code_block__grid_2__item__3, .advantages_no_code_block__grid_2__item__4 {
  font-size: 1.5rem;
}

.advantages_no_code_block__grid_1__item__1 {
  position: relative;
  padding: 2.5rem;
}

.advantages_no_code_block__grid_1__item__1 p {
  padding-bottom: 2.75rem;
  max-width: 19.62500rem;
}

.advantages_no_code_block__grid_1__item__1__mockup {
  max-width: 16.4375rem;
  width: 50%;
}

.advantages_no_code_block__grid_1__item__1__iphone {
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 1rem;
  max-width: 24.12500rem;
  width: 70%;
}

.advantages_no_code_block__grid_1__item__2 {
  /* padding: 1.5rem 2.625rem 1.75rem; */
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
}

.advantages_no_code_block__grid_1__item__2__arrow {
  max-width: 5.9375rem;
}

.advantages_no_code_block__grid_1__item__3 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
}
.advantages_no_code_block__grid_1__item__3__lock {
  margin-right: 1.5rem;
}

.advantages_no_code_block__grid_2__item__1 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1.57894737rem;
  text-align: center;
}
.advantages_no_code_block__grid_2__item__2 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1.57894737rem;
  text-align: center;
}
.advantages_no_code_block__grid_2__item__3 {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 2.5rem 1.87500rem;
}
.advantages_no_code_block__grid_2__item__3 p {
  max-width: 260px;
}
.advantages_no_code_block__grid_2__item__3__search {
  max-width: 5.4375rem;
  max-height: 5.4375rem;
}

.advantages_no_code_block__grid_2__item__4 {
  padding: 2.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.advantages_no_code_block__grid_2__item__4__speed {
  width: 100%;
  max-width: 15.37500rem;
}

.advantages_no_code_block__grid_3__item__1 p {
  padding: 2.1875rem 2.5rem;
  background: url('/u/advantage/waves.png') no-repeat center;
  background-size: cover;
}

@media (min-width: 1600px) {
  .advantages_no_code_block__grid_1__item__2 {
    justify-content: center;
  }
  .advantages_no_code_block__grid_2__item__3 p {
    max-width: 50%;
  }
}
@media (max-width: 986px) {
  .advantages_no_code_block {
    .advantages_no_code_block__title {
      font-size: 1.5rem;
      color: #C47AFF;
    }
    .advantages_no_code_block__grid__item {
      padding: 20px;
      p {
        font-size: 1.25rem;
        line-height: 1.5rem;
      }
    }
    .advantages_no_code_block__grid_1 {
      grid-template-columns: inherit;
      .advantages_no_code_block__grid_1__item__1 {
        order: 2;
        grid-row: span 2;
        p {
          max-width: 9.625rem;
          padding-bottom: 20px;
        }
      }
      .advantages_no_code_block__grid_1__item__2 {
        order: 1;
        img {
          width: 85px;
          height: auto;
        }
      }
      .advantages_no_code_block__grid_1__item__3 {
        order: 3;
        img {
          width: 44px;
        }
      }
    }
    .advantages_no_code_block__grid_2 {
      display: flex;
      flex-direction: column;
      .advantages_no_code_block__grid_2__item__1 {
        order: 1;
        p {
          max-width: 13rem;
        }
      }
      .advantages_no_code_block__grid_2__item__2 {
        order: 3;
      }
      .advantages_no_code_block__grid_2__item__3 {
        order: 2;
      }
      .advantages_no_code_block__grid_2__item__4 {
        order: 4;
        gap: 19px
      }
    }
    .advantages_no_code_block__grid_3 {
      .advantages_no_code_block__grid_3__item__1 {
        padding: unset;
        p {
          padding-top: 20px;
          padding-bottom: 134px;
          background: url('/u/advantage/waves_mob.png') no-repeat center;
          background-size: cover;
        }
      }
    }
  }
}
</style>