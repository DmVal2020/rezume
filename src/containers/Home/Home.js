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
                    <div style={{marginTop:'20px'}}>
                        <Button type='primary' style={{minWidth: '240px'}}>
                            Создать резюме
                        </Button>
                    </div>    
                </Link>
                <Link to={'/read_rezume'}>
                    <div style={{marginTop:'20px'}}>
                        <Button type='primary' style={{minWidth: '240px'}}>
                            Просмотр резюме
                        </Button>
                    </div>    
                </Link>
                <Link to={'/edit_rezume'} >
                    <div style={{marginTop:'20px'}}>
                        <Button type='primary' style={{minWidth: '240px'}}>
                            Редактирование резюме
                        </Button>
                    </div>                    
                </Link>
            </div>            
        </div>
    )
}

export default Home
