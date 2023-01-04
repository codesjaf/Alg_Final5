import {
    FETCH_SEARCH_BEGIN,
    FETCH_SEARCH_FAILURE,
    FETCH_SEARCH_SUCCESS
} from "./coinAction";

const initialState = {
    items: null,
    loading: false,
    error: null
};
export default function searchReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_SEARCH_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                items:action.coins
            };

        case FETCH_SEARCH_FAILURE:
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