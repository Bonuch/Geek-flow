<template>
    <section class="privacy_policy_block">
        <div class="privacy_policy_block__wrapper">
            <div class="privacy_policy_block__head">
                <h1 class="privacy_policy_block__head__title">Политика конфиденциальности</h1>
            </div>
            <div class="privacy_policy_block__body" v-html="privacy_policy">

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {useSettingStore} from "~/stores/settings";
import {storeToRefs} from "pinia";

const settingStore = useSettingStore();
const {privacy_policy, description, title} = storeToRefs(settingStore);
useHead({
    title: 'Политика конфиденциальности | ' + title.value,
    meta: [
        {name: 'description', content: description.value}
    ],
})
</script>

<style lang="scss">
.privacy_policy_block {
  padding-top: 9.25rem;
  padding-bottom: 3.75rem;
  background: linear-gradient(107.9deg, #151520 0%, #0E0E1C 100%), linear-gradient(90deg, #2D2848 0%, #464061 100%);
}

.privacy_policy_block__wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 5rem;
  padding-right: 5rem;
}

.privacy_policy_block__head {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2.5rem;
}

.privacy_policy_block__head__title {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2.62500rem;
  text-align: right;
  color: #FFFFFF;
}

.privacy_policy_block__head__title::after {
  content: url('/icons/ellipse-purple-big.svg');
  position: relative;
  top: -19px;
  width: 14px;
  height: 14px;
  display: inline-block;
}

.privacy_policy_block__body {
  max-width: 41.75rem;
}

.privacy_policy_block__body p {
  padding-bottom: 0.875rem;
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #B8B8BC;
}

.privacy_policy_block__body p:last-child {
  padding-bottom: unset;
}

@media (min-width: 1600px) {
    .privacy_policy_block__body p {
        font-size: 1rem;
    }
}
@media (max-width: 986px) {
  .privacy_policy_block {
    padding-top: 100px;

    .privacy_policy_block__wrapper {
      padding-left: 18px;
      padding-right: 18px;

      .privacy_policy_block__head__title {
        font-size: 24px;
        text-align: left;

        &:after {
          content: unset;
        }
      }
    }
  }
}
</style>