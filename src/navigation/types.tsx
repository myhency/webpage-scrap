import type {
    CompositeScreenProps,
    NavigatorScreenParams,
} from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Link } from "../states/atomLinkList";

export type RootStackParamList = {
    LinkStack: NavigatorScreenParams<LinkStackParamList>;
    AddLink: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

export type LinkStackParamList = {
    LinkList: undefined;
    LinkDetail: { item: Link };
};

export type LinkStackScreenProps<T extends keyof LinkStackParamList> =
    CompositeScreenProps<
        NativeStackScreenProps<LinkStackParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
