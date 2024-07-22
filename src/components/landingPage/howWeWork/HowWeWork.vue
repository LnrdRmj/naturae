<script setup lang="ts">

const points = [
    {
        title: 'Pavimenti in Legno dal 1992',
        body: 'Naturae, a Firenze è sinonimo di pregio, è lo spazio del Vivere Naturale, il punto di riferimento per soluzioni in legno pensate per la vita di ogni giorno. Dal 1992, Fabio Canestrini opera nell’ambito dei pavimenti in legno a Firenze, mettendo a disposizione dei propri clienti competenze artigiane e tecnica, stile ed ecologia per realizzare progetti residenziali e commerciali di massima qualità.'
    },
    {
        title: 'Progettazione a 360 Gradi',
        body: 'Naturae non è solo pavimenti in legno, ma anche un centro di arredamento per la casa e per interni bagno. Dal 2005, Fabio Canestrini si dedica all’arredamento di interni e di bagni con la stessa professionalità e cura che lo ha sempre contraddistinto. Innovazione, entusiasmo, qualità, etica e sostenibilità ambientale sono caratteristiche essenziali a cui fa riferimento ogni giorno, con la stessa passione di un tempo.'
    },
    {
        title: 'Collaborazione con Listone Giordano',
        body: 'Riprova della maestria e dell’impegno che Naturae pone verso i propri clienti è la collaborazione, ormai decennale, con Listone Giordano, nata anche dai comuni interessi quali eccellenza nei prodotti, cura nella realizzazione e riguardo dell’ambiente. Il valore delle realizzazioni dei pavimenti Naturae è garantito prima di tutto dalla selezione esclusiva di parquet Listone Giordano, le cui collezioni sono esposte in un’originale boutique nel cuore pulsante della città.'
    }
]

</script>

<template>
    <div class="flex flex-col px-5 sm:px-24 py-14 bg-orange-50">
        <div class="bg-black h-[1px] w-full mb-3"></div>
        <div class="font-semibold">COME LAVORIAMO</div>

        <div class="flex flex-col mt-24 space-y-10 sm:space-y-5">
            <div v-for="point of points" class="flex flex-col">
                <div class="font-semibold text-3xl mb-3">{{ point.title }}</div>
                <div class="text-lg font-medium">{{ point.body }}</div>
            </div>
        </div>

    </div>
</template>