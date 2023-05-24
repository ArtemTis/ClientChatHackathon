import { combineReducers } from "@reduxjs/toolkit";
import chatReducer  from './chatSlice'

const rootReducer = combineReducers({chatReducer});

export default rootReducer;