import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Enter a goal!" />
        <Button title="Add goal" />
      </View>

      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    paddingHorizontal: 8,
  },
});
