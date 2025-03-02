import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    flexGrow: 1,
    gap: 10,
  },
  gradientBorder: {
    position: "relative",
    padding: 2,
    borderRadius: 12,
    marginBottom: 8,
  },
  innerContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  loader: {
    marginVertical: 16,
  },
});
