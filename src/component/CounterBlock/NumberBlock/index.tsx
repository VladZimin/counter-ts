import React from 'react'
import s from '../CounterBlock.module.css'
import {NumberBlockProps} from '../index'

export const NumberBlock = (props: NumberBlockProps) => {

    const infoText = props.errorInfo ? props.errorInfo : 'enter values and press "SET"'
    const spanClassName = `${(props.error || props.errorInfo) ? s.maxValue : ''} ${props.isChangingSettings && s.infoText}`
    return <>
        <div className={s.counterBlock}>
            <span className={spanClassName}>{!props.isChangingSettings ? props.value : infoText}</span>
        </div>
    </>
}




