export interface DropDownItem {
  label: string;
  href: string;
}

export interface Navbaritemtype {
  label: string;
  href: string;
  isDropDown: boolean;
  dropDownData?: DropDownItem[];
}

export const Navbararray: Array<Navbaritemtype> = [
  {
    label: "Female",
    href: "female",
    isDropDown: true,
    dropDownData: [
      { label: "dresses", href: "/female/new-arrivals" },
      { label: "Trending  ", href: "/female/trending" },
      { label: "Sale", href: "/female/sale" }
    ]
  },
  {
    label: "Male",
    href: "/male",
    isDropDown: true,
    dropDownData: [
      { label: "New Arrivals", href: "/male/new-arrivals" },
      { label: "Trending", href: "/male/trending" },
      { label: "Sale", href: "/male/sale" }
    ]
  },
  {
    label: "Kids",
    href: "/kids",
    isDropDown: true,
    dropDownData: [
      { label: "New Arrivals", href: "/kids/new-arrivals" },
      { label: "Trending", href: "/kids/trending" },
      { label: "Sale", href: "/kids/sale" }
    ]
  },
  {
    label: "All Products",
    href: "/products",
    isDropDown: false
  }
];

export default Navbararray;