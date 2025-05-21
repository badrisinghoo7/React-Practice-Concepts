import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionType";


const initalState = [];


export const todoReducer = (state=initalState,action)=>{
    switch (action.type){
        case ADD_TODO:
            const data=action?.payload;
            console.log("data",action)
            return [...state,{...data}];
        case DELETE_TODO:
            const Del_ID = action?.payload
            return state.filter((item)=> item.id!=Del_ID);
        case UPDATE_TODO:
            const Upd_ID = action?.payload
            return state.map((item)=> item.id===Upd_ID ? {...item,complete:!item.complete}: item)

        default: 
            return state;
    }

}


