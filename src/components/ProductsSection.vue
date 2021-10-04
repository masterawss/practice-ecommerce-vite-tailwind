<script setup>
import { ref, reactive } from 'vue'
import ProductCard from './ProductCard.vue';
import {computed} from 'vue'
import {useStore} from 'vuex'

const store = useStore()

let productos = computed(() => store.state.productos)
</script>
<template>
    <div class="grid grid-cols-3 gap-4">
      <product-card v-for="(producto,i) in productos" :producto="producto" :key="i"></product-card>
    </div>
</template>
<style>
</style>