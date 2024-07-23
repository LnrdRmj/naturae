<script setup lang="ts">
import Logo from '../../icons/Logo.vue'
</script>

<template>
    <div class="flex flex-col bg-black pt-16 px-10 pb-20">
        <div class="flex justify-between">
            <Logo class="w-fit" height="20" />
            <button
                class="w-fit small-button-light animated-background-button z-[1] hover:text-white transition-colors">CONTATTACI</button>
        </div>
        <div class="flex flex-col md:flex-row font-semibold gap-5 md:gap-36">
            <div class="flex flex-col text-white mt-8">
                <div class="text-neutral-400 mb-2"> Social </div>
                <div class=""> Instagram </div>
                <div class=""> Facebook </div>
            </div>
            <div class="flex flex-col text-white mt-8">
                <div class="text-neutral-400 mb-2"> Contattaci </div>
                <div class=""> info@azienda.it </div>
                <div class=""> +39 3330068966 </div>
            </div>
            <div class="flex flex-col text-white mt-8">
                <div class="text-neutral-400 mb-2"> Dati Fiscali </div>
                <div class=""> P.IVA - 000000000 </div>
                <div class=""> Firenze (FI), 50124 </div>
                <div class=""> Via Sant’Onofrio 12/14R </div>
            </div>
        </div>
    </div>
</template>