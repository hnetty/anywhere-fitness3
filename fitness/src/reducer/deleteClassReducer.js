import {
    DELETE_CLASS_START,
    DELETE_CLASS_SUCCESS,
    DELETE_CLASS_FAIL 
} from '../actions/deleteClass'

const initalState = {
    class: {},
    error: '',
    isFetching: false
}

export const deleteClassReducer = ( state = initalState, action) => {
    switch(action.type){
        case DELETE_CLASS_START:
            return {
                ...state.class,
                class:{},
                isFetching: true,
                error: ''
            };
        case DELETE_CLASS_SUCCESS:
            return {
                ...state.class,
                class: action.payload,
                isFetching: false,
                error: ''
            };
        case DELETE_CLASS_FAIL:
            return {
                ...state.class,
                error: action.payload
            };
        default:
            return state
    }
}