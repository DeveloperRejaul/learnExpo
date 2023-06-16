import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/15.rtkQuaryCashingVhaibiar/rtk/app/store";
import Navigation from "./src/tutorial/MobX/Part_01/Navigation";

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            <Provider store={store}>
                <NativeBaseProvider>
                    <NavigationContainer>
                        <Navigation />
                    </NavigationContainer>
                </NativeBaseProvider>
            </Provider>
        </>
    );
}
