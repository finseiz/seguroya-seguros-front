import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {persistStore} from "redux-persist";
import {rootReducer} from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true
  }),
  sagaMiddleware
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production"
});

export const persistor = persistStore(store);

export default store;