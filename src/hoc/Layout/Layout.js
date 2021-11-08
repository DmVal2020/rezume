import React from 'react'
import css from './Layout.css'

function Layout(props) {
    return (
        <div className={css.Layout}>
            <main>
                {props.children}
            </main>
            
        </div>
    )
}

export default Layout
