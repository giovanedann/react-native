import { Pressable, Text } from "react-native";
import styles from "./styles";

type ButtonProps = {
  title: string;
};

export default function Button({ title }: ButtonProps) {
  return (
    <Pressable style={styles.container}>
      <Text>{title}</Text>
    </Pressable>
  );
}
