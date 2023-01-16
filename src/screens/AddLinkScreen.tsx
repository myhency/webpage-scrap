import { View } from "react-native";
import { Header } from "../components/Header/Header";

export const LinkListScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Group>
                    <Header.Title title="Add Link" />
                </Header.Group>
            </Header>
        </View>
    );
};
