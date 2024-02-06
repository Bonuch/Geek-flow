<template>
    <div class="banner_switcher">
        <fieldset id="switch" class="radio">
            <span v-for="(category, i) in props.categories">
                <input @click="changeCategory(category.value)" :checked="i===0||category.value===activeCategory" name="switch" :id="category.value"
                       type="radio">
                        <label :for="category.value">{{ category.name }}</label>
            </span>
            <!--            <input checked="" name="switch" id="uncategorized" type="radio">
                        <label for="uncategorized">Без категории</label>
                        <input name="switch" id="development" type="radio">
                        <label for="development">Разработка</label>
                        <input name="switch" id="promotion" type="radio">
                        <label for="promotion">Продвижение</label>
                        <input name="switch" id="design" type="radio">
                        <label for="design">Дизайн</label>-->
        </fieldset>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    categories: Array,
    activeCategory: {
        type: String,
        default() {
            return 'uncategorized'
        }
    }
})
const emit = defineEmits(['change-category'])
const changeCategory = (slug) => {
    emit('change-category', slug)
}
</script>

<style scoped>
.banner_switcher {
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1.5rem;
}

.banner_switcher fieldset {
    border: 0;
    padding: 1rem;
}

/* Hide default radio */
.radio input[type="radio"] {
    position: absolute;
    visibility: hidden;
    display: none;
    opacity: 0;
    z-index: -1;
}

/* Customizing label */
.radio label {
    position: relative;
    padding: 6px 28px 7px;
    cursor: pointer;
    border-radius: 16px;
    font-family: 'Onest Regular',serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    text-align: center;
    color: #848484;
}

.radio label, .radio label::before {
    -webkit-transition: .25s all ease;
    transition: .25s all ease;
}

.radio label::before {

}

.radio input[type="radio"] + label::before {
    border-radius: 16px;
}


/* Checked toggle */
.radio input[type="radio"]:checked + label {
    color: #fff;
    z-index: 1;
    background: rgba(255, 255, 255, 0.1);
}

.radio input[type="radio"]:checked + label {
    padding: 6px 28px 7px;
}

.radio input[type="radio"]:checked + label::before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: "";
    position: absolute;
    left: 0;
    border: 1px solid #fff;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

@media (min-width: 1600px) {
    .radio label {
        font-size: 1rem;
        line-height: 19px;
    }

}
@media (max-width: 986px) {
    .banner_switcher {
        border-radius: 24px;
    }
    .banner_switcher fieldset {
        padding: 0.5rem;
    }

    .banner_switcher fieldset span {
        width: 50%;
        display: flex;
    }

    .radio label {
        position: relative;
        padding: 6px 15px;
        width: 100%;
        text-align: center;
    }

    .radio input[type="radio"]:checked + label {
        padding: 5px 15px;
    }

    .banner_switcher fieldset {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
}

@media (max-width: 380px) {
    .radio label {
        font-size: 14px;
        padding: 6px 8px;
    }

    .radio input[type="radio"]:checked + label {
        padding: 5px 8px;
    }
}
</style>