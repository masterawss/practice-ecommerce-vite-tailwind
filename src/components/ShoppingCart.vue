<script setup>
import {computed, unref} from 'vue'
import {useStore} from 'vuex'
import ShoppingItem from './ShoppingItem.vue'
const store = useStore()
let cart = computed(() => store.state.cart)

let total = computed(() => {
    let _total = 0;
    unref(cart).map((a) => _total +=  a.price)
    return _total
})
</script>
<template>
    <div class=" shadow-lg flex items-center justify-center">
		<div class="flex p-4 bg-white">
            <div class="container flex mx-auto w-full items-center justify-center">
                <ul class="flex flex-col  p-4">
                    <li>
                        <span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">Carrito de compras</span>
                    </li>
                    <shopping-item :item="c" v-for="c,i in cart" :key="i"></shopping-item>
                    <li>
                        <span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">
                            Total a pagar: &nbsp;
                            <span class="text-right inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none rounded-full text-green-900 bg-green-100">
                                S/ {{new Intl.NumberFormat("es-pe").format(total)}}
                            </span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>