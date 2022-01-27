import { addTask } from "./addEmp";
import { write } from "./addEmp";

import { combineReducers } from "redux";

const rootReducer=combineReducers({
  addTask:addTask,
    write:write
  
})

export default rootReducer