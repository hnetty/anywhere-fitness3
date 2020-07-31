import { combineReducers } from "redux";
import { addClassReducer } from './addClassReducer'
import { editClassReducer } from './editClassReducer'
import { deleteClassReducer } from './deleteClassReducer'


export default combineReducers({
    addClassReducer,
    editClassReducer,
    deleteClassReducer

})