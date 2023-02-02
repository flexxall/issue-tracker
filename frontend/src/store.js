import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./redux/reducers/userReducers";
import {
  currentIssuesReducer,
  issueCreateReducer,
  issueDeleteReducer,
  issueUpdateReducer,
} from "./redux/reducers/issuesReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const appReducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  currentIssues: currentIssuesReducer,
  issueCreate: issueCreateReducer,
  issueUpdate: issueUpdateReducer,
  issueDelete: issueDeleteReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
