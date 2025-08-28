import {combineReducers} from "redux";
import users from "./user";
import tweets from "./tweets";
import authedUser from "./authedUser";

export default combineReducers({
  users,
  tweets,
  authedUser,
});
