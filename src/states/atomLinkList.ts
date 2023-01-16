import { atom } from "recoil";

export const atomLinkList = atom<{ list: [] }>({
    key: "MAIN/LINK_LIST",
    default: {
        list: [],
    },
});
