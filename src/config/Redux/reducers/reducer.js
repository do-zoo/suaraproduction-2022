import { combineReducers } from "redux";
import GlobalReducer from "./globalReducer";
import HomeReducer from "./homeReducer";
import AboutUsReducer from "./aboutUsReducer";
// import HomeReducer from './homeReducer';
// import CreateBlogReducer from './createBlogReducer';

const reducer = combineReducers({ GlobalReducer, HomeReducer, AboutUsReducer });

export default reducer;
