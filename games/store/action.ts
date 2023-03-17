import { Actions } from "./actionTypes";
import {
  FetchGamesFailure,
  FetchGamesFailurePayload,
  FetchGamesRequest,
  FetchGamesSuccess,
  FetchGamesSuccessPayload,
} from "../types";

export const fetchGamesRequest = (): FetchGamesRequest => ({
  type: Actions.Game.FETCH_GAME_REQUEST,
});

export const fetchGamesSuccess = (
  payload: FetchGamesSuccessPayload
): FetchGamesSuccess => ({
  type: Actions.Game.FETCH_GAME_SUCCESS,
  payload,
});

export const fetchGamesFailure = (
  payload: FetchGamesFailurePayload
): FetchGamesFailure => ({
  type: Actions.Game.FETCH_GAME_FAILURE,
  payload,
});
