import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { InteractionManager, View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesRequest } from "../store/action";
import { getGamesState, getGamesState1 } from "../store/gameSelector";
import { RootState } from "../store/reducer/rootReducer";
import GameList from "./GameList";
import data from "../data.json";
const GamesScreen: React.FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const [displayGames, setDisplayGames] = useState(data);

  const [isReady, setIsReady] = useState(false);

  const refetch = useCallback(() => {
    dispatch(fetchGamesRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchGamesRequest());
  }, []);
  const games = useSelector(getGamesState);
  console.log("games", games);

  useEffect(() => {
    if (!displayGames) {
      return;
    }
    const interaction = InteractionManager.runAfterInteractions(() => {
      setIsReady(true);
    });

    return () => {
      interaction.cancel();
    };
  }, [displayGames]);

  if (!isReady) {
    return (
      <View style={styles.textContainer}>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <View style={styles.ctaContainer}>
      <GameList items={displayGames} onRefetch={refetch} loading={isReady} />
    </View>
  );
};

const styles = StyleSheet.create({
  ctaContainer: {
    borderRadius: 5,
    height: "95%",
    justifyContent: "center",
    width: "100%",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GamesScreen;
