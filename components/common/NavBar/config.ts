export type NavItemConfig = {
  type?: NavMenu;
  title: string;
  url?: string;
  menuItems: MenuItem[];
};

type MenuItem = {
  title: string;
  url: string;
};

export enum NavMenu {
  introduction,
  services,
  library,
  pricing,
  contact,
}

const navBarItemConfigs: NavItemConfig[] = [
  {
    type: NavMenu.introduction,
    title: "Giới thiệu",
    menuItems: [
      {
        title: "Về chúng tôi",
        url: "/ve-chung-toi",
      },
      {
        title: "Quy trình làm việc",
        url: "/quy-trinh-lam-viec",
      },
    ],
  },
  {
    type: NavMenu.services,
    title: "Dịch vụ",
    menuItems: [
      {
        title: "Thiết kế nhà đẹp",
        url: "/du-an/thiet-ke-nha-dep",
      },
      {
        title: "Nội thất lung linh",
        url: "/du-an/noi-that-lung-linh",
      },
      {
        title: "Thi công xây dựng",
        url: "/du-an/thi-cong-xay-dung",
      },
      {
        title: "Cải tạo & sữa chữa nhà",
        url: "/du-an/cai-tao-sua-chua-nha",
      },
    ],
  },
  {
    type: NavMenu.library,
    title: "Thư viện",
    menuItems: [],
  },
  {
    type: NavMenu.pricing,
    title: "Báo giá",
    menuItems: [],
    url: "/bao-gia",
  },
  {
    type: NavMenu.contact,
    title: "Liên hệ",
    menuItems: [],
    url: "/lien-he",
  },
];
export default navBarItemConfigs;
