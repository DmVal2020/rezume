import React from 'react'
import css from './TextArea.css'

function TextArea({state,onChange}) {
    return (
        <div className={css.TextArea}>
            <label >
                {state.label}
                <br/>
                <span style={{'fontSize':'10px'}}>{!state.valid 
                        ?'(*обязательное поле)'
                        :null
                        }
                </span>
            </label>
             <textarea 
                value={state.value}
                placeholder={state.placeholder}
                spellCheck= {false}
                onChange={onChange}

            />   
        </div>
    )
}

export default TextArea
