import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

//@reducer
import rootReducer from "./reducers";

//@initial state
const initialState={};
//@middleware
const middleware=[thunk];
//@create store
const store=createStore(rootReducer,initialState,composeWithDevTools(
    applyMiddleware(...middleware)
));


export default store;