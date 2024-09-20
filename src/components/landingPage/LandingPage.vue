<script setup lang="ts">

import Image from './assets/headerImage.png';

import { type News } from '../../models/news';
import { partnerLogos } from '../../service/partners';
import TailwindBreakpoints from '../common/tailwindBreakpoints.vue/TailwindBreakpoints.vue';
import Collaborate from './collaborate/Collaborate.vue';
import DiscoverWorks from './discoverWorks/DiscoverWorks.vue';
import Footer from './footer/Footer.vue';
import Header from './header/Header.vue';
import HowWeWorkSection from './howWeWork/HowWeWork.vue';
import NewsSection from './news/News.vue';
import Partners from './partners/Partners.vue';

const news: News[] = [
    {
        date: '15.09.2024',
        title: 'PROMO SUL PARQUET LISTONE GIORDANO',
        body: 'Per tutto il mese di luglio, Listone Giordano ti offre un\'occasione unica per trasformare la tua casa con stile ed eleganza! La nostra rinomata Linea Heritage sarà disponibile con uno sconto eccezionale del 25%.'
    },
    {
        date: '10.09.2024',
        title: 'SEED - DESIGN ACTION FOR THE FUTURE',
        body: 'Siamo lieti di annunciare il lancio della nostra nuova e innovativa resina autolivellante, progettata per rivoluzionare il mondo dei pavimenti! Se cerchi qualità, estetica e durabilità, Euwork è la scelta giusta per te.',
        button: {
            text: "VISITA IL SITO",
            url: "https://www.listonegiordano.com/fr/festival-seed-2024-2/"
        }
    },
    {
        date: '01.09.2024',
        title: 'CERSAIE 2024 - SALONE DELLA CERAMICA',
        body: 'Per tutto il mese di luglio, Listone Giordano ti offre un\'occasione unica per trasformare la tua casa con stile ed eleganza! La nostra rinomata Linea Heritage sarà disponibile con uno sconto eccezionale del 25%.',
        button: {
            text: "VISITA IL SITO",
            url: "https://www.cersaie.it/it/index.php"
        }
    },
]

const headerRoute = [
    {
        title: 'NEWS',
        onClick: () => { document.querySelector('#newsSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' }) },
    },
    {
        title: 'CHI SIAMO',
        onClick: () => { document.querySelector('#howWeWorkSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' }) },
    },
    {
        title: 'PARTNER',
        onClick: () => { document.querySelector('#partnersSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' }) },
    },
    {
        title: 'COLLABORA',
        onClick: () => { document.querySelector('#collaborateSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' }) },
    }
]

</script>

<template>
    <div class="flex flex-col">
        <!-- <TailwindBreakpoints class="fixed top-0 left-0 z-20 text-white text-2xl" /> -->
        <Header class="fixed z-10 top-0" :routes="headerRoute" />
        <div class="h-[100dvh]">
            <div class="absolute size-full flex flex-col items-center sm:items-start">
                <div class="flex-1"></div>
                <div class="w-10/12 sm:w-fit flex flex-col text-white font-semibold text-xl sm:text-3xl
                p-0 pb-10 sm:pb-40 sm:pl-24">
                    <div>
                        NATURAE, LEGNO DA VIVERE
                    </div>
                    <div class="h-[2px] bg-white w-full my-5"></div>
                    <div class="flex justify-between sm:gap-5">
                        <img v-for="logo of partnerLogos" class="h-8 sm:h-10" :src="logo" />
                    </div>
                </div>
            </div>

            <img :src="Image" class="size-full object-cover">
        </div>
        <NewsSection :news="news" id="newsSection" />
        <DiscoverWorks />
        <HowWeWorkSection id="howWeWorkSection" />
        <Partners id="partnersSection" />
        <Collaborate id="collaborateSection" />
        <Footer />
    </div>
</template>