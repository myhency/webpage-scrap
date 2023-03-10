import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRecoilState } from "recoil";
import { Button } from "../components/Button";
import { Header } from "../components/Header/Header";
import { Icon } from "../components/Icons";
import { RemoteImage } from "../components/RemoteImage";
import { SingleLineInput } from "../components/SingleLineInput";
import { Spacer } from "../components/Spacer";
import { Typography } from "../components/Typography";
import { atomLinkList, Link } from "../states/atomLinkList";
import { getClipboardString } from "../utils/clipboard-utils";
import { getOpenGraphData } from "../utils/open-graph-tag-utils";

export const AddLinkScreen = () => {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const [_, updateList] = useRecoilState(atomLinkList);
    const [url, setUrl] = useState("");
    const [metaData, setMetaData] = useState(null);
    const [loading, setLoading] = useState(false);
    const { width } = useWindowDimensions();

    const onPressBack = useCallback(() => {
        navigation.goBack();
    }, []);

    const onPressSave = useCallback(() => {
        if (url === "") {
            return;
        }
        updateList((prevState) => {
            const list = [
                {
                    title: (metaData as any).title || "",
                    image: (metaData as any).image || "",
                    link: url,
                    createdAt: new Date().toISOString(),
                },
            ] as Link[];

            return {
                list: list.concat(prevState.list),
            };
        });

        setUrl("");
        setMetaData(null);
    }, [url]);

    const onGetClipboardString = useCallback(async () => {
        const clipboardString = await getClipboardString();
        if (
            clipboardString.startsWith("http://") ||
            clipboardString.startsWith("https://")
        ) {
            setUrl(clipboardString);
            const result = await getOpenGraphData(clipboardString);
            setMetaData(result);
        }
    }, []);

    useEffect(() => {
        //https://gather.town
        onGetClipboardString();
    }, [url, metaData]);

    const onSubmitEditing = useCallback(async () => {
        setLoading(true);
        const result = await getOpenGraphData(url);
        setMetaData(result);
        setLoading(false);
    }, [url]);

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
                    justifyContent: "flex-start",
                    paddingTop: 32,
                    paddingHorizontal: 24,
                }}
            >
                <View>
                    <SingleLineInput
                        value={url}
                        onChangeText={setUrl}
                        placeholder="https://example.com"
                        keyboardType="url"
                        onSubmitEditing={onSubmitEditing}
                    />
                    <View
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            onPress={() => {
                                setUrl("");
                                setMetaData(null);
                            }}
                        >
                            <Icon name="close" size={24} color={"black"} />
                        </Button>
                    </View>
                </View>
                {loading ? (
                    <>
                        <Spacer size={20} />
                        <View
                            style={{
                                borderWidth: 1,
                                borderRadius: 4,
                                borderColor: "gray",
                            }}
                        >
                            <Spacer size={(width - 48) * 0.5} />
                            <Spacer size={50} />

                            <View
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    right: 0,
                                    top: 0,
                                    bottom: 0,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <ActivityIndicator />
                            </View>
                        </View>
                    </>
                ) : (
                    metaData && (
                        <>
                            <Spacer size={20} />
                            <View
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 4,
                                    borderColor: "gray",
                                }}
                            >
                                <RemoteImage
                                    url={(metaData as any).image}
                                    width={width - 48}
                                    height={(width - 48) * 0.5}
                                />
                                <View
                                    style={{
                                        paddingHorizontal: 12,
                                        paddingVertical: 8,
                                    }}
                                >
                                    <Spacer size={10} />
                                    <Typography fontSize={20} color="black">
                                        {(metaData as any).title}
                                    </Typography>
                                    <Spacer size={4} />
                                    <Typography fontSize={16} color="gray">
                                        {(metaData as any).description}
                                    </Typography>
                                </View>
                            </View>
                        </>
                    )
                )}
            </View>
            <Button onPress={onPressSave}>
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
