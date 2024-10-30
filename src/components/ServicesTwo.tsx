const ServiceCard = ({ title, description }: any) => (
  <div className="bg-purple-900/50 rounded-xl p-8 relative">
    <div className="w-12 h-12 bg-orange-500 rounded-full absolute -top-6 left-8"></div>
    <h3 className="text-white text-xl font-bold mb-4 mt-4">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

const ServicesTwo = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ServiceCard
            title="Political Campaigns"
            description="In The Fast-Paced World Of Politics, Every Connection Counts. We Help You Create Campaigns That Resonate With Constituents And Drive Voter Engagement."
          />
          <ServiceCard
            title="Meta Ads"
            description="Maximize Your ROI With Our Expertise In Meta Ads. We Create And Manage Targeted Campaigns That Reach Your Core Audience And Convert Leads Into Loyal Customers."
          />
          <ServiceCard
            title="Lead Generation"
            description="Turn Potential Customers Into Lifelong Advocates. Our Lead Generation Strategies Are Designed To Attract, Nurture, And Convert Leads Effectively."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesTwo;
