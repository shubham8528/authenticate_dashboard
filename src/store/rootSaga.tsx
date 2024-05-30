import { all } from "@redux-saga/core/effects";
import { loginWatcher } from "../redux/modules/signUp/saga";
import { signInWatcher } from "../redux/modules/signIn/saga";

function* rootSaga() {
  yield all([loginWatcher(), signInWatcher()]);
}
export { rootSaga };
