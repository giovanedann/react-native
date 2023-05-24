import { View, Text, StyleSheet, Pressable } from "react-native";

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

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  goalItemText: {
    color: "#fff",
  },
});
