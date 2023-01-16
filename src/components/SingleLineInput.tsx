import { useState } from "react";
import {
    KeyboardTypeOptions,
    StyleProp,
    TextInput,
    TextStyle,
    View,
} from "react-native";

interface Props {
    value: string;
    placeholder?: string;
    style?: StyleProp<TextStyle>;
    fontSize?: number;
    keyboardType?: KeyboardTypeOptions;
    onChangeText: (text: string) => void;
}

export const SingleLineInput = ({
    value,
    placeholder,
    style,
    fontSize,
    keyboardType,
    onChangeText,
}: Props) => {
    const [focused, setFocused] = useState(false);

    return (
        <View
            style={{
                alignSelf: "stretch",
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: focused ? "black" : "gray",
            }}
        >
            <TextInput
                keyboardType={keyboardType ?? "default"}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={[style, { fontSize: fontSize ?? 20 }]}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </View>
    );
};
