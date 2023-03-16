import axios from "axios";
import { all, call, put, takeLatest, yield } from "redux-saga/effects";
import { GameType } from "../../models/Gametype";
import { fetchGamesFailure, fetchGamesSuccess } from "../action";
import { gameTypes } from "../actionTypes";
const getGames = () => axios.get<GameType[]>("/assets/data.json");

function* fetchGamesSaga() {
  try {
    const response = yield call(getGames);
    yield put(
      fetchGamesSuccess({
        games: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchGamesFailure({
        error: e.message,
      })
    );
  }
}

function* gamesSaga() {
  yield all([takeLatest(gameTypes.FETCH_GAME_REQUEST, fetchGamesSaga)]);
}

export default gamesSaga;
