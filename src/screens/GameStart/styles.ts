import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  textInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
  },

  buttonsContainer: {
    alignItems: "stretch",
    flexDirection: "row",
  },

  buttonContainer: {
    flex: 1,
  },
});

export default styles;
