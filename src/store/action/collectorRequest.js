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
      const config = {
        headers: {
          authorization: `Bearer ${localStorage.getItem("uswms-login")}`,
        },
      };
      const res = await axios.get(
        `${api}/supervisor/get-collector-requests`,
        config
      );
      console.log(res.data);
      const data = await res.data;
      dispatch(get_data_success(data));
    } catch (error) {
      dispatch(get_data_failure());
    }
  };
}

export const approvedRequest = (value) => {
  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("uswms-login")}`,
    },
  };
  axios
    .post(`${api}/supervisor/approve-collector-requests/${value}`, null, config)
    .then((res) => {
      if (res) {
        return res.message;
      }
    })
    .catch((res) => {
      return res.message;
    });
};

export const deniedCollectorRequest = (id, value) => {
  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("uswms-login")}`,
    },
  };
  axios
    .post(
      `${api}/supervisor/approve-collector-requests/${id}`,
      JSON.stringify(value),
      config
    )
    .then((res) => {
      if (res) {
        return res.message;
      }
    })
    .catch((res) => {
      return res.message;
    });
};
