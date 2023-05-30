import { Pressable, Text, View } from "react-native";
import styles from "./styles";

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressed] : styles.container
        }
      >
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
}
