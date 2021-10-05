<script setup>
import ProductsSection from './ProductsSection.vue';
import ShoppingCart from './ShoppingCart.vue';
</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div class="col-span-8">
        <products-section></products-section>
      </div>
      <div class="col-span-4">
        <shopping-cart></shopping-cart>
      </div>
    </div>
</template>