import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { styles } from "./styles";

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
