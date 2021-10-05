<script setup>
import {useStore} from 'vuex'
const props = defineProps({
    item: Object
})

const store = useStore()

const deleteItem = () => {
    store.commit("deleteCarItem", props.item)
}
</script>
<template>
<li class=" flex flex-row mb-2">
    <div class="select-none cursor-pointer rounded-md flex flex-1 items-center p-4 ">
        <div class="flex flex-col rounded-md w-10 h-10 bg-gray-100 justify-center items-center mr-4">
            <img class="w-full object-cover object-center " :src="item.images[0].thumbnail" alt="">
        </div>
        <div class="flex-1 pl-1 mr-16">
            <div class="font-medium">{{item.name}} {{item.quantity >1 ? `(${item.quantity})` : ''}}</div>
            <div class="text-red-600 text-sm" v-if="item.has_discount">Con descuento (50%)</div>
            <div class="text-gray-600 text-sm">S/ {{new Intl.NumberFormat("es-pe").format(item.price * item.quantity * (item.has_discount ? .50 : 1))}}</div>
        </div>
        <div class="" @click="deleteItem">
            ✖️
        </div>
    </div>
</li>
</template>