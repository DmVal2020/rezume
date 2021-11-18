import React from 'react'
import css from './Checkbox.css'


function Checkbox({state,onChange}) {
    
    function renderCheckbox(){  
              
        return state.controls.map((ctrl,index)=>{
            
            return (
                <div key={index} >
                    <label htmlFor={ctrl.name}>{ctrl.label}</label>
                    <input                        
                        type={ctrl.type}
                        name={ctrl.name}
                        value={ctrl.value}
                        checked={ctrl.checked}
                        onChange={(event)=>onChange(event,ctrl.id)}
                    />
                </div>
                
            )            
        })
    }
    return (
        <div className={css.Checkbox}> 
            <label>{state.label}</label> 
                {renderCheckbox()}                 
            {!state.valid
            ? <span>{state.errorMessage || 'Введите верное значение'}</span>
            : null}                            
        </div>
    )
}

export default Checkbox
