<script setup lang="ts">
import { linktreeUrl } from '../../../constanst';
import Logo from '../../icons/Logo.vue'
</script>

<template>
    <div class="flex flex-col bg-black pt-16 px-10 pb-20">
        <div class="flex justify-between">
            <Logo class="w-fit" height="20" />
            <a :href="linktreeUrl" target="_blank"
                class="w-fit small-button-light animated-background-button z-[1] hover:text-white transition-colors">CONTATTACI</a>
        </div>
        <div class="flex flex-col md:flex-row font-semibold gap-5 md:gap-36">
            <div class="flex flex-col text-white mt-8">
                <div class="text-neutral-400 mb-2"> Social </div>
                <a href="https://www.instagram.com/naturae_firenze/" target="_blank" class="underline"> Instagram </a>
                <a href="https://www.facebook.com/naturaefirenze.it" target="_blank" class="underline"> Facebook </a>
            </div>
            <div class="flex flex-col text-white mt-8">
                <a :href="linktreeUrl" target="_blank" class="text-neutral-400 mb-2"> Contattaci </a>
                <div class=""> info@naturaefirenze.it </div>
                <div class=""> +39 055295090 </div>
            </div>
            <div class="flex flex-col text-white mt-8">
                <div class="text-neutral-400 mb-2"> Dati Fiscali </div>
                <div class=""> P.IVA - 05205530487 </div>
                <div class=""> Le Essenze srl <br> Via Sant'Onofrio 12/14R </div>
                <div class=""> Firenze (FI), 50124 </div>
            </div>
        </div>
    </div>
</template>