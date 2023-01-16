import { View } from "react-native";
import { Header } from "../components/Header/Header";

export const LinkListScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Group>
                    <Header.Title title="Links" />
                </Header.Group>
            </Header>
        </View>
    );
};
