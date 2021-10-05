<script setup>
import {computed, unref} from 'vue'
import {useStore} from 'vuex'
import ShoppingItem from './ShoppingItem.vue'
const store = useStore()
let cart = computed(() => store.state.cart)

let total = computed(() => {
    let _total = 0;
    unref(cart).map((a) => _total += (a.price * a.quantity * (a.has_discount ? .50 : 1)))
    return _total
})
</script>
<template>
    <div class="flex flex-col shadow-lg w-full mr-10">
		<div class="flex p-4 bg-white w-full">
            <div class="container flex mx-auto w-full items-center justify-center">
                <ul class="flex flex-col  p-4">
                    <li>
                        <span class="flex font-medium text-sm text-gray-400 px-4 my-4 uppercase">Carrito de compras</span>
                    </li>
                    <li v-show="cart.length == 0" class="text-center my-6">
                        <img src="../assets/cart.png" alt="" class="mx-auto w-16 object-cover object-center">
                        <strong>Carrito vacío</strong>
                        <p>
                            Si lo deseas demasiado date el gusto 🌝
                        </p>
                    </li>
                    <shopping-item :item="c" v-for="c,i in cart" :key="i"></shopping-item>
                    <li  v-show="cart.length !== 0" >
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