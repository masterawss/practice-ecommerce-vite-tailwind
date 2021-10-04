<script setup>
import ProductsSection from './ProductsSection.vue';
import ShoppingCart from './ShoppingCart.vue';
</script>
<template>
    <div class="grid grid-cols-4 grid-flow-col gap-4">
      <div class="col-span-3">
        <products-section></products-section>
      </div>
      <div class="col-span-1">
        <shopping-cart></shopping-cart>
      </div>
    </div>
</template>