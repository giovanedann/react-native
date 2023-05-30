import { StyleSheet } from "react-native";
import { Colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
  },

  summary: {
    fontFamily: "poppins",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },

  summaryHighlight: {
    fontFamily: "poppins-bold",
    color: Colors.primary500,
  },
});

export default styles;
