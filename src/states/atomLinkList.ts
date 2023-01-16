import { atom } from "recoil";

export interface Link {
    title: string;
    image: string;
    link: string;
    createdAt: string;
}

export const atomLinkList = atom<{ list: Link[] }>({
    key: "MAIN/LINK_LIST",
    default: {
        list: [],
    },
});
