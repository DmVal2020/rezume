import React from 'react'
import { Link } from "react-router-dom";
import css from './Home.css'
import Button from '../../components/UI/Button/Button'

function Home() {
    return (
        <div className={css.Home}>           
            <div className={css.HomeWrapper}>
                <h1>Конструктор создания резюме</h1>
                <p>здесь вы можете создать свое резюме</p>
                <p>после создания вы получите ссылку </p>
                <p>по ссылке вы или потенциальный работодатель сможете просмотреть резюме</p>
                <p>если вам надо что-нибудь поменять</p>
                <p>вы всегда сможете это сделать по ссылке для редактирования</p>
                <Link to={'/create'}>
                    <div style={{marginTop:'20px'}}>
                        <Button type='primary' style={{minWidth: '240px'}}>
                            Создать резюме
                        </Button>
                    </div>    
                </Link>
                {/* <Link to={'/read_rezume'}>
                    <div style={{marginTop:'20px'}}>
                        <Button type='primary' style={{minWidth: '240px'}}>
                            Просмотр резюме
                        </Button>
                    </div>    
                </Link> */}
                {/* <Link to={'/edit_rezume'} >
                    <div style={{marginTop:'20px'}}>
                        <Button type='primary' style={{minWidth: '240px'}}>
                            Редактирование резюме
                        </Button>
                    </div>                    
                </Link> */}
            </div>            
        </div>
    )
}

export default Home
