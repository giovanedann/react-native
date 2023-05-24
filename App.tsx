import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

type Goal = {
  id: string;
  text: string;
};

export default function App() {
  const [goalsList, setGoalsList] = useState<Goal[]>([]);

  function handleAddGoalPress(goal: string) {
    const newGoal = { id: Math.random().toString(), text: goal };
    setGoalsList((previousGoals) => [...previousGoals, newGoal]);
  }

  return (
    <View style={styles.container}>
      <GoalInput onAddGoalPress={handleAddGoalPress} />

      <Text style={styles.title}>My goals</Text>

      <View style={styles.goalsList}>
        <FlatList
          data={goalsList}
          renderItem={(goal) => <GoalItem title={goal.item.text} />}
          keyExtractor={(item) => item.id}
        />
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
});
