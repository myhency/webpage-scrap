import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import { RootNavigation } from "./src/navigation/RootNavigation";

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <RecoilRoot>
                    <RootNavigation />
                </RecoilRoot>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
