import React from 'react'
import { Link } from "react-router-dom";
import css from './Home.css'
import Button from '../../components/UI/Button/Button'

function Home() {
    return (
        <div className={css.Home}>           
            <div className={css.HomeWrapper}>
                <h1>Домашняя страница</h1>
                <Link to={'/create_rezume'}>
                    <Button type='primary'>
                        Создать резюме
                    </Button>
                </Link>
            </div>            
        </div>
    )
}

export default Home
