import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./store/reducer";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchAgeUp } from "./sagas/saga";
import { watchagemedown } from "./sagas/saga"
let a=[watchAgeUp,watchagemedown]
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

    // for(let i=0;i<a.length;i++){
        
    // }
     
  // a.map((data)=>{
  //   sagaMiddleware.run(data);
  // })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);