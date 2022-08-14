import React, {FC} from 'react'
import s from './NumberBlock.module.css'

export type NumberBlockProps = {
    value: number
    incDisabled: boolean
    errorInfo: string | boolean
    isChangingSettings: boolean
}

export const NumberBlock: FC<NumberBlockProps> =
    ({
         isChangingSettings,
         value,
         incDisabled,
         errorInfo
     }) => {

        const infoText = errorInfo
            ? <span className={`${s.maxValueColor} ${s.infoText}`}>{errorInfo}</span>
            : <span className={s.infoText}>enter values and press "SET"</span>
        const spanClassName = `${incDisabled ? s.maxValueColor : ''}`

        return <>
            <div className={'contentBlock'}>
                {
                    !isChangingSettings
                        ? <span className={spanClassName}>{value}</span>
                        : infoText
                }
            </div>
        </>
    }




