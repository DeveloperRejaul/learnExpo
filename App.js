import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FirebaseRealTimeDataBase from "./src/05FireBaseRealtimeDatabassCROD/index.js";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FirebaseRealTimeDataBase />
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
