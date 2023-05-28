import React, {FC} from 'react'
import s from './NumberBlock.module.css'

export type NumberBlockProps = {
    value: number
    incDisabled: boolean
}

export const NumberBlock: FC<NumberBlockProps> =
    ({
         value,
         incDisabled,
     }) => {

        return <>
            <div className={`contentBlock ${s.counterRouter}`}>
                <span className={incDisabled ? s.maxValueColor : ''}>{value}</span>
            </div>
        </>
    }




