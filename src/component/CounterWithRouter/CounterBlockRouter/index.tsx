import React, {FC} from 'react'
import {ButtonsBlock, ButtonsBlockProps} from './ButtonsBlock'
import {NumberBlock, NumberBlockProps} from './NumberBlock'

type PropsType = ButtonsBlockProps & NumberBlockProps

export const CounterBlockRouter: FC<PropsType> =
    ({
         onClickInc,
         onClickReset,
         incDisabled,
         resetDisabled,
         onClickSettings,
         value
     }) => {
        return (
            <div className={'container'}>
                <NumberBlock value={value}
                             incDisabled={incDisabled}
                />
                <ButtonsBlock onClickInc={onClickInc}
                              onClickReset={onClickReset}
                              incDisabled={incDisabled}
                              resetDisabled={resetDisabled}
                              onClickSettings={onClickSettings}
                />
            </div>
        )
    }




