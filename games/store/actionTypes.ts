// const GAME = {
//   LOAD: "REQUEST_GAMES_DATA",
//   LOAD_SUCCESS: "RECEIVE_GAMES_DATA",
// };

// export default GAME;
export enum GameActions {
  FETCH_GAME_REQUEST = "FETCH_GAME_REQUEST",
  FETCH_GAME_SUCCESS = "FETCH_GAME_SUCCESS",
  FETCH_GAME_FAILURE = "FETCH_GAME_FAILURE",
}

export const Actions = {
  Game: GameActions,
};
