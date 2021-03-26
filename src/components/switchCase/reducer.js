const intialState = {
    case: ''
}

const switchCaseReducer = (state = intialState, action) => {
    switch(action.type){
        case 'SWITCH_CASE': return{
            ...state,
            case: action.value
        }

        default: return state
    }
}

export default switchCaseReducer;