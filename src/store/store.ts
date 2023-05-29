import {legacy_createStore} from 'redux'
import {counterReducer} from './counterReducer'

export const store = legacy_createStore(counterReducer)
export type RootStateType = ReturnType<typeof counterReducer>