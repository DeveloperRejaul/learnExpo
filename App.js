import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FireBaseStore from "./src/06FirebadeFireStoreDatabaseCROD/Index.js";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FireBaseStore />
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
