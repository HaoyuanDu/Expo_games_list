import { all, fork } from "redux-saga/effects";
import gamesSaga from "./gamesSaga";

export function* rootSaga() {
  yield all([fork(gamesSaga)]);
}
