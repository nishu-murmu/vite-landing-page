const ProfileSection = () => {
  return (
    <section className="bg-purple-darker py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 ">
        <div className=" flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Left Content */}
          <div className="max-w-xl profile-container">
            <h2 className="profile-name">Yogesh Pawar</h2>
            <h3 className="text-white text-xl mb-6">
              Founder - Purple Haze Media
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-lg">
              With A Passion For Marketing And A Strategic Approach To Business,
              I Specialize In Creating Impactful Solutions That Drive Growth And
              Elevate Brands. My Experience Spans Market Research, Innovative
              Campaign Strategies, And Data-Driven Decision- Making, All Aimed
              At Connecting Businesses With Their Ideal Audience.
            </p>
          </div>

          {/* Right Image */}
          <div className="image-container relative">
            <img
              src="/images/Yogesh.png"
              alt="Yogesh Pawar"
              className="w-[400px] h-auto relative z-10"
            />
          </div>
        </div>

        {/* Background Text Effect */}
        <div className="name-watermark1 absolute bottom-0 right-0 text-purple-900/20 text-[180px] font-bold leading-none select-none">
          <div className="relative -right-8">YOGESH</div>
          <div className="relative -right-8">PAWAR</div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
