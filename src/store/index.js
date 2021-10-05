import {createStore} from 'vuex'
import productos_json from '../assets/productos.json'

export default createStore({
    state: {
        productos: productos_json,
        cart: []
    },
    mutations: {
        addCarItem(state, item){
            console.log(item);
            state.cart.push({...item, cart_id: '_' + Math.random().toString(36).substr(2, 9) })
        },
        deleteCarItem(state, item){
            state.cart = state.cart.filter(cartItem => cartItem.cart_id !== item.cart_id)
        }
    }
})