<script setup>
import {computed} from 'vue'

const props = defineProps({
    color: String,
    producto: Object
})
let activeColor = computed(() => {
    return props.producto.color_selected == props.color ? 'border-'+props.producto.color_selected+'-500' : ''
})

function setColor(){
    props.producto.color_selected = props.color
}
</script>
<template>
<li class="mr-4 last:mr-0">
    <span class="block p-1 border-2  rounded-full transition ease-in duration-300" :class="activeColor" @click="setColor">
        <button class="block w-6 h-6 rounded-full" :class="`bg-${color}-600 `">
        </button>
    </span>
</li>
</template>