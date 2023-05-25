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
        onCancelPress={() => setIsAddGoalModalOpen(false)}
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

  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    marginBottom: 24,
    fontWeight: "bold",
  },

  goalsList: {
    flex: 5,
  },
});
