import React from 'react'
import css from './Radio.css'


function Radio({state,onChange}) {
    
    function renderRadio(){  
              
        return state.controls.map((ctrl,index)=>{
            
            return (
                <div key={index} >
                    <label htmlFor={ctrl.name}>{ctrl.label}</label>
                    <input                        
                        type={ctrl.type}
                        name={ctrl.name}
                        value={ctrl.value}
                        checked={state.value === ctrl.value ? true : false}
                        onChange={onChange}
                    />
                </div>
                
            )            
        })
    }
    return (
        <div className={css.Radio}> 
            <label>{state.label}</label> 
                {renderRadio()}                 
            {!state.valid
            ? <span>{state.errorMessage || 'Введите верное значение'}</span>
            : null}                            
        </div>
    )
}

export default Radio
