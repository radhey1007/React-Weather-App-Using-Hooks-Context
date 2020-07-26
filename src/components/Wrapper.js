import React from 'react';
import style from '../styles/modules/wrapper.module.css'

const Wrapper = (props) => {
    return (
        <div className={style.wrapper}>
            {props.children}
        </div>
    )
}

export default Wrapper;