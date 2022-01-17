import React from 'react'

function Saving({res}) {
    const response = JSON.parse(res)
    console.log(response)
    return (
        <div style={{'marginBottom':'25px'}}>
            {response.result
                ?<>
                    <h2>Ваше резюме создано и доступно по ссылке ниже</h2>
                    <p>ссылка на ваше резюме</p>
                    <a href={`/read_rezume/${response.url}`}>{`/read_rezume/${response.url}`}</a>
                    <p>запомните этот хештег <span style={{color:'green'}}>{response.url}</span></p>
                    <p>по нему вы сможете загрузить свое резюме</p>
                    <p>для редактирования резюме</p>
                    <p>используйте хештег <span style={{color:'firebrick'}}>{response.edit}</span></p>
                </>
                :<h2>Уппс.... что-то пошло не так</h2>                
            }            
        </div>
    )
}

export default Saving
