// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";
import { rootSaga } from "./sagas/rootSaga";
import rootReducer from "./reducer/rootReducer";

import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// Mount it on the Store
export default configureStore({
  reducer: { root: rootReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

// Render the application
