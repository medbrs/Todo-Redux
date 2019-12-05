import { ADD_TODO, EDIT_TODO, DELETE_TODO, COMPLETE } from "../action/actiontypes";


const initialState = []


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case EDIT_TODO:
            return state.map(el => el.id === action.payload.id ? action.payload : el)
        case DELETE_TODO:
            return state.filter(el => el.id !== action.payload)
        case COMPLETE:
            return state.map(el => el.id === action.payload.id ? { ...el, complete: !el.complete } : el)

        default:
            return state;
    }

}




export default rootReducer;


