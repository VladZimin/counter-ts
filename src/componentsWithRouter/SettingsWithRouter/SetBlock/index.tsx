import React, {FC} from 'react'
import {CustomButton} from '../../../components/CustomButton'

export type SetBlockType = {
    onClickSet: () => void
    isSetBtnDisabled: boolean
}

export const SetBlock: FC<SetBlockType> = ({onClickSet, isSetBtnDisabled}) => {
    return (
        <div className={'buttonsBlock'}>
            <CustomButton onClick={onClickSet} disabled={isSetBtnDisabled}>SET</CustomButton>
        </div>
    )
}






