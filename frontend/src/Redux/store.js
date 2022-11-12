import { legacy_createStore, combineReducers,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk"
import { loginReducer } from "./loginRedux/login.reducer";
import { productReducer } from "./productsRedux/products.reducer";

const rootReducer = combineReducers({
    login : loginReducer,
    product : productReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)))