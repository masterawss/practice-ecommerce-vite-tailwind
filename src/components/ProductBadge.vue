<script setup>
defineProps({
    producto: Object
})
</script>
<template>
    <div>
        <span v-if="producto.new" class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-green-600 bg-green-200 rounded-full">
            Nuevo
        </span>
        <span v-if="producto.offer" class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-600 bg-red-200 rounded-full">
            En oferta
        </span>
    </div>
</template>