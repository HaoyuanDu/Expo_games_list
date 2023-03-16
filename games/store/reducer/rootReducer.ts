import { combineReducers } from "redux";
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
  games: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
