import Edit from "../../Edit"
import { ADD } from "../Const/const"
import { EditT } from "../Const/const"


export const AddT= (desc,Done)=>{
    return {type:ADD ,payload: {description:desc,isdone:Done}}
}

export const ed= (desc,ID)=>{
    return {type:EditT ,payload: {desc,ID}}
}