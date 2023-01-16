import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { Header } from "../components/Header/Header";
import { SingleLineInput } from "../components/SingleLineInput";
import { Spacer } from "../components/Spacer";
import { Typography } from "../components/Typography";

export const AddLinkScreen = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const [url, setUrl] = useState("");

    const onPressBack = useCallback(() => {
        navigation.goBack();
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Group>
                    <Header.Title title="Add Link" />
                </Header.Group>
                <Header.Icon iconName="close" onPress={onPressBack} />
            </Header>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 24,
                }}
            >
                <SingleLineInput
                    value={url}
                    onChangeText={setUrl}
                    placeholder="https://example.com"
                    keyboardType="url"
                />
            </View>
            <Button onPress={function (): void {}}>
                <View
                    style={{ backgroundColor: url === "" ? "gray" : "black" }}
                >
                    <View
                        style={{
                            height: 52,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography color="white" fontSize={16}>
                            Add
                        </Typography>
                    </View>
                    <Spacer size={insets.bottom} />
                </View>
            </Button>
        </View>
    );
};
