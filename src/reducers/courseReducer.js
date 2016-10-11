import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {

    case types.CREATE_COURSE:
      return [...state,
        Object.assign({}, action.course) // Spread operator and object.assign create a new array clone adding in the course passed in from the action
      ];

    default:
      return state;
  }
}
