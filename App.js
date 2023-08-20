import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Index from "./src/16_rtk_pessimistic_manual_cache_update/screen/Index";
import { store } from "./src/16_rtk_pessimistic_manual_cache_update/rtk/app/store";
import FileSystem from "./src/17.FileSystem/FileSystem";

const App = () => {
    return (
        <>
            <StatusBar style="auto" />
            <Provider store={store}>
                <NativeBaseProvider>
                    {/* <NavigationContainer> */}
                    {/* <Index /> */}
                    {/* </NavigationContainer> */}
                    <FileSystem/>
                </NativeBaseProvider>
            </Provider>
        </>
    );
};

export default App;
