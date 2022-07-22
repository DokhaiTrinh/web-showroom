export type NavItemConfig = {
  title: string;
  url?: string;
  menuItems: MenuItem[];
};

type MenuItem = {
  title: string;
  url: string;
};

const navBarItemConfigs: NavItemConfig[] = [
  {
    title: "Giới thiệu",
    menuItems: [
      {
        title: "Về chúng tôi",
        url: "/ve-chung-toi",
      },
    ],
  },
  {
    title: "Dịch vụ",
    menuItems: [],
  },
  {
    title: "Thư viện",
    menuItems: [],
  },
  {
    title: "Báo giá",
    menuItems: [],
    url: "/",
  },
  {
    title: "Liên hệ",
    menuItems: [],
    url: "/",
  },
];
export default navBarItemConfigs;
