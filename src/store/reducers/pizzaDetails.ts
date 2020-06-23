import { ADD_PIZZA_TYPE, ADD_PIZZA_TOPPINGS } from './../actions/actionTypes';
import { ItemInfo } from './../../models/detail.interface';
import { ADD_PIZZA_SIZE } from "../actions/actionTypes"

const initialState = {
    Size: {
        price: 0,
        display: "",
        isSelected: false,
        index: -1
    },
    Type: {
        price: 0,
        display: "",
        isSelected: false,
        index: -1
    },
    Toppings: [{
        price: 0,
        display: "",
        isSelected: false,
        index: -1
    }]

}

export  const PizzaSizeReducer = (state: ItemInfo  = initialState.Size, action: any): ItemInfo => {
    switch (action.type) {
        case ADD_PIZZA_SIZE:
            return {...action.payload} ;           
        default:
          return state;
    }
}
export  const PizzaTypeReducer = (state: ItemInfo  = initialState.Type, action: any): ItemInfo => {
    switch (action.type) {
        case ADD_PIZZA_TYPE:
            return {...action.payload} ;           
        default:
            return state;
    }
}

export  const PizzaToppingsReducer = (state: ItemInfo[]  = initialState.Toppings, action: any): ItemInfo[] => {
    switch (action.type) {
        case ADD_PIZZA_TOPPINGS:
            return [...action.payload];           
        default:
            return state;
    }
}






