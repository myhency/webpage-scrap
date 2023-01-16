import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinkDetailScreen } from "../screens/LinkDetailScreen";
import { LinkListScreen } from "../screens/LinkListScreen";

const Stack = createNativeStackNavigator();

export const LinkStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LinkList" component={LinkListScreen} />
            <Stack.Screen name="LinkDetail" component={LinkDetailScreen} />
        </Stack.Navigator>
    );
};
