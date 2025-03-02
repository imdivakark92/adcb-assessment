import { Stack } from "expo-router";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GradientHeader = ({ title }: Readonly<{ title: string }>) => {
  return (
    <LinearGradient colors={["#6200ea", "#9c27b0"]} style={styles.header}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </LinearGradient>
  );
};

const AppLayout = () => {
  return (
    <Stack
      screenOptions={{
        header: ({ options }) => (
          <GradientHeader title={options.title ?? "Home"} />
        ),
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTitle: "",
      }}
    >
      <Stack.Screen name="index" options={{ title: "ADCB Assessment" }} />
    </Stack>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  overlay: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default AppLayout;
