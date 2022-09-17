//This is root reducer , here we can combine multiple reducers under a main reducer.
import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import searchReducer from "./searchReducer"

const rootReducers = combineReducers({

    searchlist: searchReducer,
    data: dataReducer
});
export default rootReducers;