<script setup>
import { ref, reactive } from 'vue'
import ProductCard from './ProductCard.vue'
import {computed} from 'vue'
import {useStore} from 'vuex'

const store = useStore()
const search_text = ref("")
let productos = computed(() => store.state.productos)

const productos_filter = computed(() => {
  if(search_text.value.length > 0){
    return Array.from(productos.value).filter(p => p.name.toLowerCase().includes(search_text.value.toLowerCase())
      || p.content.toLowerCase().includes(search_text.value.toLowerCase())
      || p.price.toString().toLowerCase().includes(search_text.value.toLowerCase()) )
  }
  return productos.value
})
</script>
<template>
<div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto mb-10">
  <p class="text-gray-800 text-2xl leading-relaxed mt-8 ml-4 font-semibold">
    <strong>Lista de productos</strong>
  </p>
  <div class="sm:flex items-center shadow-md bg-white rounded-lg overflow-hidden px-2 py-4 justify-between">
    <input v-model="search_text" class="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Filtrar por nombre, precio y color" />
  </div>
  <div class="relative flex flex-col items-center "> 
      <div class="grid mt-8  gap-8 grid-cols-1" v-show="productos_filter.length == 0">
        <strong>No se encontraron resultados</strong>
      </div>
      <div class="grid mt-8  gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <product-card v-for="(producto,i) in productos_filter" :producto="producto" :key="i"></product-card>
      </div>
  </div>
</div>
</template>
<style>
</style>