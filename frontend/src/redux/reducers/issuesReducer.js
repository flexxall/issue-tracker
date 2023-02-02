import {
  CURRENT_ISSUES_REQUEST,
  CURRENT_ISSUES_SUCCESS,
  CURRENT_ISSUES_FAIL,
  ISSUE_CREATE_REQUEST,
  ISSUE_CREATE_SUCCESS,
  ISSUE_CREATE_FAIL,
  ISSUE_UPDATE_REQUEST,
  ISSUE_UPDATE_SUCCESS,
  ISSUE_UPDATE_FAIL,
  ISSUE_DELETE_REQUEST,
  ISSUE_DELETE_SUCCESS,
  ISSUE_DELETE_FAIL,
} from "../constants/issuesConstants";

export const currentIssuesReducer = (state = { issues: [] }, action) => {
  switch (action.type) {
    case CURRENT_ISSUES_REQUEST:
      return { loading: true };
    case CURRENT_ISSUES_SUCCESS:
      return { loading: false, issues: action.payload };
    case CURRENT_ISSUES_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const issueCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ISSUE_CREATE_REQUEST:
      return { loading: true, success: false };
    case ISSUE_CREATE_SUCCESS:
      return { loading: false, success: true };
    case ISSUE_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const issueUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ISSUE_UPDATE_REQUEST:
      return { loading: true, success: false };
    case ISSUE_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ISSUE_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

export const issueDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ISSUE_DELETE_REQUEST:
      return { loading: true };
    case ISSUE_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ISSUE_DELETE_FAIL:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};
