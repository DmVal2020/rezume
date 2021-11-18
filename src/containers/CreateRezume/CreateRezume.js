import React from 'react'
import { connect } from 'react-redux';
import {showAll, setBlock, addSubBlock, removeSubBlock} from '../../actions/index'
import css from './CreateRezume.css'
import Button from '../../components/UI/Button/Button'
import Block from '../Block/Block'
import Tes4 from '../Block/Items/Tes/Tes4'



function CreateRezume({data, setBlock, addSubBlock, removeSubBlock}) {
    return (
        <div className={css.CreateRezume}>
            <div className={css.CreateRezumeWrapper}>
                <h1>Страница создания резюме</h1>
                {data.blocks.map((block,index)=>{
                    return (
                        <Block key={index}>
                            <Tes4 
                                state={block} 
                                setStateHandler={setBlock} 
                                onClick={addSubBlock}
                                remove={removeSubBlock}
                            />
                        </Block>
                        
                    )
                })}
                
                
                <div>
                    <Button type='primary' disabled={data.blocks.some(block=>!block.isFormValid)}>
                        Предпросмотр
                    </Button>
                    <Button type='success' disabled={data.blocks.some(block=>!block.isFormValid)}>
                        Сохранить
                    </Button>
                </div>                
            </div>            
        </div>
    )
}
function mapStateToProps(data){
	return {...data}
}
function mapDispatchToProps(dispatch){
	return {
		showAll:()=>dispatch(showAll()),
		setBlock:(id,formControls,isFormValid)=>dispatch(setBlock(id,formControls,isFormValid)),
        addSubBlock:(id)=>dispatch(addSubBlock(id)),
        removeSubBlock:(id,num)=>dispatch(removeSubBlock(id,num)),
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(CreateRezume)
