<template>
  <div class="error_404_page">
    <Header/>
    <div class="error_404_block">
      <div class="error_404_block__wrapper">
        <div class="error_404___card">
          <p>Страница не найдена</p>
          <img src="/error-404.png" alt="Error 404 Geek Flow">
          <p>Вернуться на главную можно с помощью кнопки ниже или через меню</p>
        </div>
        <div class="error_404_block__home_button">
          <NuxtLink class="error_404_block__home_button__link" to="/">
            <img src="/icons/home.png" alt="Go Home">
          </NuxtLink>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
</script>

<style lang="scss">
.error_404_block {
  height: 100vh;
  background: #fff url('/error-bg.jpg') center center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error_404_block__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.error_404___card {
  width: 52.0833333vw;
  min-height: 51.2820513vh;
  background: #fff url('/404-card-bg.jpeg') center center no-repeat;
  background-size: cover;
  border-radius: 1rem;
  padding-top: 6.25rem;
  padding-bottom: 6.25rem;
  text-align: center;
}

.error_404___card p {
  font-family: 'Onest Regular',serif;
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  /* identical to box height, or 20px */
  text-align: center;
  color: #FFFFFF;
}

.error_404___card p,
.error_404___card img,
{
  margin-bottom: 1.62500rem;
}

.error_404___card p:last-child {
  margin-bottom: unset;
}

.error_404_block__home_button {
  margin-top: -2.0625rem;
}

.error_404_block__home_button__link {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid #FFFFFF;
  border-radius: 50%;
  width: 4.12500rem;
  height: 4.12500rem;
  display: block;
  padding: 1.25rem;
  backdrop-filter: blur(10px);
}

.error_404_block__home_button__link img {
  display: block;
  width: 100%;
  margin-top: -3px;
}
</style>