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
        title: 'LISTONE GIORDANO - IDEA PROMO AUTUMN',
        body: 'Siamo lieti di annunciare la promozione "Idea Promo Autumn" di Listone Giordano, valida fino al 31 novembre 2024. Ti aspettiamo nel nostro showroom per scoprire tutti i dettagli e approfittare delle offerte!'
    },
    {
        date: '10.09.2024',
        title: 'SEED - DESIGN ACTION FOR THE FUTURE',
        body: 'Listone Giordano ti invita dal 25 al 28 settembre 2024 a Perugia per un festival sul futuro del pianeta, dove design e scienze si confrontano sul tema degli equilibri. Ti invitiamo a visitare la pagina per saperne di più!',
        button: {
            text: "VISITA IL SITO",
            url: "https://www.listonegiordano.com/fr/festival-seed-2024-2/"
        }
    },
    {
        date: '01.09.2024',
        title: 'CERSAIE 2024 - SALONE DELLA CERAMICA',
        body: 'Partecipa alla 41° edizione di Cersaie, dal 23 al 27 settembre a Bologna! Scopri le tendenze e soluzioni innovative nel campo delle superfici e dell\'arredo bagno.Consulta la mappa interattiva per gli espositori dal sito.',
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