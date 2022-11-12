import { legacy_createStore, combineReducers,applyMiddleware,compose } from "redux";
import thunk from "redux-thunk"
import { authReducer } from "./authRedux/authReducer";
import { loginReducer } from "./loginRedux/login.reducer";
import { productCrudReducer } from "./productsCrudRedux/products.reducer";
import { productGetReducer } from "./productsGetRedux/productsGet.reducer";

const rootReducer = combineReducers({
    login : loginReducer,
    productCrud : productCrudReducer,
    auth:authReducer,
    productGet : productGetReducer
})

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, createComposer(applyMiddleware(thunk)))