<script setup lang="ts">
import { partnersData } from '../../../service/partners';

const colors = ['green-600', 'stone-600', 'cyan-950']

</script>

<template>
    <div class="bg-neutral-900 flex">
        <div class="hidden before:bg-stone-600 before:bg-green-600 before:bg-cyan-950"></div>
        <div v-for="(partner, index) of partnersData" class="w-1/3 h-64
        group
            flex-center relative 
            animated-background-button z-[1]
            before:rounded-none" :class="`before:bg-${colors[index]}`">
            <img :src="partner.grayLogo" class="opacity-100 group-hover:opacity-0 absolute-center h-16">
            <img :src="partner.logo" class="opacity-0 group-hover:opacity-100 absolute-center h-16">
        </div>
    </div>
</template>