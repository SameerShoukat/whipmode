import axios from "axios";
import { api } from "../../api";

export const GET_DATA = "GET_DATA";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const get_data = () => ({ type: GET_DATA });
export const get_data_success = (data) => ({
  type: GET_DATA_SUCCESS,
  payload: data,
});
export const get_data_failure = () => ({ type: GET_DATA_FAILURE });

export function allDATA() {
  return async (dispatch) => {
    dispatch(get_data());
    try {
      const config = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("uswms-login")}`,
        },
      };
      const res = await axios.get(`${api}/admins/get-supervisors`, config);
      const data = await res.data;
      dispatch(get_data_success(data));
    } catch (error) {
      dispatch(get_data_failure());
    }
  };
}
