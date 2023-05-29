import { TextInput, View } from "react-native";
import styles from "./styles";
import Button from "../../components/Button";

export default function GameStart() {
  return (
    <View>
      <TextInput />
      <Button title="Lower" />
      <Button title="Higher" />
    </View>
  );
}
