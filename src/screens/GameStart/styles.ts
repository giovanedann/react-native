import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 32,
    marginHorizontal: 24,
    padding: 16,
    gap: 16,
    backgroundColor: Colors.primary600,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  instruction: {
    color: Colors.accent500,
    fontSize: 20,
    textAlign: "center",
  },

  textInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
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
