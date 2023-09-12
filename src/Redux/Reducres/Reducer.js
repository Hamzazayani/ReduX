import { ADD } from "../Const/const"
import { EditT } from "../Const/const"


const initialstate={

data:  [
        {id:0,
    description:"cyrine",
isdone:false
},
{id:1,
    description:"Hamza",
isdone:true
},

{id:2,
    description:"dawser",
isdone:true
}

]}

export const TodoReducers =(state=initialstate,action)=>{

    switch(action.type) {
        case ADD:
            return  {...state,data: [...state.data, {...action.payload,id:state.data.length}]}
        case EditT:
            return {...state,data:state.data.map((Task)=> Task.id == action.payload.ID ? {description:action.payload.desc,id:action.payload.ID,isdone:true } : Task)}

default:
    return state
}
}