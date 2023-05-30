import { StyleProp, Text, TextStyle } from "react-native";
import styles from "./styles";

type InstructionTextProps = {
  text: string;
  style?: StyleProp<TextStyle>;
};

export default function InstructionText({ text, style }: InstructionTextProps) {
  return <Text style={[styles.instruction, style]}>{String(text)}</Text>;
}
