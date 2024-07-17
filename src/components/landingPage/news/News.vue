<script setup lang="ts">
import { News } from '../../../models/news';

const props = defineProps<{ news: News[] }>()

</script>

<template>
    <div class="flex bg-stone-100 overflow-x-scroll snap-x">
        <div class="w-1/3 p-10 flex flex-col shrink-0 snap-center relative
            after:bg-neutral-200 after:my-10 after:h-4/5 after:w-[1.5px] after:absolute after:right-0 after:top-0
            last:after:hidden" v-for="singleNews of news">
            <div class="text-sm bg-stone-200 w-fit px-2 rounded-md font-medium">{{ singleNews.date }}</div>
            <div class="text-2xl font-semibold my-5">{{ singleNews.title }}</div>
            <div>{{ singleNews.body }}</div>
            <div class="flex-1"></div>
            <button class="w-fit small-button mt-10">
                CONTATTACI
            </button>
        </div>
    </div>
</template>