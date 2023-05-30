import { Alert, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import generateRandomNumberBetween from "../../utils/generateRandomNumberBetween";

import styles from "./styles";

import Title from "../../components/Title";
import GuessedNumber from "../../components/GuessedNumber";
import Button from "../../components/Button";
import Card from "../../components/Card";
import InstructionText from "../../components/InstructionText";

type GameProps = {
  userPickedNumber: number;
  onComputerRightGuess: () => void;
};

let minBoundary = 1;
let maxBoundary = 100;

export default function Game({
  userPickedNumber,
  onComputerRightGuess,
}: GameProps) {
  const initialComputerGuess = generateRandomNumberBetween(
    1,
    100,
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

  useEffect(() => {
    if (userPickedNumber === currentComputerGuess) {
      onComputerRightGuess();
    }
  }, [currentComputerGuess, userPickedNumber, onComputerRightGuess]);

  return (
    <View style={styles.container}>
      <Title text="Opponent's guess" />

      <GuessedNumber number={currentComputerGuess} />

      <Card>
        <InstructionText
          text="Higher or lower?"
          style={styles.customInstructionText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button
              icon={<Ionicons name="md-remove" size={24} color="#fff" />}
              onPress={() => guessNewNumber("lower")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={<Ionicons name="md-add" size={24} color="#fff" />}
              onPress={() => guessNewNumber("higher")}
            />
          </View>
        </View>
      </Card>

      <View>
        <Text>Log rounds</Text>
      </View>
    </View>
  );
}
