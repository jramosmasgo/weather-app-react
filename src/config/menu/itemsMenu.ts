import { HOME, PLACES, SEARCH } from "@/types/paths";
import { AiFillHome, AiFillSave } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

export const menuItems = [
  {
    id: 1,
    name: "My Location",
    path: HOME,
    icon: AiFillHome,
  },
  {
    id: 2,
    name: "Search",
    path: SEARCH,
    icon: FaSearch,
  },
  {
    id: 3,
    name: "Saved Places",
    path: PLACES,
    icon: AiFillSave,
  },
];
