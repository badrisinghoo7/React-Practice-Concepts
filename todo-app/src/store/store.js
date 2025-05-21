import { combineReducers, legacy_createStore } from "redux"

import { todoReducer } from "./todoReducer"

const rootReducer = combineReducers({todoReducer:todoReducer})

export const store =legacy_createStore(
    rootReducer
)

// console.log("store",store);