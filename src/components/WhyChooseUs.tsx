const WhyChooseUs = () => {
  return (
    <section className="bg-orange-primary py-24 relative overflow-hidden">
      {/* Large Question Mark Background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-[400px] font-bold text-orange-light select-none">
          ?
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-purple-950 mb-10">
            Why Choose Us?
          </h2>
          <p className="text-purple-950 text-lg leading-relaxed">
            At Purple Haze Media, We Believe In Bold Ideas And Smart Execution.
            <br />
            Our Team Of Experienced Professionals Is Dedicated To Delivering
            <br />
            Results That Matter. Whether You're Launching A New Brand, Running
            <br />
            A Political Campaign, Or Enhancing Your Online Presence, We Have
            <br />
            The Tools And Expertise To Help You Succeed.
          </p>

          {/* Light Bar Decoration */}
          <div className="mt-16 flex justify-center items-center gap-4">
            <div className="w-16 h-16 bg-orange-400/30 rounded-lg"></div>
            <div className="w-64 h-1 bg-orange-400/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
