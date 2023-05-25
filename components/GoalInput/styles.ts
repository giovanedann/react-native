import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    gap: 8,
    backgroundColor: "#311b6b",
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

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  textInput: {
    borderWidth: 1,
    color: "#120438",
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    width: "90%",
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 8,
  },
});
