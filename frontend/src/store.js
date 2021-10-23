import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  userLoginReducer,
  userRegisterReducer,
} from "./redux/reducers/userReducers";
import {
  currentIssuesReducer,
  issueCreateReducer,
  issueDeleteReducer,
  issueUpdateReducer,
  myIssuesReducer,
} from "./redux/reducers/issuesReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  currentIssues: currentIssuesReducer,
  myIssues: myIssuesReducer,
  issueCreate: issueCreateReducer,
  issueUpdate: issueUpdateReducer,
  issueDelete: issueDeleteReducer,
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
