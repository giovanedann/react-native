import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import GameStart from "./src/screens/GameStart";
import Game from "./src/screens/Game";
import { Colors } from "./src/styles/colors";
import GameOver from "./src/screens/GameOver";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(true);

  function handleConfirmNumber(value: number) {
    setPickedNumber(value);
    setIsGameOver(false);
  }

  function finishGame() {
    setIsGameOver(true);
  }

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
          {!pickedNumber && isGameOver && (
            <GameStart
              onConfirmNumber={(value: number) => handleConfirmNumber(value)}
            />
          )}

          {!!pickedNumber && !isGameOver && (
            <Game
              userPickedNumber={pickedNumber}
              onComputerRightGuess={finishGame}
            />
          )}

          {!!pickedNumber && isGameOver && <GameOver />}
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
