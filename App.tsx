import { StyleSheet, ImageBackground } from "react-native";
import GameStart from "./src/screens/GameStart";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.root}>
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.root}
        imageStyle={styles.backgroundImage}
      >
        <GameStart />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: "100%",
  },

  backgroundImage: {
    opacity: 0.3,
  },
});
