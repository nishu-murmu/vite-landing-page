const ServiceCard = ({ title, description }: any) => (
  <div className="bg-purple-900/50 rounded-xl p-8 relative">
    <div className="w-12 h-12 bg-orange-500 rounded-full absolute -top-6 left-8"></div>
    <h3 className="text-white text-xl font-bold mb-4 mt-4">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

const ServicesThree = () => {
  return (
    <section className="bg-purple-950 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-white">Our </span>
          <span className="text-orange-500">Services</span>
        </h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-16">
          Boost Your Brand's Presence With Targeted Social Media Strategies
          Designed To Engage, Grow, And Convert Audiences Across All Platforms.
          Let Us Help You Connect Authentically And Drive Impactful Results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ServiceCard
            title="PR And Publicity"
            description="Build A Strong Public Image With Our Comprehensive PR Services. We Manage Your Media Relations And Foster Positive Relationships With The Media."
          />
          <ServiceCard
            title="Brand Films & Advertising"
            description="Tell Your Story Through Powerful Brand Films. Our Creative Team Delivers High-Quality Brand Films And Advertising That Connects With Your Audience Emotionally."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesThree;
