import { Actiontypes } from "../contants/action-types";

const initialState = {
    products: [
        {
            id: 1,
            title: "Dipesh",
            category: "programmer",
        }
    ]
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case Actiontypes.SET_PRODUCTS:

            return state;

        default:
            
            return state;
    }
}