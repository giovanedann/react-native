import { Text } from "react-native";
import styles from "./styles";

type InstructionTextProps = {
  text: string;
};

export default function InstructionText({ text }: InstructionTextProps) {
  return <Text style={styles.instruction}>{String(text)}</Text>;
}
