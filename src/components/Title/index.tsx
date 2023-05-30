import { Text } from "react-native";
import styles from "./styles";

type TitleProps = {
  text: string;
};

export default function Title({ text }: TitleProps) {
  return <Text style={styles.title}>{text}</Text>;
}
