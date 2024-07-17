<script setup lang="ts">
import { News } from '../../../models/news';

const props = defineProps<{ news: News[] }>()

</script>

<template>
    <div class="flex bg-stone-100 divide-x-2 overflow-x-scroll snap-x">
        <div class="w-1/3 p-10 flex flex-col shrink-0 snap-center" v-for="singleNews of news">
            <div class="text-sm bg-stone-200 w-fit px-2 rounded-md">{{ singleNews.date }}</div>
            <div class="text-2xl font-semibold my-5">{{ singleNews.title }}</div>
            <div>{{ singleNews.body }}</div>
            <div class="flex-1"></div>
            <button class="w-fit text-sm text-white bg-black px-3 py-[1px] rounded-md mt-10">
                CONTATTACI
            </button>
        </div>
    </div>
</template>