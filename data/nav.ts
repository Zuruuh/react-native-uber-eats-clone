import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faMapMarkerAlt,
  faReceipt,
  faSearch,
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
    id: "address",
    title: "Address",
    icon: faMapMarkerAlt,
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
