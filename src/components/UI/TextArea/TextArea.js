import React from 'react'
import css from './TextArea.css'

function TextArea({state,onChange}) {
    return (
        <div className={css.TextArea}>
            <label >{state.label}</label>
             <textarea 
                value={state.value}
                placeholder={state.placeholder}
                onChange={onChange}
            />   
        </div>
    )
}

export default TextArea
