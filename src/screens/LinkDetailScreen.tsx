import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback } from "react";
import { View } from "react-native";
import WebView from "react-native-webview";
import { Header } from "../components/Header/Header";
import { LinkStackScreenProps } from "../navigation/types";

export const LinkDetailScreen = () => {
    const route = useRoute<LinkStackScreenProps<"LinkDetail">["route"]>();
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
            <WebView
                style={{ flex: 1 }}
                source={{ uri: route.params.item.link }}
            />
        </View>
    );
};
