import {combineReducers} from "redux";
import courses from "./courseReducer";

const rootReducer = combineReducers({
  courses // this is well named to make the access to state read well. i.e. not courseReducer
  // also note that this is equivalent to: courses: courses
});

export default rootReducer;
