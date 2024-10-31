import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ServiceCard = ({ title, description }) => (_jsxs("div", { style: {
        width: "355.82px",
        height: "355.82px",
    }, className: "bg-purple-card rounded-[33.81px] p-8 relative", children: [_jsx("div", { className: "w-[96.6px] h-[96.6px] bg-orange-500 rounded-full absolute -top-12 right-8" }), _jsx("h3", { className: "text-white card-title mt-[63px] mb-4", children: title }), _jsx("p", { className: "text-gray-300 card-desc", children: description })] }));
const ServicesThree = () => {
    return (_jsx("section", { className: "bg-purple-primary py-16 h-[1099px]", children: _jsxs("div", { className: "container mx-auto pt-[153px]", children: [_jsxs("h2", { className: "services-title", children: [_jsx("span", { className: "text-white", children: "Our " }), _jsx("span", { className: "text-orange-500", children: "Services" })] }), _jsx("p", { className: "services-desc-three", children: "Boost Your Brand's Presence With Targeted Social Media Strategies Designed To Engage, Grow, And Convert Audiences Across All Platforms. Let Us Help You Connect Authentically And Drive Impactful Results." }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-[115px]", children: [_jsx(ServiceCard, { title: "PR And Publicity", description: "Build A Strong Public Image With Our Comprehensive PR Services. We Manage Your Media Relations And Foster Positive Relationships With The Media." }), _jsx(ServiceCard, { title: "Brand Films & Advertising", description: "Tell Your Story Through Powerful Brand Films. Our Creative Team Delivers High-Quality Brand Films And Advertising That Connects With Your Audience Emotionally." })] })] }) }));
};
export default ServicesThree;
