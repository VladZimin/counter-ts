import React, {FC} from 'react'
import s from './NumberBlock.module.css'
import {useSelector} from 'react-redux'
import {RootStateType} from '../../../store/store'

export type NumberBlockProps = {
    counterValue: number
    incDisabled: boolean
    isChangingSettings: boolean
}

export const NumberBlock: FC<NumberBlockProps> =
    ({
         counterValue,
         incDisabled,
         isChangingSettings
     }) => {

        const errorInfo = useSelector((state: RootStateType) => state.errorInfo)

        const infoText = errorInfo
            ? <span className={`${s.maxValueColor} ${s.infoText}`}>{errorInfo}</span>
            : <span className={s.infoText}>enter values and press "SET"</span>
        const spanClassName = `${incDisabled ? s.maxValueColor : ''}`

        return <>
            <div className={'contentBlock'}>
                {
                    !isChangingSettings
                        ? <span className={spanClassName}>{counterValue}</span>
                        : infoText
                }
            </div>
        </>
    }




