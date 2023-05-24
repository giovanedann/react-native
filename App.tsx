import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [goal, setGoal] = useState<string>("");
  const [goalsList, setGoalsList] = useState<string[]>([]);

  function handleInputChange(text: string) {
    setGoal(text);
  }

  function handleAddGoalPress() {
    setGoalsList((previousGoals) => [...previousGoals, goal]);
    setGoal("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={goal}
          placeholder="Enter a goal!"
          onChangeText={handleInputChange}
        />
        <Button title="Add goal" onPress={handleAddGoalPress} />
      </View>

      <Text style={styles.title}>My goals</Text>

      <View style={styles.goalsList}>
        <ScrollView>
          {goalsList.map((goal) => (
            <View style={styles.goalItemContainer} key={goal}>
              <Text style={styles.goalItemText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
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
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },

  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    marginBottom: 24,
    fontWeight: "bold",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  goalsList: {
    flex: 5,
  },

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
