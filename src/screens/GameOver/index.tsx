import { Image, Text, View } from "react-native";
import Title from "../../components/Title";
import styles from "./styles";
import Button from "../../components/Button";

type GameOverProps = {
  onStartNewGameClick: () => void;
  numberOfRounds: number;
  pickedNumber: number;
};

export default function GameOver({
  onStartNewGameClick,
  numberOfRounds,
  pickedNumber,
}: GameOverProps) {
  return (
    <View style={styles.container}>
      <Title text="GAME OVER!" />

      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/success.png")}
          style={styles.image}
        />
      </View>

      <Text style={styles.summary}>
        Opponent needed{" "}
        <Text style={styles.summaryHighlight}>{numberOfRounds}</Text> rounds to
        guess the number{" "}
        <Text style={styles.summaryHighlight}>{pickedNumber}</Text>.
      </Text>

      <Button title="Start new game" onPress={onStartNewGameClick} />
    </View>
  );
}
