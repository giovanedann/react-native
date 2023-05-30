import { Text, View } from "react-native";
import styles from "./styles";

type GuessRowProps = {
  roundGuess: number;
  roundIndex: number;
};

export default function GuessRow({ roundGuess, roundIndex }: GuessRowProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Round #{roundIndex}</Text>
      <Text style={styles.text}>Opponent said {roundGuess}. Wrong guess.</Text>
    </View>
  );
}
