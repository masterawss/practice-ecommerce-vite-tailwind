<script setup>
import ProductsSection from './ProductsSection.vue';
import ShoppingCart from './ShoppingCart.vue';
</script>
<template>
    <div class="grid grid-cols-6 grid-flow-col gap-4">
      <div class="col-span-4">
        <products-section></products-section>
      </div>
      <div class="col-span-2">
        <shopping-cart></shopping-cart>
      </div>
    </div>
</template>