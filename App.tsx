import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigation } from "./src/navigation/RootNavigation";

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <RootNavigation />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
