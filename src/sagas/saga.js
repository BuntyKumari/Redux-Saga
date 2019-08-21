import { delay } from "redux-saga/effects";
import { takeLatest, put } from "redux-saga/effects";

function* ageUpAsync() {
  yield delay(4000);
  
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}
function* agedownAsync() {
  yield delay(4000);
  yield put({ type: "AGE_DOWN_ASYNC", value: 2});
}

export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}

export function* watchagemedown() {
  yield takeLatest("AGE_DOWN", agedownAsync);
}
