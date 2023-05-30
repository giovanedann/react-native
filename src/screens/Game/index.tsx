import { Alert, Text, View } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import generateRandomNumberBetween from "../../utils/generateRandomNumberBetween";
import GuessedNumber from "../../components/GuessedNumber";
import Button from "../../components/Button";

type GameProps = {
  userPickedNumber: number;
};

let minBoundary = 1;
let maxBoundary = 100;

export default function Game({ userPickedNumber }: GameProps) {
  const initialComputerGuess = generateRandomNumberBetween(
    minBoundary,
    maxBoundary,
    userPickedNumber
  );

  const [currentComputerGuess, setCurrentComputerGuess] =
    useState<number>(initialComputerGuess);

  function guessNewNumber(direction: "lower" | "higher") {
    const isUserLying =
      (direction === "lower" && currentComputerGuess < userPickedNumber) ||
      (direction === "higher" && currentComputerGuess > userPickedNumber);

    if (isUserLying) {
      return Alert.alert("Do not lie!!", "You know this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
    }

    if (direction === "lower") {
      maxBoundary = currentComputerGuess;
    } else {
      minBoundary = currentComputerGuess + 1;
    }

    setCurrentComputerGuess((prev) =>
      generateRandomNumberBetween(minBoundary, maxBoundary, prev)
    );
  }

  return (
    <View style={styles.container}>
      <Title text="Opponent's guess" />

      <GuessedNumber number={currentComputerGuess} />

      <View>
        <Text>Higher or lower?</Text>
        <View>
          <Button title="Lower" onPress={() => guessNewNumber("lower")} />
          <Button title="Higher" onPress={() => guessNewNumber("higher")} />
        </View>
      </View>

      <View>
        <Text>Log rounds</Text>
      </View>
    </View>
  );
}
