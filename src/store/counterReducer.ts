type ActionsType =
    ReturnType<typeof incCounterAC> |
    ReturnType<typeof resetCounterAC> |
    ReturnType<typeof changeStartValueAC> |
    ReturnType<typeof changeMaxValueAC> |
    ReturnType<typeof setErrorInfoAC> |
    ReturnType<typeof setCounterValueAC>

type StateType = {
    maxValue: number
    startValue: number
    counterValue: number
    isChangingSettings: boolean
    errorInfo: string
}

const initState: StateType = {
    maxValue: 5,
    startValue: 0,
    counterValue: 0,
    isChangingSettings: false,
    errorInfo: ''
}

export const counterReducer = (state = initState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counterValue: ++state.counterValue
            }
        case 'RESET_COUNTER':
            return {
                ...state,
                counterValue: state.startValue
            }
        case 'CHANGE_START_VALUE':
            return {
                ...state,
                startValue: action.value,
                isChangingSettings: true
            }
        case 'CHANGE_MAX_VALUE':
            return {
                ...state,
                maxValue: action.value,
                isChangingSettings: true
            }
        case 'SET_COUNTER_VALUE':
            return {
                ...state,
                counterValue: state.startValue,
                isChangingSettings: false
            }
        case 'SET_ERROR_INFO':
            return {
                ...state,
                errorInfo: action.value
            }
        default:
            return state
    }
}

export const incCounterAC = () => ({type: 'INC_COUNTER'} as const)
export const resetCounterAC = () => ({type: 'RESET_COUNTER'} as const)
export const changeStartValueAC = (value: number) => ({type: 'CHANGE_START_VALUE', value} as const)
export const changeMaxValueAC = (value: number) => ({type: 'CHANGE_MAX_VALUE', value} as const)
export const setCounterValueAC = () => ({type: 'SET_COUNTER_VALUE'} as const)
export const setErrorInfoAC = (value: string) => ({type: 'SET_ERROR_INFO', value} as const)
