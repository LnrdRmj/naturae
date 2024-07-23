<script setup lang="ts">
import { linktreeUrl } from '../../../constanst';
</script>

<template>
    <div class="flex flex-col md:items-center py-44 px-10 md:px-32">
        <div class="text-left md:text-center text-3xl md:text-6xl font-semibold w-full">
            Vuoi collaborare con Naturae Firenze?
        </div>
        <div class="font-semibold my-12 text-lg">
            <div class="hidden md:block text-center">
                Naturae Firenze è sempre alla ricerca di nuove collaborazioni
                con partner che condividono la nostra passione per la qualità, l'innovazione e la sostenibilità.
                Se sei interessato a lavorare con noi, contattaci oggi stesso per esplorare insieme nuove opportunità!
            </div>
            <div class="md:hidden text-left">
                Prenota una consulenza gratuita per discutere con me del tuo progetto.
            </div>
        </div>

        <a :href="linktreeUrl" target="_blank"
            class="w-fit bg-black text-white py-2 px-5 font-semibold text-base md:text-2xl rounded-lg animated-background-button z-[1]">
            COLLABORA CON NOI
        </a>

    </div>
</template>