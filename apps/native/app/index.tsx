import { StyleSheet, View } from "react-native";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <View style={styles.container}>
      <Posts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
    justifyContent: "center",
  },
});
