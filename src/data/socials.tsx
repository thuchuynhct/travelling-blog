import {
    RiFacebookFill,
    RiInstagramLine,
    RiTwitterLine,
    RiYoutubeLine,
} from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa"

export type SocialType = {
    link: string;
    icon: JSX.Element;
};
export const soicals: SocialType[] = [
    { link: "#!", icon: <RiFacebookFill /> },
    { link: "#!", icon: <RiInstagramLine /> },
    { link: "#!", icon: <RiTwitterLine /> },
    { link: "#!", icon: <RiYoutubeLine /> },
    { link: "#!", icon: <FaPinterestP /> },
];
