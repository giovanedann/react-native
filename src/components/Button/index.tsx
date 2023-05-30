import { Pressable, Text, View } from "react-native";
import styles from "./styles";

type ButtonProps = {
  title: string;
};

export default function Button({ title }: ButtonProps) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressed] : styles.container
        }
      >
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
}
