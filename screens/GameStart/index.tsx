import { Button, TextInput, View } from "react-native";
import styles from "./styles";

export default function GameStart() {
  return (
    <View>
      <TextInput />
      <Button title="Lower" />
      <Button title="Higher" />
    </View>
  );
}
