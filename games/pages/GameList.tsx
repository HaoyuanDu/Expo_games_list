import React, { useCallback, useEffect, useState } from "react";
import {
  RefreshControl,
  View,
  Text,
  FlatList,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { GameType } from "../models/gametype";
import GameListItem from "./GameListItem";

// giving keys for each item in the dynamic list
const keyExtractor = (item: any) => item.id;

const onPress = (item: GameType) => {
  ToastAndroid.show(`${item.title} has been pressed`, ToastAndroid.SHORT);
};

const ListEmptyComponent = ({ loading }: any) => {
  console.log("loading", loading);
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.subTitle}>
        {loading ? "Checking for records" : "No Records"}
      </Text>
    </View>
  );
};
const GameList = ({ items, loading, onRefetch }: any) => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // render the list item
  const renderItem = useCallback(
    ({ item }: any) => <GameListItem item={item} onPress={onPress} />,
    []
  );

  const getItemLayout = useCallback(
    (_: any, index: any) => ({
      length: 70,
      offset: 70 * index,
      index,
    }),
    [items]
  );

  useEffect(() => {
    if (isLoadingMore && !loading) {
      setIsLoadingMore(false);
    }
  }, [loading]);

  if (!loading && !isLoadingMore) {
    return (
      <View style={styles.loadingContainer}>
        <Text>loading</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      contentContainerStyle={styles.contentContainer}
      refreshControl={
        <RefreshControl refreshing={!loading} onRefresh={onRefetch} />
      }
      initialNumToRender={10}
      maxToRenderPerBatch={
        items.length > 60 ? Math.floor(items.length / 50) + 1 : items.length
      }
      updateCellsBatchingPeriod={50}
      windowSize={10}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    height: 20,
    opacity: 0.5,
  },
});

export default GameList;
