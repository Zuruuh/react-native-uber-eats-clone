import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faReceipt,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { navButton } from "types/nav";

export const navData = [
  {
    id: "home",
    title: "Home",
    icon: faHome,
  },
  {
    id: "browse",
    title: "Browse",
    icon: faSearch,
  },
  {
    id: "grocery",
    title: "Grocery",
    icon: faShoppingBag,
  },
  {
    id: "orders",
    title: "Orders",
    icon: faReceipt,
  },
  {
    id: "account",
    title: "Account",
    icon: faUser,
  },
] as navButton[];
