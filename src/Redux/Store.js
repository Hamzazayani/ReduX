import { createStore } from "redux";
import { TodoReducers } from "./Reducres/Reducer";

export const store=createStore( TodoReducers    ,window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION())