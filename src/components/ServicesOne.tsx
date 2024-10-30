// src/components/ServicesOne.jsx

const ServiceCard = ({ title, description }: any) => (
  <div className="bg-purple-900/50 rounded-xl p-8 relative">
    <div className="w-12 h-12 bg-orange-500 rounded-full absolute -top-6 left-8"></div>
    <h3 className="text-white text-xl font-bold mb-4 mt-4">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </div>
);

const ServicesOne = () => {
  return (
    <section className="bg-orange-500 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="text-purple-950">Our </span>
          <span className="text-purple-950">Services</span>
        </h2>
        <p className="text-center text-purple-950 max-w-3xl mx-auto mb-16">
          Boost Your Brand's Presence With Targeted Social Media Strategies
          Designed To Engage, Grow, And Convert Audiences Across All Platforms.
          Let Us Help You Connect Authentically And Drive Impactful Results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ServiceCard
            title="Brand Identity"
            description="Your Brand Is More Than Just A Logo - It's Your Story. We Help You Position Your Brand With Visual Brand Identities That Resonate With Your Audience And Tell Your Story Authentically."
          />
          <ServiceCard
            title="Social Media Marketing"
            description="Harness The Power Of Social Media To Connect With Your Target Audience. Our Tailored Strategies Drive Traffic And Build Community Around Your Brand."
          />
          <ServiceCard
            title="Influencer Marketing"
            description="Leverage The Power Of Targeted Creative To Amplify Your Message. We Identify The Right Influencers To Reach Your Target Market And Drive Connections With Your Target Market."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesOne;
