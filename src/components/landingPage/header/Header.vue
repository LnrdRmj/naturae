<script setup lang="ts">
import BurgerMenu from '../../common/icons/BurgerMenu.vue';
import Logo from '../../icons/Logo.vue'

export type HeaderRoutes = {
    title: string,
    onClick: () => void
}

const props = defineProps<{
    routes: HeaderRoutes[]
}>()

</script>

<template>
    <div class="flex justify-between items-center w-full px-10 md:px-24 py-8 bg-black text-white background-header">
        <Logo height="18" />
        <div class="hidden lg:flex gap-16">
            <button v-for="route of routes" @click="route.onClick">{{ route.title }}</button>
        </div>
        <div class="lg:hidden flex-center">
            <BurgerMenu height="18" />
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