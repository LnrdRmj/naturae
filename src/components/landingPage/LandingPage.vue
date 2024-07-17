<script setup lang="ts">

import Image from './assets/headerImage.png';

import { type News } from '../../models/news';
import EuWorkLogo from './assets/partnerLogos/EuWork.png';
import ListoneGiordano from './assets/partnerLogos/Listone Giordano.png';
import TecnoGrafica from './assets/partnerLogos/Tecno Grafica.png';
import NewsSection from './news/News.vue';
import HowWeWorkSection from './howWeWork/HowWeWork.vue';
import Collaborate from './collaborate/Collaborate.vue'
import Footer from './footer/Footer.vue'
import Header from './header/Header.vue';

const partnerLogos = [ListoneGiordano, TecnoGrafica, EuWorkLogo]
const news: News[] = [
    {
        date: '14.06.2024',
        title: 'PROMO SUL PARQUET LISTONE GIORDANO',
        body: 'Per tutto il mese di luglio, Listone Giordano ti offre un\'occasione unica per trasformare la tua casa con stile ed eleganza! La nostra rinomata Linea Heritage sarà disponibile con uno sconto eccezionale del 25%.'
    },
    {
        date: '8.06.2024',
        title: 'NUOVA TIPOLOGIA DI RESINA EUWORK',
        body: 'Siamo lieti di annunciare il lancio della nostra nuova e innovativa resina autolivellante, progettata per rivoluzionare il mondo dei pavimenti! Se cerchi qualità, estetica e durabilità, Euwork è la scelta giusta per te.'
    },
    {
        date: '4.06.2024',
        title: 'PROMOZIONE SU RESTAURO',
        body: 'Per tutto il mese di luglio, Listone Giordano ti offre un\'occasione unica per trasformare la tua casa con stile ed eleganza! La nostra rinomata Linea Heritage sarà disponibile con uno sconto eccezionale del 25%.'
    },
    {
        date: '4.06.2024',
        title: 'PROMOZIONE SU RESTAURO',
        body: 'Per tutto il mese di luglio, Listone Giordano ti offre un\'occasione unica per trasformare la tua casa con stile ed eleganza! La nostra rinomata Linea Heritage sarà disponibile con uno sconto eccezionale del 25%.'
    }
]

const headerRoute = [
    {
        title: 'NEWS',
        onClick: () => { document.querySelector('#newsSection')?.scrollIntoView({ behavior: 'smooth' }) },
    },
    {
        title: 'CHI SIAMO',
        onClick: () => { document.querySelector('#howWeWorkSection')?.scrollIntoView({ behavior: 'smooth' }) },
    },
    {
        title: 'PARTNER',
        onClick: () => { },
    },
    {
        title: 'COLLABORA',
        onClick: () => { document.querySelector('#collaborateSection')?.scrollIntoView({ behavior: 'smooth' }) },
    }
]

</script>

<template>
    <div class="flex flex-col">
        <Header class="fixed z-10 top-0" :routes="headerRoute" />
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
        <NewsSection :news="news" id="newsSection" />
        <HowWeWorkSection id="howWeWorkSection" />
        <Collaborate id="collaborateSection" />
        <Footer />
    </div>
</template>