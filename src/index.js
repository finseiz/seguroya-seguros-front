import React from "react";
import ReactDOM from "react-dom";
import store, { persistor } from "./redux/store";
import "./index.scss";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";

const { PUBLIC_URL } = process.env;
 
ReactDOM.render(
  <React.StrictMode>
    <App store={store} persistor={persistor} basename={PUBLIC_URL} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
