import { GameType } from "./models/gametype";
import { Actions } from "./store/actionTypes";

export interface GamesState {
  pending: boolean;
  games: GameType[];
  error: string | null;
}

export interface FetchGamesSuccessPayload {
  games: GameType[];
}

export interface FetchGamesFailurePayload {
  error: string;
}

export interface FetchGamesRequest {
  type: typeof Actions.Game.FETCH_GAME_REQUEST;
}

export type FetchGamesSuccess = {
  type: typeof Actions.Game.FETCH_GAME_SUCCESS;
  payload: FetchGamesSuccessPayload;
};

export type FetchGamesFailure = {
  type: typeof Actions.Game.FETCH_GAME_FAILURE;
  payload: FetchGamesFailurePayload;
};

export type GamesActions =
  | FetchGamesRequest
  | FetchGamesSuccess
  | FetchGamesFailure;
