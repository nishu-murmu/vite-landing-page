import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RepeatingTextStrip = () => {
    // Creating an array of repeated text to ensure it fills the width
    const repeatedText = Array(20).fill("Purple Haze Media |"); // Increased count for wider screens
    return (_jsx("div", { className: "w-full relative h-[99px] bg-white overflow-hidden border-y border-gray-100", children: _jsx("div", { className: "absolute inset-0 flex items-center", children: _jsxs("div", { className: "flex whitespace-nowrap animate-scroll", children: [_jsx("div", { className: "flex", children: repeatedText.map((text, index) => (_jsx("span", { className: "repeating-strip text-[#F5F5F5] text-[4vh] font-bold px-2", children: text }, `first-${index}`))) }), _jsx("div", { className: "flex", children: repeatedText.map((text, index) => (_jsx("span", { className: "repeating-strip text-[#F5F5F5] text-[4vh] font-bold px-2", children: text }, `second-${index}`))) })] }) }) }));
};
export default RepeatingTextStrip;
