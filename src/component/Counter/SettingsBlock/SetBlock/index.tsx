import React, {FC} from 'react'
import {Button} from '../../../CustomButton'

export type SetBlockType = {
    onClickSet: () => void
    isSetBtnDisabled: boolean
}

export const SetBlock: FC<SetBlockType> = ({onClickSet, isSetBtnDisabled}) => {
    return (
        <div className={'buttonsBlock'}>
            <Button onClick={onClickSet} disabled={isSetBtnDisabled}>SET</Button>
        </div>
    )
}






