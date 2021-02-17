import {combineReducers} from 'redux';
import {reducer} from './main';
const rootReducer =  combineReducers({main: reducer});


export type RootStateType = ReturnType<typeof rootReducer>
export default rootReducer
