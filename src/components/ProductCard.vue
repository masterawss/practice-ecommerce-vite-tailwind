<script setup>
import ProductBadge from './ProductBadge.vue';
import ProductColorItem from './ProductColorItem.vue';
import {useStore} from 'vuex'
import {computed} from 'vue'
const props = defineProps({
  producto: Object
})

const store = useStore()

function sendToCart(){
    store.commit("addCarItem", {...props.producto});
}

// const emit = defineEmits(['sendToCart'])

// emit('update', 1)
// const sendToCart = () => {
//     // console.log(props.producto);
//     emit('sendToCart', props.producto)
// }
</script>

<template>
<div class="w-80 flex justify-center items-center">
    <div class="w-full p-4">
        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
            <div class="prod-title">
                <p class="text-2xl uppercase text-gray-900 font-bold">
                    {{producto.name}}
                </p>
                <p class="uppercase text-sm text-gray-400">
                    {{producto.content}}
                </p>
                <product-badge :producto="producto"></product-badge>
                
            </div>
            <div class="prod-img my-4">
                <div class="grid grid-cols-3 gap-1">
                    <img v-for="image,i in producto.images" :src="image.tumbnail" :key="i" class="w-full object-cover object-center " :class="{'opacity-30 ' : (producto.image_activated !== image.image)}" @click="producto.image_activated = image.image"/>
                </div>
                <img :src="producto.image_activated" class="w-full mt-1 object-cover object-center"/>
            </div>
            <div class="prod-info grid gap-10">
                <div>
                    <ul class="flex flex-row justify-center items-center">
                        <product-color-item  v-for="color,i in producto.colors" :key="i" :color="color" :producto="producto"></product-color-item>
                    </ul>
                </div>
                <div class=" text-gray-900">
                    <p class="font-bold text-xl text-center">
                        S/ {{new Intl.NumberFormat("es-pe").format(producto.price)}}
                    </p>
                    <button @click="sendToCart" class="px-6 py-2 mt-4 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>