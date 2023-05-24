import { useEffect, useState } from "react";
import {
  Button,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from "react-native";

export default function App() {
  const [goal, setGoal] = useState<string>("");

  function handleInputChange(text: string) {
    setGoal(text);
  }

  function handleAddGoalPress() {
    console.log("pressed");
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a goal!"
          onChangeText={handleInputChange}
        />
        <Button title="Add goal" onPress={handleAddGoalPress} />
      </View>

      <View style={styles.goalsList}>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  goalsList: {
    flex: 4,
  },
});
