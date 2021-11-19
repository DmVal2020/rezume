import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {showAll, setBlock, addSubBlock, removeSubBlock, togglePrewShow} from '../../actions/index'
import css from './CreateRezume.css'
import Button from '../../components/UI/Button/Button'
import Block from '../Block/Block'
import Tes4 from '../Block/Items/Tes/Tes4'
import PrewResume from '../PrewResume/PrewResume';



function CreateRezume({data, setBlock, addSubBlock, removeSubBlock, togglePrewShow}) {
    function renderEdit(){
        return (
            data.blocks.map((block,index)=>{
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
            })
        )
    }
    function prewShow(){
        return (
            <Block>
                <PrewResume data={data} />
            </Block> 
        ) 
    }
    
    return (
        <div className={css.CreateRezume}>
            <div className={css.CreateRezumeWrapper}>
                
                <h1>Страница создания резюме</h1>
                {data.showPrew
                    ?prewShow()
                    :renderEdit()
                }            
                
                <div>
                    {data.showPrew
                        ?<Button type='primary' disabled={data.blocks.some(block=>!block.isFormValid)} onClick={togglePrewShow}>
                            Редактировать
                        </Button>
                        :<Button type='primary' disabled={data.blocks.some(block=>!block.isFormValid)} onClick={togglePrewShow}>
                            Предпросмотр
                        </Button>
                    }
                    
                    <Button
                        type='success' 
                        disabled={data.blocks.some(block=>!block.isFormValid)}
                        onClick={()=>console.log(JSON.stringify(data))}
                    >
                        Сохранить
                    </Button>
                    <Link to={'/'}>
                        <Button type='primary' disabled={false}>
                            На главную
                        </Button>
                    </Link>
                </div>                
            </div>
            <div>
                
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
        togglePrewShow:()=>dispatch(togglePrewShow()),
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(CreateRezume)
