import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

type GoalInputProps = {
  onAddGoalPress: (text: string) => void;
};

export default function GoalInput({ onAddGoalPress }: GoalInputProps) {
  const [goal, setGoal] = useState<string>("");

  function handleAddGoal() {
    onAddGoalPress(goal);
    setGoal("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={goal}
        placeholder="Enter a goal!"
        onChangeText={(text) => setGoal(text)}
      />
      <Button title="Add goal" onPress={handleAddGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
