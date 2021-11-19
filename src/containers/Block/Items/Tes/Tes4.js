import React from 'react'
import Button from '../../../../components/UI/Button/Button'
import Input from '../../../../components/UI/Input/Input'
import Radio from '../../../../components/UI/Radio/Radio'
import Select from '../../../../components/UI/Select/Select'
import TextArea from '../../../../components/UI/TextArea/TextArea'
import Checkbox from '../../../../components/UI/Checkbox/Checkbox'
import is from 'is_js'
import classes from './Tes4.css'


function Tes4({state,setStateHandler,onClick,remove}) {
    
    // const saveHandler = () => {
    //   // setState({...state,isEdit:true})
    // }
  
    // const editHandler = () => {
    //   // setState({...state,isEdit:false})
    // }
  
    const submitHandler = event => {
      event.preventDefault()
    }
  
    function validateControl(value, validation) {
      if (!validation) {
        return true
      }
  
      let isValid = true
  
      if (validation.required) {
        isValid = value.trim() !== '' && isValid
      }
  
      if (validation.email) {
        isValid = is.email(value) && isValid
      }
  
      if (validation.minLength) {
        isValid = value.length >= validation.minLength && isValid
      }

      if (validation.maxLength) {
        isValid = value.length <= validation.maxLength && isValid
      }
  
      return isValid
    }
  
    const onChangeHandler = (event, controlName) => {
      const formControls = { ...state.formControls }
      
      const control = { ...formControls[controlName] }
  
      control.value = event.target.value
      control.touched = true
      control.valid = validateControl(control.value, control.validation)
  
      formControls[controlName] = control
  
      let isFormValid = true
  
      Object.keys(formControls).forEach(name => {
        isFormValid = formControls[name].valid && isFormValid
      })
  
      setStateHandler(state.id,formControls,isFormValid)
    }
    function onChangeCheckedHandler(event,id, controlName){
      let formControls = { ...state.formControls }
      
      let control = { ...formControls[controlName] }
      const controls = control.controls.map(ctrl=>ctrl.id===id?{...ctrl,checked:!ctrl.checked}:{...ctrl})
      const text = controls.reduce((a,b)=>b.checked?a + ', ' + b.value:a,'')
      
      const value = text
      control={...control,controls,value}
      let isFormValid = true
      formControls[controlName] = control
      setStateHandler(state.id,formControls,isFormValid)

    }
  
    function renderInputs() {
      return Object.keys(state.formControls).map((controlName, index) => {
        const control = state.formControls[controlName]
        if(control.control==='input'){
            return (
                      <Input
                        key={controlName + index}
                        type={control.type}
                        value={control.value}
                        valid={control.valid}
                        touched={control.touched}
                        label={control.label}
                        shouldValidate={!!control.validation}
                        errorMessage={control.errorMessage}
                        onChange={event => onChangeHandler(event, controlName)}
                      />
                    )
        }else if(control.control==='radio'){
          return (
                      <Radio
                        key={controlName + index}
                        state={control}
                        onChange={event => onChangeHandler(event, controlName)}             
                      />
          )
        }else if(control.control==='checkbox'){
          
          return (
                      <Checkbox
                        key={controlName + index}
                        state={control}
                        onChange={(event,id) => onChangeCheckedHandler(event,id, controlName)}             
                      />
          )
        }else if(control.control==='select'){
          return (
                      <Select
                        key={controlName + index}
                        state={control}
                        onChange={event => onChangeHandler(event, controlName)}             
                      />
          )
        }else if(control.control==='textArea'){
          return (
                      <TextArea
                        key={controlName + index}
                        state={control}
                        onChange={event => onChangeHandler(event, controlName)}             
                      />
          )
        }else if(control.control==='button'){
          return (
                      <Button
                        key={controlName + index}
                        type={control.type}
                        disabled={control.value==='добавить' && !state.isFormValid? true :false}
                        onClick={control.value==='добавить'
                                  ?()=>onClick(state.id)
                                  :()=>remove(state.id,control.id)}             
                      >
                        {control.value}
                      </Button>
          )
        }else if(control.control==='hr'){
          return (
                      <hr key={controlName + index}/>
          )
        }else{return null}
        
      })
    
    }
    
    return (
        <div>
            <div>
          <h1>{state.title}</h1>

          <form onSubmit={submitHandler} className={classes.AuthForm}>

            { renderInputs() }
{/* Кнопки возможны при реализации другой логики:
    данные инпутов онлайн записываются в локальный useState
    по кнопке подтвердить данные переносятся в редакс, по
    кнопке редактировать открывается возможность отредактировать
    ранее внесенные данные */}
            {/* <Button
              type="success"
              onClick={saveHandler}
              disabled={!state.isFormValid || state.isEdit}
              
            >
              Подтвердить
            </Button>

            <Button
              type="primary"
              onClick={editHandler}
              disabled={!state.isEdit}
            >
              Редактировать
            </Button> */}
          </form>
        </div>

            
        </div>
    )
}

export default Tes4

