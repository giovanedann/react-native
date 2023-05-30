import { Text, View } from "react-native";
import styles from "./styles";

export default function Game() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opponent's guess</Text>

      <Text>Guess</Text>

      <View>
        <Text>Higher or lower?</Text>
      </View>

      <View>
        <Text>Log rounds</Text>
      </View>
    </View>
  );
}
