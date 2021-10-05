<script setup>
import { ref, reactive } from 'vue'
import ProductCard from './ProductCard.vue';
import {computed} from 'vue'
import {useStore} from 'vuex'

const store = useStore()

let productos = computed(() => store.state.productos)
</script>
<template>
<div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto mb-10">
  <p class="text-gray-800 text-2xl leading-relaxed mt-8 ml-4 font-semibold">
    <strong>Lista de productos</strong>
  </p>
  <div class="relative flex flex-col items-center "> 
      <div class="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <product-card v-for="(producto,i) in productos" :producto="producto" :key="i"></product-card>
      </div>
  </div>
</div>
</template>
<style>
</style>