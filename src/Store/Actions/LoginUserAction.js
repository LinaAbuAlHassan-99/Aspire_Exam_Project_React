import { GetLoginData } from "../Services";
import {
  GET_USER_INFO,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_FAIL,
} from "../Types";
//Currying -> partially applied function in math
export const fetchLoginData = (email, password) => async (dispatch) => {
  dispatch({ type: GET_USER_INFO });

  try {
    const responce = await GetLoginData(email, password);
    dispatch({ type: GET_USER_INFO_SUCCESS, payload: responce });
    localStorage.setItem("Token", responce.token);
  } catch (e) {
    dispatch({ type: GET_USER_INFO_FAIL, payload: e });
  }
};
