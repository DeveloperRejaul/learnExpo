import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ReduxToolKitRtkQuery from "./src/02ReduxToolkitRtkQuary/index.js";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ReduxToolKitRtkQuery />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
