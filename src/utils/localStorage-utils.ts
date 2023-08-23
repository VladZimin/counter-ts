import {RootStateType} from '../store/store'

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('app-state')
        if (serializedState) {
            return JSON.parse(serializedState)
        }
    } catch (e) {
        return undefined
    }
}

export const saveState = (state: RootStateType) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('app-state', serializedState)
    } catch {
        //ignore
    }
}