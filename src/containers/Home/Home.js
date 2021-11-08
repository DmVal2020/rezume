import React from 'react'
import css from './Home.css'
import Button from '../../components/UI/Button/Button'

function Home() {
    return (
        <div className={css.Home}>           
            <div className={css.HomeWrapper}>
                <h1>Домашняя страница</h1>
                <Button type='primary'>
                    Создать резюме
                </Button>
            </div>            
        </div>
    )
}

export default Home
