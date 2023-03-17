import { Actions } from "../actionTypes";
import { GamesActions, GamesState } from "../../types";

const initialState: GamesState = {
  pending: false,
  games: [],
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: GamesActions) => {
  switch (action.type) {
    case Actions.Game.FETCH_GAME_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case Actions.Game.FETCH_GAME_SUCCESS:
      return {
        ...state,
        pending: false,
        games: action.payload.games,
        error: null,
      };
    case Actions.Game.FETCH_GAME_FAILURE:
      return {
        ...state,
        pending: false,
        games: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
