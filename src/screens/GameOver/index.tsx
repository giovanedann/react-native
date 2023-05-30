import { Image, View } from "react-native";
import Title from "../../components/Title";
import styles from "./styles";

export default function GameOver() {
  return (
    <View style={styles.container}>
      <Title text="GAME OVER!" />

      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/success.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}
