<script setup lang="ts">
import { ref } from 'vue';
import BurgerMenu from '../../common/icons/BurgerMenu.vue';
import Logo from '../../icons/Logo.vue'

export type HeaderRoutes = {
    title: string,
    onClick: () => void
}

const props = defineProps<{
    routes: HeaderRoutes[]
}>()

const visibility = ref(false)

function tmp() {
    console.log('ciao');
}
</script>

<template>
    <div class="flex flex-col w-full h-fit text-white background-header">
        <div class="flex justify-between items-center w-full px-10 md:px-24 py-8">
            <Logo height="18" />
            <div class="hidden lg:flex gap-16">
                <button v-for="route of routes" @click="route.onClick" class="z-20
                px-2 py-1
                font-semibold
                animated-background-button">
                    {{ route.title }}
                </button>
            </div>
            <div class="lg:hidden flex-center z-20" @click="visibility = !visibility">
                <BurgerMenu height="18" />
            </div>
        </div>
        <div class="grid grid-rows-[0fr] transition-[grid-template-rows]" :class="{ 'grid-rows-[1fr]': visibility }">
            <div class="lg:hidden
            overflow-hidden
            text-white
            flex flex-col
            w-full md:h-fit
            z-10
            transition-[opacity,transform] duration-[250ms]" :class="visibility ? 'opacity-100' : 'opacity-0'">
                <div class="flex-center flex-col py-12 px-8">
                    <button v-for="route of routes" @click="route.onClick(); visibility = false" class="z-20
                        px-2 py-1 h-fit
                        font-semibold
                        animated-background-button">
                        {{ route.title }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.background-header {
    background: rgba(0, 0, 0, 0.78);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(5px);
}
</style>