import {legacy_createStore} from 'redux'
import {counterReducer} from './counterReducer'
import {loadState, saveState} from '../utils/localStorage-utils'

export const store = legacy_createStore(counterReducer, loadState())
export type RootStateType = ReturnType<typeof counterReducer>

store.subscribe(() => {
    saveState(store.getState())
})
