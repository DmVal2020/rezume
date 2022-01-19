import React, {useState, useEffect} from 'react'
import {Helmet} from "react-helmet"
import {useParams, Link} from 'react-router-dom'
import Block from '../Block/Block'
import Tes4 from '../Block/Items/Tes/Tes4'
import Button from '../../components/UI/Button/Button'
import css from './ResumeEditing.css'


function ResumeEditing() {
    let {hash} = useParams()
    const [res, setRes] = useState('')
    const [data, setData] = useState('')
    const [editing, setEditing] = useState(false)
    if(res===''){
      submitHandler()
    }    
    function submitHandler(){
        fetch("http://localhost:3500", {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({edit:hash})
    })
      .then(response => response.text())
      .then(response => {
        setRes(response);
      })
    }
    function editingHandler(){
      const dataStr = JSON.stringify(data)
      fetch("http://localhost:3500", {
    method: 'POST',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({editing:hash, resume:dataStr})
  })
    .then(response => response.text())
    .then(response => {
      setEditing(response);
    })
  }
    useEffect(()=>{ 
          if(res!==''){
            const response = JSON.parse(res)
            if (response.result){
                setData(JSON.parse(response.resume))
            }
          }               
    },[res])
    
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
  function setBlock(id,formControls,isFormValid){
    let blocks = data.blocks.map(block=>block.id===id
          ?{...block,formControls:formControls,isFormValid:isFormValid}
          :block)
    setData({...data,blocks})  
  }
  function addSubBlock(id){
            let block = data.blocks.filter(block=>block.id===id)[0]
            let example = Object.keys(block.example).reduce((a,b)=>{a[b+block.count]={...block.example[b],id:block.count}
                                                                return a},{})
            const added = block.formControls.added
            let formControls = {...block.formControls}
            delete formControls.added
            formControls = {...formControls,...example,added}
            block = {...block,formControls}
            
            const blocks = data.blocks.map(bl=>bl.id===id
                                                ?{...block,count:block.count+1,isFormValid:false}
                                                :bl)

            setData({...data,blocks}) 
  }
  function removeSubBlock(id,num){
            let block = data.blocks.filter(block=>block.id===id)[0]
            let removes =Object.keys(block.formControls).filter(key=>key.indexOf(num)!==-1)
            removes.forEach(remove=>delete block.formControls[remove])        
            const blocks = data.blocks.map(bl=>bl.id===id
                                                ?{...block,isFormValid:true}
                                                :bl)

            setData({...data,blocks})
  }
    
    return (
      <div className={css.ResumeEditing}>
        <Helmet>
          <title>Твое резюме | Редактирование резюме</title>
        </Helmet>
        {!editing
        ?<div className={css.ResumeEditingWrapper}>
          
          <h1>Редактирование резюме</h1>

          {data!==''
          ?renderEdit()
          :'пусто'
          }
          <div style={{marginBottom:'15px'}}>
            {data!==''
              ?<Button
                    type='success' 
                    disabled={data.blocks.some(block=>!block.isFormValid)}
                    onClick={editingHandler}
                >
                    Сохранить
                </Button>
              :null
            }
              
                  <Link to={'/'}>
                      <Button type='primary' disabled={false}>
                          На главную
                      </Button>
                  </Link>
          </div>

        </div>
        :<div className={css.ResumeEditingWrapper}>

        <h1>Ваше резюме успешно отредактировано</h1>
        <p>ссылка на ваше резюме</p>
        <a href={`/${JSON.parse(res).url}`}>{`/${JSON.parse(res).url}`}</a>
        <p>ссылка для редактирования,<span style={{color:'red'}}> будьте внимательны - не передавайте эту ссылку третьим лицам</span> </p>
        <a href={`/edit/${JSON.parse(res).edit}`}>{`/edit/${JSON.parse(res).edit}`}</a>

        <div style={{margin:'15px 0'}}>            
                <Link to={'/'}>
                    <Button type='primary' disabled={false}>
                        На главную
                    </Button>
                </Link>
        </div>

      </div>

        }
        
      </div>
    )
}

export default ResumeEditing
