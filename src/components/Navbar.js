import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Logo from "./Logo";
const Navbar = () => {
    return (_jsx("nav", { className: "w-full pt-[75px] bg-purple-primary py-4", children: _jsxs("div", { className: "container mx-auto px-4 flex items-center", children: [_jsx(Logo, {}), _jsxs("div", { className: "hidden md:flex pl-[184px] pr-[51px] items-center space-x-[83px]", children: [_jsx("a", { href: "#", className: "text-white nav-item hover:text-orange-500", children: "Home" }), _jsx("a", { href: "#", className: "text-white nav-item hover:text-orange-500", children: "Our Services" }), _jsx("a", { href: "#", className: "text-white nav-item hover:text-orange-500", children: "About" }), _jsx("a", { href: "#", className: "text-white nav-item hover:text-orange-500", children: "Why Choose Us?" })] }), _jsx("button", { className: "bg-orange-500 text-black px-6 py-2 rounded hover:bg-orange-600 transition-colors", children: "Get In Touch" })] }) }));
};
export default Navbar;
