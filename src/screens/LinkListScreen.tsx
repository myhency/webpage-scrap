import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { Header } from "../components/Header/Header";
import { Icon } from "../components/Icons";
import { Spacer } from "../components/Spacer";
import { Typography } from "../components/Typography";

export const LinkListScreen = () => {
    const navigation = useNavigation();
    const safeAreaInset = useSafeAreaInsets();
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
            <View
                style={{
                    position: "absolute",
                    right: 24,
                    bottom: 24 + safeAreaInset.bottom,
                }}
            >
                <Button onPress={onPressAddButton}>
                    <View
                        style={{
                            width: 52,
                            height: 52,
                            borderRadius: 26,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "black",
                        }}
                    >
                        <Icon name="add" size={32} color="white" />
                    </View>
                </Button>
            </View>
        </View>
    );
};
