<script setup lang="ts">

import Image from './assets/headerImage.png'

import EuWorkLogo from './assets/partnerLogos/EuWork.png'
import ListoneGiordano from './assets/partnerLogos/Listone Giordano.png'
import TecnoGrafica from './assets/partnerLogos/Tecno Grafica.png'

const partnerLogos = [ListoneGiordano, TecnoGrafica, EuWorkLogo]

</script>

<template>
    <div class="flex flex-col">
        <div class="h-screen relative">
            <div class="flex flex-col absolute text-white bottom-40 left-24 font-semibold text-3xl">
                <div>
                    NATURAE, LEGNO DA VIVERE
                </div>
                <div class="h-[2px] bg-white w-full my-5"></div>
                <div class="flex justify-between gap-5">
                    <img v-for="logo of partnerLogos" class="h-10" :src="logo" />
                </div>
            </div>

            <img :src="Image" class="size-full object-cover">
        </div>
    </div>
</template>