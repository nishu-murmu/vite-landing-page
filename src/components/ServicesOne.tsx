const ServiceCard = ({ title, description }: any) => (
  <div
    style={{
      width: "355.82px",
      height: "355.82px",
    }}
    className="bg-purple-card rounded-[33.81px] p-8 relative"
  >
    <div className="w-[96.6px] h-[96.6px] bg-orange-500 rounded-full absolute -top-12 right-8"></div>
    <h3 className="text-white card-title mt-[63px] mb-4">{title}</h3>
    <p className="text-gray-300 card-desc">{description}</p>
  </div>
);

const ServicesOne = () => {
  return (
    <section className="bg-orange-primary h-[1099px]">
      <div className="mx-auto pt-[153px]">
        <div className="h-[360px]">
          <h2 className="services-title">
            <span className="text-purple-950">Our </span>
            <span className="text-purple-950">Services</span>
          </h2>
          <p className="text-center text-purple-950 max-w-3xl mx-auto mb-16">
            Boost Your Brand's Presence With Targeted Social Media Strategies
            Designed To Engage, Grow, And Convert Audiences Across All
            Platforms. Let Us Help You Connect Authentically And Drive Impactful
            Results.
          </p>
        </div>

        <div className="flex h-[695px] pb-[144px] items-center bg-purple-primary justify-center gap-[46.18px]">
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
