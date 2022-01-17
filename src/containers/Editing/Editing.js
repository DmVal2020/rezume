import React, {useState} from 'react'
import { Link } from "react-router-dom";
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import css from './Editing.css'

function Editing() {
    const [inp, setInp] = useState('')
    return (
        <div className={css.Editing}>
            <div className={css.EditingWrapper}>
                
                <h1>Редактирование резюме</h1>
                <Input
                    type = 'text'
                    label = 'введите в поле ввода хештег для редактирования резюме'
                    value = {inp}
                    valid = {true}
                    onChange = {event=>setInp(event.target.value)}                
                />

                <Link to={`/edit_rezume/${inp}`}>
                    <Button
                        type='success' 
                        // onClick={submitHandler}
                    >
                        Загрузить
                    </Button>
                </Link>
                <Link to={'/'}>
                    <Button type='primary' disabled={false}>
                        На главную
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Editing
