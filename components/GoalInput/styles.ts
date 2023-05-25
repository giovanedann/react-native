import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 8,
  },

  buttonsContainer: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginTop: 8,
  },

  button: {
    width: "40%",
    marginHorizontal: 8,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "90%",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
