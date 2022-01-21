import React, {useState} from 'react'
import {Helmet} from "react-helmet"
import {useParams, Link} from 'react-router-dom'
import Button from '../../components/UI/Button/Button'
import { PDFDownloadLink } from '@react-pdf/renderer';
import Resume from '../PrewResume/ResumePdf/index'
import css from './ResumeReading.css'
import env from '../../env.json'

function ResumeReading() {
    let {hash} = useParams()
    const [res, setRes] = useState('')
    let data
    submitHandler()
    function submitHandler(){
        fetch(env.urlBackend, {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({url:hash})
    })
      .then(response => response.text())
      .then(response => {
        setRes(response);
      })
    }
    if(res!==''){
        const response = JSON.parse(res)
        if (response.result){
            data = JSON.parse(response.resume)
        }
    }
    // console.log(data)

    return (
        <div className={css.ResumeReading}>
            <div className={css.ResumeReadingWrapper}>
                <Helmet>
                    <title>Твое резюме | Просмотр резюме</title>
                </Helmet> 

                <h1>Страница загрузки резюме</h1>
                {
                    data!==undefined
                    ?<div style={{marginBottom:'15px'}} className={css.PDFDownloadLink}>
                            <PDFDownloadLink document={<Resume data={data}/> } fileName={data.blocks[0].formControls.name.value}>
                                {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download pdf!')}
                            </PDFDownloadLink>
                    </div>
                    :<div style={{color:'red',fontSize:'20px',marginBottom:'15px'}}>
                        по вашему запросу ни одного резюме не найдено
                        попробуйте другой хештег
                    </div>
                }
                <div style={{marginTop:'15px'}}>
                    {/* <Link to={'/read_rezume'}>
                        <Button type='primary' disabled={false}>
                            Ввести другой хештег
                        </Button>
                    </Link> */}
                    <Link to={'/'}>
                        <Button type='primary' disabled={false}>
                            Вернуться на главную страницу
                        </Button>
                    </Link>
                </div>       
            </div>
        </div>

    )
}

export default ResumeReading
