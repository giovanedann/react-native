import { View, Text, StyleSheet } from "react-native";

type GoalItemProps = {
  title: string;
};

export default function GoalItem({ title }: GoalItemProps) {
  return (
    <View style={styles.goalItemContainer}>
      <Text style={styles.goalItemText}>{title}</Text>
    </View>
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
