import { useNavigation } from "@react-navigation/native";
import { useCallback, useMemo } from "react";
import { FlatList, SectionList, View } from "react-native";
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

    const sectionData = useMemo(() => {
        const dataList: { [key: string]: any[] } = {};

        const makeDateString = (createdAt: string) => {
            const dateItem = new Date(createdAt);
            return `${dateItem.getFullYear()}-${
                dateItem.getMonth() + 1
            }-${dateItem.getDate()}`;
        };

        if (!data.list) return [];
        data.list.forEach((item) => {
            const dateString = makeDateString(item.createdAt);
            if (!dataList[dateString]) {
                dataList[dateString] = [item];
            } else {
                dataList[dateString].push(item);
            }
        });
        return Object.keys(dataList).map((key) => {
            return {
                title: key,
                data: dataList[key],
            };
        });
    }, [data]);

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Group>
                    <Header.Title title="Links" />
                </Header.Group>
            </Header>
            <SectionList
                style={{ flex: 1 }}
                sections={sectionData}
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
                renderSectionHeader={({ section: { title } }) => (
                    <View
                        style={{
                            paddingHorizontal: 12,
                            paddingVertical: 4,
                            backgroundColor: "white",
                        }}
                    >
                        <Typography fontSize={20} color={"gray"}>
                            {title}
                        </Typography>
                    </View>
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
