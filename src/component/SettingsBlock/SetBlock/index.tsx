import React, {FC} from 'react'
import s from './ButtonsBlock.module.css'
import {Button} from '../../Button'

export type SetBlockType = {
    onClickSet: () => void
    isSetBtnDisabled: boolean
}

export const SetBlock: FC<SetBlockType> = ({onClickSet, isSetBtnDisabled}) => {
    return (
        <div className={s.buttonsBlock}>
            <Button onClick={onClickSet} disabled={isSetBtnDisabled}>set</Button>
        </div>
    )
}






