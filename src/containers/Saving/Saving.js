import React from 'react'

function Saving({res}) {
    const response = JSON.parse(res)
    return (
        <div style={{'marginBottom':'25px'}}>
            {response.result
                ?<>
                    <h2>Ваше резюме создано и доступно по ссылке ниже</h2>
                    <p>ссылка на ваше резюме</p>
                    <a href={`/${response.url}`}>{`/${response.url}`}</a>
                    {/* <p>запомните этот хештег <span style={{color:'green'}}>{response.url}</span></p> */}
                    {/* <p>по нему вы сможете загрузить свое резюме</p> */}
                    <p>ссылка для редактирования,<span style={{color:'red'}}>будьте внимательны - не передавайте эту ссылку третьим лицам</span> </p>
                    <a href={`/edit/${response.edit}`}>{`/edit/${response.edit}`}</a>
                </>
                :<h2>Уппс.... что-то пошло не так</h2>                
            }            
        </div>
    )
}

export default Saving
