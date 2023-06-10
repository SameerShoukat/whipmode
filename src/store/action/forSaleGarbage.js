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

const headers = {
  authorization: `Bearer ${localStorage.getItem("uswms-login")}`,
};

export function allDATA() {
  return async (dispatch) => {
    dispatch(get_data());
    try {
      let data = [];
      const config = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("uswms-login")}`,
        },
      };
      const resCurrentMonth = await axios.get(
        `${api}/admins/forsale-garbages`,
        config
      );
      data["currentMonth"] = await resCurrentMonth.data;

      const resPreviousMonth = await axios.get(
        `${api}/admins/previous-month-forsale-garbages`,
        config
      );
      data["prevMonth"] = await resPreviousMonth.data;

      dispatch(get_data_success(data));
    } catch (error) {
      dispatch(get_data_failure());
    }
  };
}
export async function getPurchaserInfo(id) {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("uswms-login")}`,
      },
    };

    const res = await axios.get(`${api}/admins/purchaser/${id}`, config);
    return res.data;
  } catch (error) {
    return false;
  }
}

export async function getGarbageInfo(id) {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("uswms-login")}`,
      },
    };

    const res = await axios.get(
      `${api}/admins/get-single-garbage/${id}`,
      config
    );
    return res.data;
  } catch (error) {
    return false;
  }
}

export async function assignGarbage(id) {
  try {
    const config = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("uswms-login")}`,
      },
    };
    const res = await axios.put(
      `${api}/admins/assign-purchaser/${id}`,
      {},

      config
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    return false;
  }
}
