import React, {FC} from 'react'
import s from './InputsBlock.module.css'
import CustomInput from '../../../components/CustomInput'

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
            <div className={'contentBlock'}>
                <label className={s.labelsText}>max value: <CustomInput value={maxValue} type={'number'}
                                                                        onChangeValue={onChangeMaxValue}
                                                                        error={maxValueError}/></label>
                <label className={s.labelsText}>start value: <CustomInput onChangeValue={onChangeStartValue}
                                                                          value={startValue}
                                                                          error={startValueError}
                                                                          type={'number'}/></label>
            </div>
        </>
    }




