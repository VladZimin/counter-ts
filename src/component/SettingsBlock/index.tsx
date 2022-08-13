import React, {FC} from 'react'
import s from './CounterBlock.module.css'
import {InputsBlock, InputsBlockType} from './InputsBlock'
import {SetBlock, SetBlockType} from './SetBlock'

type SettingsBlockType = InputsBlockType & SetBlockType

export const SettingsBlock: FC<SettingsBlockType> =
    ({
         maxValue,
         startValue,
         onChangeStartValue,
         onChangeMaxValue,
         onClickSet,
         isSetBtnDisabled,
         maxValueError,
         startValueError
     }) => {

        return (

            <div className={s.container}>
                <InputsBlock maxValue={maxValue} startValue={startValue} onChangeMaxValue={onChangeMaxValue}
                             onChangeStartValue={onChangeStartValue} maxValueError={maxValueError}
                             startValueError={startValueError}/>
                <SetBlock onClickSet={onClickSet} isSetBtnDisabled={isSetBtnDisabled}/>
            </div>
        )

    }




