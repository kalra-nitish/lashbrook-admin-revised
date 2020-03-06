import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
// import "babel-polyfill";
import ReactResizeDetector from "react-resize-detector";
// import "bootstrap/dist/css/bootstrap.css";
// import "font-awesome/css/font-awesome.css";
// import "react-rangeslider/lib/index.css";
import "./assets/css/style.css";

import configureStore from "./store";
import App from "./routes";

const reportSize = (width, height) => {
  const message = { action: "resize", arguments: { rootHeight: height } };
  window.parent.postMessage(message, "*");
  console.log("message:", message);
};

ReactDOM.render(
  <Provider store={configureStore()}>
    <div>
      <ReactResizeDetector handleHeight onResize={reportSize}>
        <App key="app" />
        <ToastContainer
          key="toast"
          className="toast-container"
          bodyClassName="toast-container-body"
          position="top-right"
          type="default"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
      </ReactResizeDetector>
    </div>
  </Provider>,
  document.getElementById("root")
);
