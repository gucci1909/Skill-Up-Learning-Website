import {legacy_createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import { productReducer } from "./prod.reducer";
const rootReducer=combineReducers({
    product:productReducer,
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))