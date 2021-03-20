import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "react-calendar/dist/Calendar.css";
import { GlobalStyles } from "./global-styles";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserProvider from "./providers/userProvider";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
