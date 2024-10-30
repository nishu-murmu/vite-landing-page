const HeroSection = () => {
  return (
    <section className="pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="text-white">Welcome To</span>
              <br />
              <span className="text-orange-500">Purple Haze Media,</span>
              <br />
              <span className="text-white">Where Creativity</span>
              <br />
              <span className="text-white">Meets Strategy.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Media Agency Established To
              <br />
              Help Brands Build And Develop
              <br />
              Their Presence In A Competitive
              <br />
              Digital Landscape.
            </p>
          </div>

          {/* Right Image with floating elements */}
          <div className="flex-1 relative">
            <img
              src="/hero-person.png"
              alt="Person with laptop"
              className="w-full h-auto max-w-lg mx-auto"
            />
            {/* Floating Elements */}
            <div className="absolute top-8 right-20 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              Influencer Marketing
            </div>
            <div className="absolute top-32 left-20 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              Social Media
            </div>
            <div className="absolute bottom-32 right-16 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              Digital Marketing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
