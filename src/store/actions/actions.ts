import { DETAIL_LOADING_ACTION, DETAIL_ERROR_ACTION, DETAIL_SET_ACTION, DETAIL_CLEAR_ACTION } from './actionTypes';
import axios from "axios";
import {

  ADD_PIZZA_SIZE,
  ADD_PIZZA_TYPE,
  ADD_PIZZA_TOPPINGS,
  RESET_PIZZA_ORDER
} from "./actionTypes";
import { ItemInfo } from "../../models/detail.interface";
import { Dispatch } from "redux";
// import { Dispatch } from 'react';

const serverUrl: string = "http://localhost:4000/";

export const pizzaSize = (data: ItemInfo) => ({
  type: ADD_PIZZA_SIZE,
  payload: data
})
export const pizzaType = (data: ItemInfo) => ({
  type: ADD_PIZZA_TYPE,
  payload: data
})
export const pizzaToppings = (data: ItemInfo[]) => ({
  type: ADD_PIZZA_TOPPINGS,
  payload: data
})
export const newOrder = () => ({
  type: RESET_PIZZA_ORDER,
  payload: null
})

export const createorUpdateOrder = (orderData: any) => async (
  dispatch: Dispatch
) => {
  dispatch({
    type: DETAIL_LOADING_ACTION
  });

  try {
    const res = await axios.post(serverUrl + "createOrder", orderData);
    dispatch({
      type: DETAIL_SET_ACTION, id: res.data.id
    });
  } catch (error) {
    dispatch({
      type: DETAIL_ERROR_ACTION
    });
    setTimeout(() => {dispatch({
      type: DETAIL_CLEAR_ACTION
    })}, 1000);
  }
};








