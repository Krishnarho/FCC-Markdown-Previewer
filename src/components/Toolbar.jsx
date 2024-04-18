import React from 'react'
import sirsa from "../assets/logo.png"

function Toolbar({ icon, text, onClick }) {
    return (
        <div className='toolbar'>
            <div className='toolbar-left'>
                <img src={sirsa} alt="logo" />
                <p>{text}</p>
            </div>
            <i className={icon} onClick={onClick}></i>
        </div>
    )
}

export default Toolbar