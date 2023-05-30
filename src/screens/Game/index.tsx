import { Alert, FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import generateRandomNumberBetween from "../../utils/generateRandomNumberBetween";

import styles from "./styles";

import Title from "../../components/Title";
import GuessedNumber from "../../components/GuessedNumber";
import Button from "../../components/Button";
import Card from "../../components/Card";
import InstructionText from "../../components/InstructionText";
import GuessRow from "../../components/GuessRow";

type GameProps = {
  userPickedNumber: number;
  onComputerRightGuess: () => void;
  increaseRounds: (number: number) => void;
};

let minBoundary = 1;
let maxBoundary = 100;

export default function Game({
  userPickedNumber,
  onComputerRightGuess,
  increaseRounds,
}: GameProps) {
  const initialComputerGuess = generateRandomNumberBetween(
    1,
    100,
    userPickedNumber
  );

  const [currentComputerGuess, setCurrentComputerGuess] =
    useState<number>(initialComputerGuess);
  const [rounds, setRounds] = useState<number[]>([initialComputerGuess]);

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

    setCurrentComputerGuess((prev) => {
      const newRandomNumber = generateRandomNumberBetween(
        minBoundary,
        maxBoundary,
        prev
      );

      setRounds((prev) => [newRandomNumber, ...prev]);

      return newRandomNumber;
    });
  }

  useEffect(() => {
    if (userPickedNumber === currentComputerGuess) {
      onComputerRightGuess();
      increaseRounds(rounds.length);
    }
  }, [
    currentComputerGuess,
    userPickedNumber,
    onComputerRightGuess,
    increaseRounds,
  ]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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

      <View style={styles.listContainer}>
        <FlatList
          data={rounds}
          renderItem={(round) => (
            <GuessRow
              roundGuess={round.item}
              roundIndex={rounds.length - round.index}
            />
          )}
          keyExtractor={(round) => String(round)}
        />
      </View>
    </View>
  );
}
