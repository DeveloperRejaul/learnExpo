import { StatusBar } from "expo-status-bar";
import Navigation from "./src/09_MobX_CRUD_APP/Navigation.js";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
// import Index from "./src/12_rtk_advence/index.js";
// import Index from "./src/11_oldReduxCrud/index.js";
import { Provider } from "react-redux";
import { store } from "./src/12_rtk_advence/app/store.js";
import Index from "./src/13_Video_player/index.js";

export default function App() {
    return (
        <>
            <StatusBar style="auto" />
            {/* <NavigationContainer> */}
            <NativeBaseProvider>
                <Index />
            </NativeBaseProvider>
            {/* </NavigationContainer> */}
        </>
    );
}
