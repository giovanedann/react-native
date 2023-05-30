import { View } from "react-native";
import styles from "./styles";
import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return <View style={styles.container}>{children}</View>;
}
