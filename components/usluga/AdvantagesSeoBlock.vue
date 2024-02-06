<template>
    <section class="advantages_seo_block">
        <h3 class="advantages_seo_block__title">Преимущества SEO - продвижения</h3>
        <div class="advantages_seo_block__grid_3">
            <div class="advantages_seo_block__grid__item advantages_seo_block__grid_3__item__1">
                <p>Увеличение роста <br><span>трафика</span></p>
                <img src="/u/seo/advantage/arrow.png" alt="Увеличение роста трафика">
            </div>
        </div>
        <div class="advantages_seo_block__grid_1">
            <div class="advantages_seo_block__grid__item advantages_seo_block__grid_1__item__1">
                <p><span>Максимальный охват</span> целевой аудитории в Яндекс и Google</p>
                <div>
                    <img src="/u/seo/google-color.svg" alt="Максимальный охват целевой аудитории в Google"
                         class="advantages_seo_block__grid_1__item__3__lock">
                    <img src="/u/seo/yandex-color.svg" alt="Максимальный охват целевой аудитории в Яндекс"
                         class="advantages_seo_block__grid_1__item__3__lock">
                </div>
            </div>
            <div class="advantages_seo_block__grid__item advantages_seo_block__grid_1__item__2">
                <p><span>Низкая</span> стоимость
                    привличенного клиента</p>
                <div>
                    <img src="/u/ready-solutions/advantage/rouble.png" alt="Низкая стоимость
            привличенного клиента"
                         class="advantages_seo_block__grid_1__item__3__lock">
                </div>
            </div>
        </div>
        <div class="advantages_seo_block__grid_2">
            <div class="advantages_seo_block__grid__item advantages_seo_block__grid_2__item__1">
                <p><span>Рост узнаваемости</span> бренда и доверия к нему</p>
                <img src="/u/seo/advantage/vector.svg" alt="Рост узнаваемости бренда и доверия к нему"
                     class="advantages_seo_block__grid_2__item__3__vector">
            </div>
            <div class="advantages_seo_block__grid__item advantages_seo_block__grid_2__item__2">
                <p><span>Улучшение конверсии</span> сайта из посетителя в заявку</p>
                <div class="advantages_seo_block__grid_2__item__2_bottom">
                    <ButtonLinkClear class="advantages_seo_block__grid_2__item__2_bottom__link" text="Оставить заявку" to="#contact_footer_block__move"/>
                    <img src="/u/seo/advantage/doc.png" alt="Улучшение конверсии сайта из посетителя в заявку"
                         class="advantages_seo_block__grid_2__item__3__doc">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import ButtonLinkClear from "~/components/links/ButtonLinkClear.vue";
</script>

<style lang="scss">
.advantages_seo_block__title {
  text-align: center;
  margin-bottom: 3.75rem;
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  /*line-height: 140%;*/
  color: #FFFFFF;
}

.advantages_seo_block__grid__item {
  background: #06060A;
  border-radius: 16px;

  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: #FFFFFF;
}

.advantages_seo_block__grid__item span {
  color: #C57AFF;
}

.advantages_seo_block__grid_1 {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr) 45%);
  grid-column-gap: 3.125rem;
  grid-row-gap: 3.125rem;
  padding-bottom: 3.125rem;
  grid-auto-rows: 1fr;
}

.advantages_seo_block__grid_1__item__1 {
  grid-row: span 1;
}

.advantages_seo_block__grid_1__item__2, .advantages_seo_block__grid_1__item__3 {
  grid-row: span 1;
}

.advantages_seo_block__grid_2 {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr) 45%);
  grid-column-gap: 3.125rem;
  grid-row-gap: 3.125rem;
  padding-bottom: 3.125rem;
  grid-auto-rows: 1fr;
}

.advantages_seo_block__grid_3 {
  margin-bottom: 50px;
}

.advantages_seo_block__grid_3__item__1 {
  padding: 50px 100px 50px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.advantages_seo_block__grid_1__item__1 {
  font-size: 1.5rem;
}

.advantages_seo_block__grid_3__item__1 {
  font-size: 2rem;
}

.advantages_seo_block__grid_1__item__2, .advantages_seo_block__grid_1__item__3,
.advantages_seo_block__grid_2__item__1, .advantages_seo_block__grid_2__item__2 {
  font-size: 1.5rem;
}

.advantages_seo_block__grid_1__item__1 {
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

.advantages_seo_block__grid_1__item__2 {
  //padding: 1.5rem 2.625rem 1.75rem;
  text-align: left;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  padding: 30px;
  gap: 30px;
}

.advantages_seo_block__grid_1__item__2__arrow {
  max-width: 5.9375rem;
}

.advantages_seo_block__grid_1__item__3 {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
}

.advantages_seo_block__grid_1__item__3__lock {
  margin-right: 1.5rem;
}

.advantages_seo_block__grid_2__item__1,
.advantages_seo_block__grid_2__item__2 {
    padding: 32px 30px;
}

.advantages_seo_block__grid_2__item__1 {
    display: flex;
    flex-direction: column;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.9);
    p {
        max-width: 285px;
    }
    .advantages_seo_block__grid_2__item__3__vector {
        margin-top: -10px;
    }
}

.advantages_seo_block__grid_2__item__2 {
  display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 48px;
    padding-bottom: 43px;
    p {
        max-width: 285px;
    }
    .advantages_seo_block__grid_2__item__2_bottom {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        .advantages_seo_block__grid_2__item__2_bottom__link {
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

@media (min-width: 1600px) {
    .advantages_seo_block__grid_2__item__2 {
        p {
            max-width: 70%;
        }
    }
}
@media (max-width: 986px) {
  .advantages_seo_block {
    .advantages_seo_block__title {
      font-size: 1.5rem;
      color: #C47AFF;
    }

    .advantages_seo_block__grid__item {
      padding: 20px;

      p {
        font-size: 1.25rem;
        line-height: 24px;
      }
    }
  }
    .advantages_seo_block__grid_1,
    .advantages_seo_block__grid_2{
        grid-template-columns: 1fr;
    }
    .advantages_seo_block__grid_2__item__1 {
        display: flex;
        justify-content: space-between;
        flex-direction: revert;
        .advantages_seo_block__grid_2__item__3__vector {
            margin-top: unset;
            max-width: 60%;
        }
        p {
            width: 40%;
            max-width: unset;
        }
    }
}
@media (max-width: 586px) {
  .advantages_seo_block {
    .advantages_seo_block__title {
    }

    .advantages_seo_block__grid__item {
      p {
      }
    }
  }
    .advantages_seo_block__grid_1,
    .advantages_seo_block__grid_2{
    }
    .advantages_seo_block__grid_2__item__1 {
        justify-content: space-between;
        flex-direction: column;
        text-align: center;
        .advantages_seo_block__grid_2__item__3__vector {
            max-width: 90%;
        }
        p {
            width: 100%;
            margin-bottom: 2rem;
        }
    }
    .advantages_seo_block__grid_1__item__1,
    .advantages_seo_block__grid_1__item__2{
        flex-direction: column;
    }
}
</style>