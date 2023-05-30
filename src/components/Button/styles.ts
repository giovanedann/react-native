import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  container: {
    alignContent: "center",
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  title: {
    color: "#fff",
    textAlign: "center",
  },

  pressed: {
    backgroundColor: Colors.primary300,
    opacity: 0.75,
  },
});

export default styles;
