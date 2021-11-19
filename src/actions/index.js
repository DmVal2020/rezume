import { SHOW_ALL, SET_BLOCK, ADD_SUB_BLOCK, REMOVE_SUB_BLOCK, TOGGLE_PREW_SHOW} from "./actions"

export const showAll =() => {
    return {
        type:SHOW_ALL,    
    }
}
export const setBlock =(id,formControls,isFormValid) => {
    return {
        type:SET_BLOCK, 
        id, 
        formControls,
        isFormValid  
    }
}
export const addSubBlock =(id) => {
    return {
        type:ADD_SUB_BLOCK, 
        id, 
    }
}
export const removeSubBlock =(id,num) => {
    return {
        type:REMOVE_SUB_BLOCK, 
        id,
        num, 
    }
}
export const togglePrewShow =() => {
    return {
        type:TOGGLE_PREW_SHOW, 
    }
}





// export const show = (value,field) => {
//     return {
//         type:SHOW,
//         value,
//         field   
//     }
// }

