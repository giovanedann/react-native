import { useState } from "react";
import { Button, TextInput, View, Modal, Image } from "react-native";
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
    onCancelPress(); // closes the modal
  }

  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/goal.png")}
        />

        <TextInput
          style={styles.textInput}
          value={goal}
          placeholder="Enter a goal!"
          onChangeText={(text) => setGoal(text)}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#f31282" onPress={onCancelPress} />
          </View>
          <View style={styles.button}>
            <Button title="Add goal" color="#5f1eb4" onPress={handleAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
