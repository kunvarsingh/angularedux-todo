import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS,INCREMENT } from '../actions';


const initialState = {
  app_data: null,
  counter : 0
};


export default (state = initialState, { type, payload }) => {
  switch (type) {

    case INCREMENT:
    payload = state.counter+1;
    return {
      ...state,
      loading: true,
      counter: payload
    };

  case ADD_TODO.REQUEST:
    return {
      ...state,
      loading: true,
    };
  case ADD_TODO.SUCCESS:
    return {
      ...state,
      loading: true,
      app_data: payload,
    };
 
  default:
    return state;
  }

};

