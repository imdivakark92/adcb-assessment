import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { styles } from "./GradientHeader.styles";

export default function GradientHeader({ title }: Readonly<{ title: string }>) {
  return (
    <LinearGradient colors={["#6200ea", "#9c27b0"]} style={styles.header}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </LinearGradient>
  );
}
