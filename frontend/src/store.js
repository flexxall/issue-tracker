import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  userLoginReducer,
  userRegisterReducer,
} from "./redux/reducers/userReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  currentIssuesReducer,
  issueCreateReducer,
  issueUpdateReducer,
} from "./redux/reducers/issuesReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  currentIssues: currentIssuesReducer,
  issueCreate: issueCreateReducer,
  issueUpdate: issueUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
