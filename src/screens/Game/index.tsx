import { Text, View } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import { useState } from "react";
import generateRandomNumberBetween from "../../utils/generateRandomNumberBetween";
import GuessedNumber from "../../components/GuessedNumber";

type GameProps = {
  userPickedNumber: number;
};

export default function Game({ userPickedNumber }: GameProps) {
  const initialComputerGuess = generateRandomNumberBetween(
    1,
    100,
    userPickedNumber
  );

  const [currentComputerGuess, setCurrentComputerGuess] =
    useState<number>(initialComputerGuess);

  return (
    <View style={styles.container}>
      <Title text="Opponent's guess" />

      <GuessedNumber number={currentComputerGuess} />

      <View>
        <Text>Higher or lower?</Text>
      </View>

      <View>
        <Text>Log rounds</Text>
      </View>
    </View>
  );
}
