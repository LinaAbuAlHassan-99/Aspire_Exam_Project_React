import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
} from "../Types";

// const initialState = {
//   items: [],
//   loading: false,
//   error: null,
// };

export const getLoginDataReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return { ...state, loading: true, error: null };
    case GET_USER_INFO_SUCCESS:
      //debugger;
      return {
        ...state,
        loading: false,
        userInfo: action?.payload,
      };
    case GET_USER_INFO_FAIL:
      return {
        ...state,
        loading: false,
        error: action?.error,
      };
    default: {
      return state;
    }
  }
};
