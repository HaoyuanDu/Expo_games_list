import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const GameListItem: React.FC<any> = ({ item, onPress }): JSX.Element => {
  const _onPress = (): void => onPress(item);

  return (
    <TouchableOpacity onPress={_onPress}>
      <View style={styles.container}>
        <Text style={styles.bodyText}>ID:{item.id}</Text>
        <Text style={styles.bodyText}>Tilte: {item.title}</Text>
        <Text style={styles.bodyText}>genre: {item.genre}</Text>
        <Text style={styles.bodyText}>status: {item.status}</Text>
        <Text style={styles.bodyText}>
          highlightsSupported:{item.highlightsSupported ? "Yes" : "No"}
        </Text>
        {item.steamUrl != "" && (
          <Text style={styles.bodyText}>steamUrl: {item.steamUrl}</Text>
        )}
        <Text style={styles.bodyText}>publisher: {item.publisher}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E7035A",
    width: 300,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "flex-start",
  },
  bodyText: {
    width: "100%",

    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },

  bodyText2: {
    fontSize: 11,
  },
});

export default GameListItem;
