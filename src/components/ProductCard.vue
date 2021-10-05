<script setup>
import ProductBadge from './ProductBadge.vue';
import ProductColorItem from './ProductColorItem.vue';
import {useStore} from 'vuex'
import {computed, ref} from 'vue'

const cupones = [
    "SOLSOL",
    "AWSS",
]

const cupon_string = ref("")

const props = defineProps({
  producto: Object
})

const store = useStore()

function sendToCart(){
    if(cupon_string.value !== ""){
        if(cupones.find(cupon => cupon === cupon_string.value)){
            store.commit("addCarItem", {...props.producto, has_discount: true});
            cupon_string.value = ""
            return
        }else{
            alert('Ese cupón no está disponible')
            return
        }
    }
    store.commit("addCarItem", {...props.producto});
}

function incrementQuantity() {
    if(props.producto.stock > props.producto.quantity)
        props.producto.quantity += 1
}
function decrementQuantity() {
    if(props.producto.quantity > 1)
        props.producto.quantity -= 1
}
</script>

<template>
<div class="flex flex-col">
    <div class="bg-white shadow-md  rounded-3xl p-4">
        <img :src="producto.image_activated"
            alt="Just a flower" class=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl">
        <div class="grid grid-cols-3 gap-1 mt-2">
            <img v-for="image,i in producto.images" :src="image.thumbnail" :key="i" class="w-full object-cover object-center rounded-md" :class="{'opacity-30 ' : (producto.image_activated !== image.image)}" @click="producto.image_activated = image.image"/>
        </div>
        <div class="flex-none lg:flex">
            <div class="flex-auto ml-3 justify-evenly py-2">
                <div class="flex flex-wrap ">
                    <h2 class="flex-auto text-lg font-medium">
                        {{producto.name}}
                    </h2>
                    <product-badge :producto="producto"></product-badge>

                    <div class="w-full flex-none text-xs text-blue-700 font-medium ">
                        {{producto.content}}
                    </div>
                </div>
                <!-- <ul class="flex flex-row justify-center items-center my-3">
                    <product-color-item  v-for="color,i in producto.colors" :key="i" :color="color" :producto="producto"></product-color-item>
                </ul> -->
                <div class="flex py-4  text-sm text-gray-500">
                    <div class="flex-1 inline-flex items-center">
                        <p class="bold flex-auto">
                            <strong>S/ {{new Intl.NumberFormat("es-pe").format(producto.price)}}</strong>
                            - {{producto.stock}} disponibles
                        </p>
                    </div>
                </div>
                <div class=" p-4 pb-2 border-t border-gray-200 w-full"></div>
                <div class=" text-sm font-medium w-full">
                    <input v-model="cupon_string" class="mb-3 w-full" type="text" placeholder="Ingresa el cupón por un descuentazo">
                    <div class="flex flex-wrap ">
                        <div class="flex-auto">
                            <div>
                                <button :disabled="producto.quantity>=producto.stock" @click="incrementQuantity" class="bg-gray-100 rounded-full py-2 px-2 mr-2"><strong>+</strong></button>
                                {{producto.quantity}}
                                <button :disabled="producto.quantity<=1" @click="decrementQuantity" class="bg-gray-100 rounded-full py-2 px-2 ml-2"><strong>-</strong></button>
                            </div>
                        </div>
                        <div class="">
                            <button
                                @click="sendToCart"
                                class="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                type="button" aria-label="like">Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>