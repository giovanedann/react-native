import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";

type GoalItemProps = {
  title: string;
  handlePress: () => void;
};

export default function GoalItem({ title, handlePress }: GoalItemProps) {
  return (
    <Pressable onPress={handlePress}>
      <View style={styles.goalItemContainer}>
        <Text style={styles.goalItemText}>{title}</Text>
      </View>
    </Pressable>
  );
}
