import { useState } from "react";
import { Button, TextInput, View, Modal } from "react-native";
import { styles } from "./styles";

type GoalInputProps = {
  onAddGoalPress: (text: string) => void;
  onCancelPress: () => void;
  isOpen: boolean;
};

export default function GoalInput({
  onAddGoalPress,
  isOpen,
  onCancelPress,
}: GoalInputProps) {
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

        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancelPress} />
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={handleAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
