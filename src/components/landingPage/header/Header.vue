<script setup lang="ts">
import Logo from '../../icons/Logo.vue'

</script>

<template>
    <div class="flex justify-between w-full px-24 py-8 bg-black text-white background-header">
        <Logo height="25" />
        <div class="flex gap-16">
            <div>NEWS</div>
            <div>CHI SIAMO</div>
            <div>PARTNER</div>
            <div>COLLABORA</div>
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