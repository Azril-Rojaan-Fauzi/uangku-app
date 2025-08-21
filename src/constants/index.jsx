import { BanknoteArrowDown, BanknoteArrowUp, Home } from "lucide-react";

export const navbarLinks = [
  {
    title: "Dashboard",
    links: [
      {
        label: "Dashboard",
        icon: Home,
        path: "/",
      },
    ],
  },
  {
    title: "Catatan",
    links: [
      {
        label: "Pemasukan",
        icon: BanknoteArrowUp, // icon pemasukan
        path: "/pemasukan",
      },
      {
        label: "Pengeluaran",
        icon: BanknoteArrowDown, // icon pengeluaran
        path: "/pengeluaran",
      },
    ],
  },
];
