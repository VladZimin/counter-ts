import React, {FC} from 'react'
import s from '../CounterBlock.module.css'
import st from './InputsBlock.module.css'
import CustomInput from '../../Input/CustomInput'

export type InputsBlockType = {
    maxValue: number
    maxValueError?: boolean
    startValue: number
    startValueError?: boolean
    onChangeStartValue: (value: string) => void
    onChangeMaxValue: (value: string) => void
}

export const InputsBlock: FC<InputsBlockType> =
    ({
         maxValue,
         startValue,
         onChangeMaxValue,
         onChangeStartValue,
         startValueError,
         maxValueError
     }) => {

        return <>
            <div className={s.counterBlock}>
                <label>max value: <CustomInput value={maxValue} type={'number'} onChangeValue={onChangeMaxValue}
                                               error={maxValueError} className={st.settingsInputs}/></label>
                <label>start value: <CustomInput onChangeValue={onChangeStartValue} value={startValue}
                                                 error={startValueError} type={'number'}
                                                 className={st.settingsInputs}/></label>
            </div>
        </>
    }




