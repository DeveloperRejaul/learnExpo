import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Index from "./src/16_rtk_pessimistic_manual_cache_update/screen/Index";
import { store } from "./src/16_rtk_pessimistic_manual_cache_update/rtk/app/store";
import FileSystem from "./src/17.FileSystem/FileSystem";
import Sqlite from "./src/18.sqlite/Sqlite";
import AutoSlider from "./src/20.dynamic_slider_automation/AutoSlider";

const App = () => {
    return (
        <>
            <StatusBar style="auto" />
            <Provider store={store}>
                <NativeBaseProvider>
                   <AutoSlider/>
                </NativeBaseProvider>
            </Provider>
        </>
    );
};

export default App;
