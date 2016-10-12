import {combineReducers} from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";

const rootReducer = combineReducers({
  courses, // also note that this is equivalent to: courses: courses
  // this is well named to make the access to state read well. i.e. not courseReducer
  authors

});

export default rootReducer;
