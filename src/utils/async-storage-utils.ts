import AsyncStorage from "@react-native-async-storage/async-storage";

export const getItem = async (key: string): Promise<string | null> => {
    const value = await AsyncStorage.getItem(key);
    return value ? value : null;
};

export const setItem = async (key: string, value: string) => {
    return AsyncStorage.setItem(key, value);
};

export const removeItem = async (key: string) => {
    return AsyncStorage.removeItem(key);
};
