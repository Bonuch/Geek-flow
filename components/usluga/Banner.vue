<template>
    <div class="call_to_action_banner_block">
        <div class="call_to_action_banner_block__header">
            <div class="call_to_action_banner_block__icons">
                <img src="/u/seo/google.svg" alt="" class="call_to_action_banner_block__icons">
                <img src="/u/seo/yandex.svg" alt="" class="call_to_action_banner_block__icons">
            </div>
        </div>
        <div class="call_to_action_banner_block__body">
            <p>{{title}}</p>
        </div>
        <div class="call_to_action_banner_block__footer">
            <ButtonLinkClear :text="text_button" to="#contact_footer_block__move"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import ButtonLinkClear from "~/components/links/ButtonLinkClear.vue";
const props = defineProps({
    title: String,
    text_button: String,
})
</script>

<style lang="scss">
.call_to_action_banner_block {
  background: rgba(13, 13, 23, 0.68);
  border-radius: 16px;
  padding: 46px 46px 76px 80px;
    position: relative;
    overflow: hidden;
    &:after {
        content: " ";
        display: block;
        position: absolute;
        width: 431px;
        height: 302px;
        background: linear-gradient(180deg, rgba(36, 58, 255, 0.6) 0%, rgba(194, 54, 96, 0.6) 100%);
        filter: blur(133px);
        right: -15%;
        bottom: -15%;
    }
    .call_to_action_banner_block__header {
        .call_to_action_banner_block__icons {
            display: flex;
            justify-content: flex-end;
            gap: 30px;
        }
    }
    .call_to_action_banner_block__body {
        max-width: 500px;
        margin-bottom: 40px;
        p {
            font-family: 'Onest Regular',serif;
            font-style: normal;
            font-weight: 500;
            font-size: 2rem;
            line-height: 140%;
            color: #FFFFFF;
        }
    }
    .call_to_action_banner_block__footer {
        display: flex;
    }
}

@media (min-width: 1600px) {
    .call_to_action_banner_block {
        .call_to_action_banner_block__body {
            max-width: 70%;
        }
    }
}

@media (max-width: 986px) {
    .call_to_action_banner_block {
        .call_to_action_banner_block__header {
            float: right;
        }
        .call_to_action_banner_block__body {
            max-width: 400px;
            p {
                font-size: 1.5rem;
            }
        }
    }
}

@media (max-width: 686px) {
    .call_to_action_banner_block {
        padding: 23px 23px 38px 40px;
        .call_to_action_banner_block__header {
            .call_to_action_banner_block__icons {
                gap: 15px;
                img {
                    max-width: 30px;
                }
            }
        }
        .call_to_action_banner_block__body {
            max-width: 300px;
            p {
                font-size: 1rem;
            }
        }
    }
}

@media (max-width: 486px) {
    .call_to_action_banner_block {
        text-align: center;
        .call_to_action_banner_block__header {
            text-align: center;
            float: unset;
            .call_to_action_banner_block__icons {
                justify-content: center;
                margin-bottom: 0.5rem;
                img {
                    max-width: 20px;
                }
            }
        }
        .call_to_action_banner_block__body {
            max-width: 100%;
            p {
                font-size: 1rem;
            }
        }
        .call_to_action_banner_block__footer {
            justify-content: center;
        }
    }
}
</style>