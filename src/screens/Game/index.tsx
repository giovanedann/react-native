import { Text, View } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";

export default function Game() {
  return (
    <View style={styles.container}>
      <Title text="Opponent's guess" />

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
