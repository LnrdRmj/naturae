<script setup lang="ts">
import { partnersData } from '../../../service/partners';

const colors = ['green-600', 'stone-600', 'cyan-950']

</script>

<template>
    <div class="bg-neutral-900 flex flex-col md:flex-row py-24 md:py-0">
        <div class="hidden before:bg-stone-600 before:bg-green-600 before:bg-cyan-950"></div>
        <div class="md:hidden text-white text-3xl text-center font-semibold mb-10">
            I NOSTRI PARTNER
        </div>
        <a :href="partner.website" target="_blank" v-for="(partner, index) of partnersData" class="w-full md:w-1/3 h-32 md:h-64
        group
            flex-center relative 
            animated-background-button z-[1]
            before:rounded-none" :class="`before:bg-${colors[index]}`">
            <img :src="partner.grayLogo" class="opacity-0 md:opacity-100 md:group-hover:opacity-0 absolute-center h-16">
            <img :src="partner.logo" class="opacity-100 md:opacity-0 md:group-hover:opacity-100 absolute-center h-16">
        </a>
    </div>
</template>