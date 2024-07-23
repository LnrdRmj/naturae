<script setup lang="ts">
import Instagram from '../../icons/Instagram.vue';
import InstagramNoColor from '../../icons/InstagramNoColor.vue';
import InstagramProfileImage from './assets/instagramProfileImage.png'
</script>

<template>
    <div class="bg-neutral-900 flex px-10 md:px-20">
        <div class="flex flex-col flex-1 pt-20 pb-32">
            <div class="text-white text-4xl font-semibold mb-10">
                SCOPRI I NOSTRI LAVORI
            </div>
            <div class="text-white mb-16">
                Seguici su Instagram e guarda i nostri progetti di parquet
                e d'interni, capisci i nostri metodi di lavoro e rimani aggiornato su
                promozioni e offerte esclusive!
            </div>
            <button class="w-fit flex gap-4 h-12 bg-white py-2 px-5 font-semibold text-2xl rounded-lg 
                animated-background-button z-[1] before:bg-pink-600 group">
                <div
                    class="relative size-8 [&>*]:h-8 [&>*]:absolute [&>*]:left-0 [&>*]:top-0 [&>*]:aspect-square [&>*]:transition-opacity">
                    <Instagram class="group-hover:opacity-0" />
                    <InstagramNoColor class="opacity-0 group-hover:opacity-100" />
                </div>
                <div class="flex group-hover:text-white transition-colors"><span>SEGUICI</span> <span
                        class="hidden md:block">&nbsp;SU INSTAGRAM</span></div>
            </button>
        </div>
        <div class="hidden md:block relative w-1/3">
            <img :src="InstagramProfileImage" class="absolute-center md:h-4/6 lg:h-full w-auto scale-125" />
        </div>
    </div>
</template>