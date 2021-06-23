import { ActionTypes } from "../contants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectProducts = (products) => {
    return {
        type: ActionTypes.SELECT_PRODUCT,
        payload: products,
    };
};