import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  container: {
    alignContent: "center",
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  title: {
    color: "#fff",
    textAlign: "center",
  },

  pressed: {
    backgroundColor: "#a71d62",
    opacity: 0.75,
  },
});

export default styles;
