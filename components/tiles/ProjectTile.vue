<template>
    <NuxtLink v-if="!project.preview_only" :href="'/portfolio/'+project.id" class="tile_block"
       :class="(tileGenerator(id)) + (simpleMod?' tile_block_simple':'')"
       :style="{backgroundImage: 'url(' + getImageUrl(project.preview_middle_img) + ')', color: getColor()}">
        <div class="tile_block__top">
            <TagsBlock class="tile_block__tags" :tags="tags()" :color="getColor()"/>
            <h3 class="tile_block__title" :style="{color: getColor()}"
                v-html="project.short_title ? project.short_title : project.title"/>
        </div>

        <div class="tile_block__bottom">
            <p class="tile_block__short_descr" :style="{color: getColor()}"
               v-html="project.short_description ? project.short_description : project.description"/>
            <!--        <CircleArrowLinkBlack v-if="project.color === 'black'" class="tile_block__button" :link="project.link" />
                    <CircleArrowLinkWhite v-else class="tile_block__button" :link="project.link" />-->
        </div>
    </NuxtLink>
    <div v-else class="tile_block"
       :class="(tileGenerator(id)) + (simpleMod?' tile_block_simple':'')"
       :style="{backgroundImage: 'url(' + getImageUrl(project.preview_middle_img) + ')', color: getColor()}">
        <div class="tile_block__top">
            <TagsBlock class="tile_block__tags" :tags="tags()" :color="getColor()"/>
            <h3 class="tile_block__title" :style="{color: getColor()}"
                v-html="project.short_title ? project.short_title : project.title"/>
        </div>

        <div class="tile_block__bottom">
            <p class="tile_block__short_descr" :style="{color: getColor()}"
               v-html="project.short_description ? project.short_description : project.description"/>
            <!--        <CircleArrowLinkBlack v-if="project.color === 'black'" class="tile_block__button" :link="project.link" />
                    <CircleArrowLinkWhite v-else class="tile_block__button" :link="project.link" />-->
        </div>
    </div>
</template>

<script lang="ts" setup>
import TagsBlock from "~/components/home/tags/TagsBlock.vue";

const props = defineProps({
    project: {
        type: Object,
        default() {
            return {}
        }
    },
    id: Number,
    colorText: String,
    simpleMod: {
        type: Boolean,
        default() {
            return false
        }
    }
})
const tags = () => {
    const tTags: { slug: any; name: any; }[] = [];
    props.project.tags.forEach((tag: { item: { name: any; slug: any }; }) => {
        tTags.push({slug: tag.item.slug, name: tag.item.name})
    })
    return tTags
}
const tileGenerator = (id: number) => {
    if (props.simpleMod) {
        return ''
    }
    return (id === 0) || ((id) % 3 === 0) ? 'tile_big_grid' : 'tile_small_grid'
}
const getColor = () => {
    return props.project.color === 'black' ? '#121217' : '#ffffff'
}

</script>

<style lang="scss">
@import "@/assets/styles/scss/_colors.scss";

a.tile_block {
    cursor: url("/icons/cursor.png"), pointer;
}
.tile_block {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-decoration: unset;

  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  -o-transition: all .5s;
  transition: all .5s;

  &:hover {
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
  }
}

.tile_big_grid {
  grid-row: span 2;
}

.tile_small_grid {
  grid-row: span 1;
}

.tile_block__title {
  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 140%;
  /* identical to box height, or 45px */


  color: $textPrimary;
}

.tile_block__bottom {
  margin-top: 10.8125rem;
  display: flex;
  justify-content: space-between;
}

.tile_block__short_descr {
  //max-width: 27.875rem;

  font-family: 'Onest Regular', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 140%;
}

.tile_block__button {
  width: 4.125rem;
  height: 4.125rem;
}

.tile_block_simple .tile_block__bottom {
  margin-top: 23.5625rem;
}

.tile_block_simple .tile_block__short_descr {
  //max-width: 11.5625rem;
}

@media(max-width: 1270px) {
  .tile_block__short_descr {
    //max-width: 26rem;
  }
}

@media(max-width: 1200px) {
  .tile_block__short_descr {
    max-width: 20rem;
  }
}

@media (max-width: 980px) {
  .tile_block__bottom, .tile_block_simple .tile_block__bottom {
    margin-top: 17.3125rem;
  }
}

@media (max-width: 480px) {
  .tile_block__short_descr {
    max-width: 18rem;
  }
  .tile_block__button {
    width: 52px;
    height: 52px;
  }

  .tile_block {
    padding-left: 18px;
    padding-right: 18px;
  }
}

@media(max-width: 364px) {
  .tile_block__short_descr {
    max-width: 10rem;
  }
}
</style>