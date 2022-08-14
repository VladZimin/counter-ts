import React, {ButtonHTMLAttributes, DetailedHTMLProps, FC} from 'react'
import s from './Button.module.css'

export const Button: FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> =
    ({className, ...rest}) => {
        const newClassName = `${s.button} ${className}`
        return (
            <button className={newClassName} {...rest}>{rest.children}</button>
        )
    }


