import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './CustomInput.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeValue?: (value: string) => void
    error?: boolean
}

const CustomInput: React.FC<SuperInputTextPropsType> = (
    {
        error,
        className,
        onChange,
        onChangeValue,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeValue && onChangeValue(e.currentTarget.value)
    }

    const finalInputClassName = `${s.superInput} ${error ? s.errorInput : ''} ${className ? className : ''}`

    return (
        <>
            <input
                onChange={onChangeCallback}
                className={finalInputClassName}

                {...restProps}
            />
        </>
    )
}

export default CustomInput
