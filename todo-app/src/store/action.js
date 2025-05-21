import { ADD_TODO, DELETE_TODO, UPDATE_TODO, } from "./actionType"

export const AddTodo = (payload) => {
    return { type: ADD_TODO, payload }
}

export const DeleteTodo = (payload) => {
    return { type: DELETE_TODO, payload }
}


export const UpdateTodo = (payload) => {
    return { type: UPDATE_TODO, payload }
}



