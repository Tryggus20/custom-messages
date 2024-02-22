import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import watcherSaga from "./redux/_root.saga";
import rootReducer from "./redux/_root.reducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
 
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watcherSaga);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
