import React from 'react'
import {Helmet} from "react-helmet"
import { Link } from "react-router-dom";
import css from './Home.css'
import Button from '../../components/UI/Button/Button'

function Home() {
    return (
        <div className={css.Home}>  
            <Helmet>
                {/* <meta charSet="utf-8" /> */}
                <title>Твое резюме | Главная страница</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>         
            <div className={css.HomeWrapper}>
                <h1>Конструктор создания резюме</h1>
                <div className={css.HomeText}>
                    <div>
                        <i className={'fa fa-check '}>
                            <span>
                                здесь вы можете создать свое резюме
                            </span>
                        </i>                       
                    </div>
                    <div>
                        <i className={'fa fa-check '}>
                            <span>
                                после создания вы получите ссылку, по которой вы или потенциальный работодатель сможете просмотреть резюме
                            </span>
                        </i>                       
                    </div>
                    <div>
                        <i className={'fa fa-check '}>
                            <span>
                                если вам надо что-нибудь поменять, вы всегда сможете это сделать по ссылке для редактирования
                            </span>
                        </i>                       
                    </div>
                </div>
                
                
                <Link to={'/create'}>
                    <div style={{marginTop:'20px'}}>
                        <Button type='primary' style={{minWidth: '240px', background:'coral', cursor:'pointer', color:"rgb(17, 17, 16)"}}>
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
