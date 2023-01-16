import { atom, AtomEffect } from "recoil";
import { getItem, removeItem, setItem } from "../utils/async-storage-utils";

export interface Link {
    title: string;
    image: string;
    link: string;
    createdAt: string;
}

const asyncStorageEffect =
    (key: string): AtomEffect<{ list: Link[] }> =>
    ({ setSelf, onSet, trigger }) => {
        const loadPersisted = async () => {
            const savedValue = await getItem(key);
            if (savedValue !== null) {
                setSelf(JSON.parse(savedValue));
            }
        };

        if (trigger === "get") {
            loadPersisted();
        }

        onSet((newValue, _, isReset: boolean) => {
            console.debug("onSet", newValue);

            isReset ? removeItem(key) : setItem(key, JSON.stringify(newValue));
        });
    };

export const atomLinkList = atom<{ list: Link[] }>({
    key: "MAIN/LINK_LIST",
    default: {
        list: [] as Link[],
    },
    effects: [asyncStorageEffect("MAINLINK_LIST")],
});
