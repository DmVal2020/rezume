import React from 'react'
import classes from './Select.css'

const Select = ({state,onChange}) => {
  const htmlFor = `${state.label}-${Math.random()}`
  const cls = [classes.Select]
  
  if (!state.valid) {
    cls.push(classes.invalid)
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{state.label}</label>
      <select
        id={htmlFor}
        value={state.value}
        onChange={onChange}
      >
        { state.options.map((option, index) => {
          return (
            <option
              value={option.value}
              key={option.value + index}
              disabled={option.disabled}
            >
              {option.text}
            </option>
          )
        }) }
      </select>
      {!state.valid
            ? <span>{state.errorMessage || 'Введите верное значение'}</span>
            : null}  
    </div>
  )
}

export default Select