import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import GamesScreen from "./pages/Games";
import { fetchGamesRequest } from "./store/action";
import { RootState } from "./store/reducer/rootReducer";
import store from "./store/store";

const App = () => {
  // const dispatch = useDispatch();
  // const { pending, games, error } = useSelector(
  //   (state: RootState) => state.games
  // );

  // useEffect(() => {
  //   dispatch(fetchGamesRequest());
  // }, []);

  return (
    <Provider store={store}>
      <GamesScreen />
    </Provider>

    // <div>
    //   {pending ? (
    //     <div>Loading...</div>
    //   ) : error ? (
    //     <div>Error</div>
    //   ) : (
    //     posts?.map((todo, index) => (
    //       <div key={todo.id}>
    //         {++index}. {todo.title}
    //       </div>
    //     ))
    //   )}
    // </div>
  );
};

export default App;
