import { Stack } from "expo-router";
import GradientHeader from "./components/GradientHeader";

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

export default AppLayout;
