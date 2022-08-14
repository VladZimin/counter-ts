import React, {FC} from 'react'
import {ButtonsBlock, ButtonsBlockProps} from './ButtonsBlock'
import {NumberBlock, NumberBlockProps} from './NumberBlock'

type PropsType = ButtonsBlockProps & NumberBlockProps

export const CounterBlock: FC<PropsType> =
    ({
         errorInfo,
         isChangingSettings,
         onClickInc,
         onClickReset,
         incDisabled,
         resetDisabled,
         value
     }) => {
        return (
            <div className={'container'}>
                <NumberBlock value={value}
                             incDisabled={incDisabled}
                             errorInfo={errorInfo}
                             isChangingSettings={isChangingSettings}
                />
                <ButtonsBlock onClickInc={onClickInc}
                              onClickReset={onClickReset}
                              incDisabled={incDisabled}
                              resetDisabled={resetDisabled}
                              isChangingSettings={isChangingSettings}
                />
            </div>
        )
    }




