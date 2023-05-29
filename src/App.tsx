import React from 'react'
import './App.css'
import {SettingsBlock} from './components/SettingsBlock/SettingsBlock'
import {CounterBlock} from './components/CounterBlock/CounterBlock'

export const App = () => {
    //~~~~ For Counter With Router ~~~~

    /*const navigate = useNavigate()
    const isSetBtnDis = compareMaxStart || startValueError
    const onClickSettings = () => {
        navigate('/settings')
    }
    const onClickSet2 = () => {
        localStorage.setItem('settingsValues', JSON.stringify({maxValue, startValue}))
        setIsChangingSettings(false)
        setCounterValue(startValue)
        navigate(-1)
    }*/

    return (
        <>
            <SettingsBlock/>
            <CounterBlock/>
            {/*<Routes>
                <Route path={'/'} element={<CounterWithRouter onClickInc={onIncHandler}
                                                               onClickReset={onResetHandler}
                                                               onClickSettings={onClickSettings}
                                                               resetDisabled={resetDisabled}
                                                               incDisabled={incrementDisabled}
                                                               value={counterValue}/>}
                />
                <Route path={'/settings'} element={<SettingsWithRouter maxValue={maxValue} startValue={startValue}
                                                                        onChangeStartValue={onChangeStartValue}
                                                                        onChangeMaxValue={onChangeMaxValue}
                                                                        onClickSet={onClickSet2}
                                                                        isSetBtnDisabled={isSetBtnDis}/>}
                />
            </Routes>*/}

        </>

    )
}







