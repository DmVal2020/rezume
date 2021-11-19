import React from 'react'
import css from './PrewResume.css'

function PrewResume({data}) {
    function renderPrew(){
        return (
            <div className={css.PrewResume}>
                <h1>{data.blocks[0].formControls.name.value}</h1>
                {getResume()}
            </div>
        )
    }
    function getResume(){
        return data.blocks.map(block=>{
            return (
                <div key={block.id} className={css.Title}>
                    {block.title && block.value!==''
                        ?<>
                            {block.title}
                            {getSubResume(block)} 
                        </> 
                        :null
                    }
                </div>                    
            )
        })
    }
    function getSubResume(block){
        const formControls = block.formControls
        let keys =Object.keys(formControls)
        return keys.map((key,index)=>{
            return (
                <div key={key+index} className={css.SubTitle}>
                    <div>
                        {formControls[key].label && formControls[key].value!==''
                            ?<>
                                {formControls[key].label + ': '}
                                <span>
                                    {formControls[key].value}
                                </span>
                            </>
                            :null
                        }           
                    </div>
                </div>
            )
        })

    }
    return (
        <div className={css.PrewResume}>
            {renderPrew()}
        </div>
    )
}

export default PrewResume
