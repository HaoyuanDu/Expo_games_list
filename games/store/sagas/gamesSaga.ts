import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { GameType } from "../../models/Gametype";
import { fetchGamesFailure, fetchGamesSuccess } from "../action";
import { Actions } from "../actionTypes";
import data from "../../data.json";
const getGames = async () => {
  await axios.get("data.json");
};
function* fetchGamesSaga() {
  console.log("hahah", data[0]);
  try {
    console.log("hahah", data[0]);

    // const response = axios.get("../../data.json");
    // console.log("response2", response);
    // const response1 = axios.get("../data.json");
    // const response2 = axios
    //   .get("../data.json")
    //   .then((data) => {
    //     console.log("data", data);
    //   })
    //   .error((err) => {
    //     console.log("err", err);
    //   });

    // const response = fetch("./data.json")
    //   .then((response) => {
    //     response.json(), console.log("response.json()", response.json());
    //   })
    //   .then((json) => console.log(json));
    // // console.log("response2", response, response1.data, response2.json());

    yield put(
      fetchGamesSuccess({
        games: data,
      })
    );
  } catch (e) {
    yield put(
      fetchGamesFailure({
        error: "e",
      })
    );
  }
}

function* gamesSaga() {
  yield all([takeLatest(Actions.Game.FETCH_GAME_REQUEST, fetchGamesSaga)]);
}

export default gamesSaga;
