import { useState } from "react";
import { Button, TextInput, View, Modal } from "react-native";
import { styles } from "./styles";

type GoalInputProps = {
  onAddGoalPress: (text: string) => void;
  isOpen: boolean;
};

export default function GoalInput({ onAddGoalPress, isOpen }: GoalInputProps) {
  const [goal, setGoal] = useState<string>("");

  function handleAddGoal() {
    onAddGoalPress(goal);
    setGoal("");
  }

  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={goal}
          placeholder="Enter a goal!"
          onChangeText={(text) => setGoal(text)}
        />
        <Button title="Add goal" onPress={handleAddGoal} />
      </View>
    </Modal>
  );
}
