import { TextInput, View } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";

export default function GameStart() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button title="Lower" />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Higher" />
        </View>
      </View>
    </View>
  );
}
