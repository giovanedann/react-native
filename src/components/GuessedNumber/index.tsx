import { Text, View } from "react-native";
import styles from "./styles";

type GuessedNumberProps = {
  number: number | string;
};

export default function GuessedNumber({ number }: GuessedNumberProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{String(number)}</Text>
    </View>
  );
}
