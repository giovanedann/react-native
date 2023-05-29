import { StyleSheet, View } from "react-native";
import GameStart from "./src/screens/GameStart";

export default function App() {
  return (
    <View style={styles.container}>
      <GameStart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
