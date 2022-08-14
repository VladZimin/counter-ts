import React, {FC} from 'react'
import {Button} from '../../CustomButton'

export type ButtonsBlockProps = {
    onClickInc: () => void
    onClickReset: () => void
    resetDisabled: boolean
    incDisabled: boolean
    isChangingSettings: boolean
}

export const ButtonsBlock: FC<ButtonsBlockProps> =
    ({
         isChangingSettings,
         incDisabled,
         resetDisabled,
         onClickReset,
         onClickInc
     }) => {

        const incBtnDisabled = isChangingSettings || incDisabled
        const resetBtnDisabled = isChangingSettings || resetDisabled

        return (
            <div className={'buttonsBlock'}>
                <Button onClick={onClickInc}
                        disabled={incBtnDisabled}>INC</Button>
                <Button onClick={onClickReset}
                        disabled={resetBtnDisabled}>RESET</Button>
            </div>
        )
    }






