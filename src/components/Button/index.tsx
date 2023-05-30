import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import { ReactNode } from "react";

type ButtonProps = {
  title?: string;
  onPress: () => void;
  icon?: ReactNode;
};

export default function Button({ title, onPress, icon }: ButtonProps) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed ? [styles.container, styles.pressed] : styles.container
        }
      >
        {title && <Text style={styles.title}>{title}</Text>}
        {icon && icon}
      </Pressable>
    </View>
  );
}
