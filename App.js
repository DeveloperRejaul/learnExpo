import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/09_MobX_CRUD_APP/Navigation.js";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <NativeBaseProvider>
                    <Navigation />
                </NativeBaseProvider>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
