<template>
    <div>
        <div class="ticker_block">
            <div class="wrap">
                <div class="items-wrap">
                    <div class="items marquee">
                        <div v-for="(item, i) in ticker" class="item">
                            <TickerItem :text="item.name" :icon-url="tickerIcon(i+1)"/>
                        </div>
                    </div>
                    <div aria-hidden="true" class="items marquee">
                        <div v-for="(item, i) in ticker" class="item">
                            <TickerItem :text="item.name" :icon-url="tickerIcon(i+1)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TickerItem from "~/components/home/TickerItem.vue";

const props = defineProps({
    ticker: Array
})
const tickerIcon = (i: number) => {
    let val = i % 3;
    return '/icons/ticker-' + (val > 0 ? val : '3') + '.png'
}
</script>

<style lang="scss">
.ticker_block {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  overflow: hidden;
}

.wrap {
  max-width: 100%;
  margin: auto;
  //padding: 20px;
}

.items-wrap {
  position: relative;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 20px;
}

.items {
  flex-shrink: 0;
  display: flex;
  gap: 20px;
  counter-reset: item;
  justify-content: space-around;
  min-width: 100%;
  cursor: pointer;
}

.item {
  //background: #ccc;
  flex: 0 0 auto;
  //width: 100px;
  //height: 100px;
  counter-increment: item;
  //border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  //font-size: 25px;
  //font-weight: bold;
  color: #fff;
  //margin: 10px 0;
  transition: all 0.1s ease-in-out;
}

/*.item:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}*/

/*.item:before {
  content: counter(item);
}*/

.marquee {
  animation: scroll 50s linear infinite;
}

.reverce {
  animation-direction: reverse;
}

.items-wrap:hover .marquee {
  //animation-play-state: paused;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 20px));
  }
}
</style>