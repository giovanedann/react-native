import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback, useState } from "react";

import GameStart from "./src/screens/GameStart";
import Game from "./src/screens/Game";
import { Colors } from "./src/styles/colors";
import GameOver from "./src/screens/GameOver";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [pickedNumber, setPickedNumber] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(true);

  const [fontsLoaded] = useFonts({
    poppins: require("./assets/fonts/poppins/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/poppins/Poppins-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

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
      onLayout={onLayoutRootView}
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
