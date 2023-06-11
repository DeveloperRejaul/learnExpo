import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import RtkCashingBehavior from "./src/15.rtkQuaryCashingVhaibiar/Index";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/15.rtkQuaryCashingVhaibiar/rtk/app/store";

export default function App() {
    return (
        <>
            <StatusBar style="auto" />

            <Provider store={store}>
                <NativeBaseProvider>
                    <NavigationContainer>
                        <RtkCashingBehavior />
                    </NavigationContainer>
                </NativeBaseProvider>
            </Provider>
        </>
    );
}
