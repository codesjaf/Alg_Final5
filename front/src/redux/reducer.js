import {
  FETCH_COINS_BEGIN,
  FETCH_COINS_FAILURE,
  FETCH_COINS_SUCCESS,
} from "./coinAction";

const initialState = {
    items: null,
    loading: false,
    error: null
};
export default function productReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_COINS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_COINS_FAILURE:
            return {
                ...state,
                loading: false,
                items:action.products
            };

        case FETCH_COINS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };

        default:
            return state;
    }
}