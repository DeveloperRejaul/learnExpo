import { StatusBar } from "expo-status-bar";
import Navigation from "./src/09_MobX_CRUD_APP/Navigation.js";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Index from "./src/10_old_redux_Counter/index.js";

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            {/* <NavigationContainer> */}
            <NativeBaseProvider>
                {/* <Navigation /> */}
                <Index />
            </NativeBaseProvider>
            {/* </NavigationContainer> */}
        </>
    );
}
