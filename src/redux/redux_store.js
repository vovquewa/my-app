import { combineReducers } from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
// import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore } from "redux";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

let store = legacy_createStore(rootReducer)

window.store = store;

export default store;