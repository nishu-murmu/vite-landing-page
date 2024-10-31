import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProfileSection from "./components/ProfileSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { DividerIcon } from "./components/Icons";
import ServicesOne from "./components/ServicesOne";
import ServicesTwo from "./components/ServicesTwo";
import ServicesThree from "./components/ServicesThree";
import RepeatingTextStrip from "./components/RepeatingStrip";
function App() {
    return (_jsxs("div", { className: "min-h-screen bg-purple-primary", children: [_jsx(Navbar, {}), _jsx(HeroSection, {}), _jsx(RepeatingTextStrip, {}), _jsx(ServicesOne, {}), _jsx(DividerIcon, {}), _jsx(ServicesTwo, {}), _jsx(DividerIcon, {}), _jsx(ServicesThree, {}), _jsx(DividerIcon, {}), _jsx(WhyChooseUs, {}), _jsx(DividerIcon, {}), _jsx(ProfileSection, {}), _jsx(DividerIcon, {}), _jsx(ContactForm, {}), _jsx(DividerIcon, {}), _jsx(Footer, {})] }));
}
export default App;
