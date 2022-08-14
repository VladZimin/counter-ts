import React, {FC} from 'react'
import {InputsBlock, InputsBlockType} from './InputsBlock'
import {SetBlock, SetBlockType} from './SetBlock'

type SettingsBlockType = InputsBlockType & SetBlockType

export const SettingsBlockRouter: FC<SettingsBlockType> =
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
            <div className={'container'}>
                <InputsBlock maxValue={maxValue} startValue={startValue} onChangeMaxValue={onChangeMaxValue}
                             onChangeStartValue={onChangeStartValue} maxValueError={maxValueError}
                             startValueError={startValueError}/>
                <SetBlock onClickSet={onClickSet} isSetBtnDisabled={isSetBtnDisabled}/>
            </div>
        )
    }




