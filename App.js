import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FireBaseStores from "./src/07FirebaseStores/index.js";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FireBaseStores />
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
