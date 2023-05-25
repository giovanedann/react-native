import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

type Goal = {
  id: string;
  text: string;
};

export default function App() {
  const [goalsList, setGoalsList] = useState<Goal[]>([]);
  const [isAddGoalModalOpen, setIsAddGoalModalOpen] = useState<boolean>(false);

  function handleAddGoalPress(goal: string) {
    const newGoal = { id: Math.random().toString(), text: goal };
    setGoalsList((previousGoals) => [...previousGoals, newGoal]);
  }

  function handleRemoveGoal(id: string) {
    setGoalsList((previousGoals) =>
      previousGoals.filter((goal) => goal.id !== id)
    );
  }

  return (
    <View style={styles.container}>
      <Button
        title="Add new goal"
        color="#5e0acc"
        onPress={() => setIsAddGoalModalOpen(true)}
      />

      <GoalInput
        onAddGoalPress={handleAddGoalPress}
        isOpen={isAddGoalModalOpen}
      />

      <Text style={styles.title}>My goals</Text>

      <View style={styles.goalsList}>
        <FlatList
          data={goalsList}
          renderItem={(goal) => (
            <GoalItem
              title={goal.item.text}
              handlePress={() => handleRemoveGoal(goal.item.id)}
            />
          )}
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
