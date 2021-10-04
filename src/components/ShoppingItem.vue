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
<li class="border-gray-400 flex flex-row mb-2">
    <div class="select-none cursor-pointer border-2 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:border-white">
        <div class="flex flex-col rounded-md w-10 h-10 bg-gray-100 justify-center items-center mr-4">

        <img class="w-full object-cover object-center " :src="item.images[0].tumbnail" alt="">
        </div>
        <div class="flex-1 pl-1 mr-16">
            <div class="font-medium">{{item.name}}</div>
            <span class="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none rounded-full" :class="`text-${item.color_selected}-100 bg-${item.color_selected}-400`"></span>
            <div class="text-gray-600 text-sm">S/ {{new Intl.NumberFormat("es-pe").format(item.price)}}</div>
        </div>
        <div @click="deleteItem">
            ✖️
        </div>
    </div>
</li>
</template>