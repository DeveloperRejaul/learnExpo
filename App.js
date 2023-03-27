import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import ReduxToolKit from "./src/01ReduxToolkit/index.js";
import AdvaceUseseOfReactContexte from "./src/03AdvaceUseseOfReactContexte/index.js";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AdvaceUseseOfReactContexte />
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
