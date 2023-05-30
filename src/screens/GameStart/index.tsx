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
      <Button title="Lower" />
      <Button title="Higher" />
    </View>
  );
}
