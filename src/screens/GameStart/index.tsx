import { TextInput, View, Alert } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";
import { useState } from "react";

export default function GameStart() {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  function onConfirm() {
    const convertedEnteredNumber = Number(enteredNumber);

    const isNumberInvalid =
      typeof convertedEnteredNumber !== "number" || convertedEnteredNumber <= 0;

    if (isNumberInvalid) {
      Alert.alert(
        "Invalid number!",
        "Number must be an integer number between 1 and 99",
        [{ text: "Understood!", style: "destructive", onPress: onReset }]
      );
    }
  }

  function onReset() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setEnteredNumber(text)}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button title="Reset" onPress={onReset} />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Confirm" onPress={onConfirm} />
        </View>
      </View>
    </View>
  );
}
