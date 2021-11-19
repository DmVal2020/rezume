import { SHOW_ALL, SET_BLOCK, ADD_SUB_BLOCK, REMOVE_SUB_BLOCK, TOGGLE_PREW_SHOW} from '../actions/actions';
import initialState from './initialState';

export default function dataReduser(state=initialState,action){
    switch(action.type) {
        case SHOW_ALL: {
            return {
               ...state
            }
        }
        case SET_BLOCK: {
            let blocks = state.blocks.map(block=>block.id===action.id
                                                ?{...block,formControls:action.formControls,isFormValid:action.isFormValid}
                                                :block)
            return {
               ...state,
               blocks
            }
        }
        case ADD_SUB_BLOCK: {
            
            let block = state.blocks.filter(block=>block.id===action.id)[0]
            let example = Object.keys(block.example).reduce((a,b)=>{a[b+block.count]={...block.example[b],id:block.count}
                                                                return a},{})
            const added = block.formControls.added
            let formControls = {...block.formControls}
            delete formControls.added
            formControls = {...formControls,...example,added}
            block = {...block,formControls}
            
            const blocks = state.blocks.map(bl=>bl.id===action.id
                                                ?{...block,count:block.count+1,isFormValid:false}
                                                :bl)

            return {
               ...state,
               blocks
            }
        }
        case REMOVE_SUB_BLOCK: {
            
            let block = state.blocks.filter(block=>block.id===action.id)[0]
            let removes =Object.keys(block.formControls).filter(key=>key.indexOf(action.num)!==-1)
            removes.forEach(remove=>delete block.formControls[remove])        
            const blocks = state.blocks.map(bl=>bl.id===action.id
                                                ?{...block,isFormValid:true}
                                                :bl)

            return {
               ...state,
               blocks
            }
        }
        case TOGGLE_PREW_SHOW: {            
            return {
               ...state,
               showPrew:!state.showPrew               
            }
        }
                             
        default: return state;
    }
}