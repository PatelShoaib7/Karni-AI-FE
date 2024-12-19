import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { EcommerceRducer } from "./Reducers";
import {thunk} from "redux-thunk";


const combineAllReducers = combineReducers({
    EcommerceRducer: EcommerceRducer,
});

export const store = legacy_createStore(
    combineAllReducers,
    applyMiddleware(thunk)
);
