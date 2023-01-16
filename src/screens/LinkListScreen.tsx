import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { View } from "react-native";
import { Button } from "../components/Button";
import { Header } from "../components/Header/Header";
import { Spacer } from "../components/Spacer";
import { Typography } from "../components/Typography";

export const LinkListScreen = () => {
    const navigation = useNavigation();
    const onPressButton = useCallback(() => {
        navigation.navigate("LinkStack", { screen: "LinkDetail" });
    }, []);
    const onPressAddButton = useCallback(() => {
        navigation.navigate("AddLink");
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Group>
                    <Header.Title title="Links" />
                </Header.Group>
            </Header>
            <View>
                <Button onPress={onPressButton}>
                    <Typography fontSize={16}>Go to link detail</Typography>
                </Button>
                <Spacer size={12} />
                <Button onPress={onPressAddButton}>
                    <Typography fontSize={16}>Go to add link</Typography>
                </Button>
            </View>
        </View>
    );
};
