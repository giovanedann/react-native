import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";

type GoalItemProps = {
  title: string;
  handlePress: () => void;
};

export default function GoalItem({ title, handlePress }: GoalItemProps) {
  return (
    <View style={styles.goalItemContainer}>
      <Pressable
        onPress={handlePress}
        android_ripple={{ color: "#370679" }}
        style={({ pressed }) => pressed && styles.goalItemTextPressed}
      >
        <Text style={styles.goalItemText}>{title}</Text>
      </Pressable>
    </View>
  );
}
