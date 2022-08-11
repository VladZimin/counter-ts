import React from 'react'
import s from './CounterBlock.module.css'

type PropsType = {
    value: number
    error: boolean
}

export const CounterBlock = (props: PropsType) => {
    return <div className={`${s.counterBlock} ${props.error ? s.maxValue : ''}`}>{props.value}</div>
}




