import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import {CounterWithRouter} from './componentsWithRouter/CounterWithRouter/CounterWithRouter'
import {SettingsWithRouter} from './componentsWithRouter/SettingsWithRouter/SettingsWithRouter'

export const App = () => {
    return <>
        {/*<SettingsBlock/>
        <CounterBlock/>*/}
        <Routes>
            <Route path={'/'} element={<CounterWithRouter/>}/>
            <Route path={'/settings'} element={<SettingsWithRouter/>}/>
        </Routes>
    </>
}







