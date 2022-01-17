import React, { useState } from 'react'
import { Link } from "react-router-dom";
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import Resume from '../PrewResume/ResumePdf/index'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import css from './Finding.css'

//Закоментирован вариант без перехода на страницу показа загрузки, тоесть ссілка на загрузку при наличии резюме будет показана тутже
function Finding() {
    const [inp, setInp] = useState('')
    // const [res, setRes] = useState('')
    // let data
    // function submitHandler(){
    //     fetch("http://localhost:3500", {
    //   method: 'POST',
    //   header: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify({url:inp})
    // })
    //   .then(response => response.text())
    //   .then(response => {
    //     setRes(response);
    //   })
    // }
    // if(res!==''){
    //     const response = JSON.parse(res)
    //     if (response.result){
    //         data = JSON.parse(response.resume)
    //     }
    // }
    // console.log(data)
    return (
        <div className={css.Finding}>
            <div className={css.FindingWrapper}>
                
                <h1>Просмотр резюме</h1>
                <Input
                    type = 'text'
                    label = 'введите в поле ввода хештег вашего резюме'
                    value = {inp}
                    valid = {true}
                    onChange = {event=>setInp(event.target.value)}                
                />
                {/* {
                    data!==undefined
                    ?<div style={{marginBottom:'15px'}} className={css.PDFDownloadLink}>
                            <PDFDownloadLink document={<Resume data={data}/> } fileName="example.pdf">
                                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download pdf!')}
                            </PDFDownloadLink>
                    </div>
                    :<div style={{color:'red',fontSize:'20px',marginBottom:'15px'}}>
                        по вашему запросу ни одного резюме не найдено
                        попробуйте другой хештег
                    </div>
                } */}
                <Link to={`/read_rezume/${inp}`}>
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
            
            
            <div>
                
            </div>
                
        </div>
    )
}

export default Finding
