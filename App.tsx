import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import GameStart from "./src/screens/GameStart";
import Game from "./src/screens/Game";
import { Colors } from "./src/styles/colors";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState<number>(0);

  return (
    <LinearGradient
      colors={[Colors.primary550, Colors.accent500]}
      style={styles.root}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        style={styles.root}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.root}>
          {!pickedNumber && (
            <GameStart
              onConfirmNumber={(value: number) => setPickedNumber(value)}
            />
          )}

          {!!pickedNumber && <Game />}
        </SafeAreaView>
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
