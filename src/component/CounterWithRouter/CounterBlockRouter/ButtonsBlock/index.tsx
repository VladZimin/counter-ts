import React, {FC} from 'react'
import {Button} from '../../../CustomButton'

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
                <Button onClick={onClickInc}
                        disabled={incDisabled}>INC</Button>
                <Button onClick={onClickReset}
                        disabled={resetDisabled}>RESET</Button>
                <Button onClick={onClickSettings}>SET</Button>
            </div>
        )
    }






