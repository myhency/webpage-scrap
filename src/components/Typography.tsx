import { Text } from "react-native";

interface Props {
    color?: string;
    fontSize?: number;
    children?: React.ReactNode;
}

export const Typography = ({ color, fontSize = 16, children }: Props) => {
    return <Text style={{ color, fontSize }}>{children}</Text>;
};
