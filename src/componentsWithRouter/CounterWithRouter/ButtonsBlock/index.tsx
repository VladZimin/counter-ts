import React, {FC} from 'react'
import {CustomButton} from '../../../components/CustomButton'

export type ButtonsBlockProps = {
    onClickInc: () => void
    onClickReset: () => void
    onClickSettings: () => void
    resetDisabled: boolean
    incDisabled: boolean
}

export const ButtonsBlock: FC<ButtonsBlockProps> =
    ({
         incDisabled,
         resetDisabled,
         onClickReset,
         onClickInc,
         onClickSettings
     }) => {

        return (
            <div className={'buttonsBlock'}>
                <CustomButton onClick={onClickInc}
                              disabled={incDisabled}>INC</CustomButton>
                <CustomButton onClick={onClickReset}
                              disabled={resetDisabled}>RESET</CustomButton>
                <CustomButton onClick={onClickSettings}>SET</CustomButton>
            </div>
        )
    }






