import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRecoilValue } from "recoil";
import { Button } from "../components/Button";
import { Header } from "../components/Header/Header";
import { Icon } from "../components/Icons";
import { Spacer } from "../components/Spacer";
import { Typography } from "../components/Typography";
import { atomLinkList, Link } from "../states/atomLinkList";

export const LinkListScreen = () => {
    const navigation = useNavigation();
    const safeAreaInset = useSafeAreaInsets();
    const data = useRecoilValue(atomLinkList);

    const onPressAddButton = useCallback(() => {
        navigation.navigate("AddLink");
    }, []);
    const onPressListItem = useCallback((item: Link) => {
        navigation.navigate("LinkStack", {
            screen: "LinkDetail",
            params: { item },
        });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Group>
                    <Header.Title title="Links" />
                </Header.Group>
            </Header>
            <FlatList
                style={{ flex: 1 }}
                data={data.list}
                renderItem={({ item }) => (
                    <Button
                        onPress={() => onPressListItem(item)}
                        style={{ paddingHorizontal: 24, paddingVertical: 12 }}
                    >
                        <View>
                            <Typography fontSize={20}>{item.link}</Typography>
                            <Spacer size={4} />
                            <Typography color="gray">
                                {item.title !== ""
                                    ? `${item.title.slice(0, 20)} | `
                                    : ""}
                                {new Date(item.createdAt).toLocaleString()}{" "}
                            </Typography>
                        </View>
                    </Button>
                )}
            />
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
