import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.primary600,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },

  text: {
    fontFamily: "poppins",
  },
});

export default styles;
