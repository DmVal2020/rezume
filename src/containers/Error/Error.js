import React from 'react'
import {Helmet} from "react-helmet"

function Error() {
    return (
        <div>
            <Helmet>
                    <title>not found</title>
                </Helmet>
            <h1 style={{textAlign:'center',color:'red'}}>404 not found</h1>
        </div>
    )
}

export default Error
