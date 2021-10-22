import axios from "axios";
import {
  CURRENT_ISSUES_FAIL,
  CURRENT_ISSUES_REQUEST,
  CURRENT_ISSUES_SUCCESS,
  ISSUE_CREATE_FAIL,
  ISSUE_CREATE_REQUEST,
  ISSUE_CREATE_SUCCESS,
  ISSUE_UPDATE_FAIL,
  ISSUE_UPDATE_REQUEST,
  ISSUE_UPDATE_SUCCESS,
} from "../constants/issuesConstants";

export const listIssues = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CURRENT_ISSUES_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/issues`, config);

    dispatch({
      type: CURRENT_ISSUES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CURRENT_ISSUES_FAIL, payload: message });
  }
};

export const devIssues = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CURRENT_ISSUES_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/issues`, config);

    dispatch({
      type: CURRENT_ISSUES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: CURRENT_ISSUES_FAIL, payload: message });
  }
};

export const createIssue =
  (description, forDev, priority) => async (dispatch, getState) => {
    try {
      dispatch({ type: ISSUE_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/issues/create`,
        { description, forDev, priority },
        config
      );

      dispatch({
        type: ISSUE_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ISSUE_CREATE_FAIL, payload: message });
    }
  };

export const updateIssue =
  (id, description, forDev, priority) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ISSUE_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/issues/${id}`,
        { description, forDev, priority },
        config
      );

      dispatch({
        type: ISSUE_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ISSUE_UPDATE_FAIL, payload: message });
    }
  };
