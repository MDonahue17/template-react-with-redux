import { combineReducers } from 'redux';

const searchReducer = (state, action) => {
    switch("FETCH_SEARCH"){
        case "FETCH_SEARCH":
            return {
                ...state, 
                data: action.payload
            }
        default:
            return state;
    }
}

export default combineReducers({
    searchResult: searchReducer
}); 