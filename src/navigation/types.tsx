import type {
    CompositeScreenProps,
    NavigatorScreenParams,
} from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    LinkStack: NavigatorScreenParams<LinkStackParamList>;
    AddLink: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

export type LinkStackParamList = {
    LinkList: undefined;
    LinkDetail: undefined;
};

export type HomeStackScreenProps<T extends keyof LinkStackParamList> =
    CompositeScreenProps<
        NativeStackScreenProps<LinkStackParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
