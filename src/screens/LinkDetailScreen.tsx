import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { View } from "react-native";
import { Header } from "../components/Header/Header";

export const LinkDetailScreen = () => {
    const navigation = useNavigation();
    const onPressBack = useCallback(() => {
        navigation.goBack();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Group>
                    <Header.Icon iconName="arrow-back" onPress={onPressBack} />
                    <Header.Title title="Link detail" />
                </Header.Group>
            </Header>
        </View>
    );
};
