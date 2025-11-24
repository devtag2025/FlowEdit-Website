import Logo from "../Logo";
import NavItems from "./NavItems";

const Navbar = () => {
  const navItems = [
    { label: "home", to: "/" },
    { label: "pricing", to: "/pricing" },
    { label: "portfolio", to: "/portfolio" },
  ];
  return (
    <nav className="py-16 px-20.5 flex items-center justify-between font-inter fixed top-0 left-0 w-full text-white z-50">
      <Logo />
      <NavItems navItems={navItems} />
    </nav>
  );
};

export default Navbar;
