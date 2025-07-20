const SessionsPage = () => {
  return (
    <div className="min-h-screen md:h-[325vh] h-[220vh]">
      {/* Hero Section */}
      <div className="md:h-[500px] h-[400px] bg-[#eee6da] md:pt-[14em] pt-[10em] md:px-28 px-10">
        <h1 className="md:text-7xl text-6xl tracking-wider text-[#5c6a55]">Sessions</h1>
        <p className="text-neutral-500 md:text-4xl text-xl md:w-3/4 w-full tracking-wider leading-tight font-thin pt-6">
          Transformative healing sessions designed to restore balance, release
          energy blockages, and reconnect you with your inner calm.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row md:px-28 md:py-20 bg-white gap-16">
        {/* Image Stack */}
        <div className="relative w-full lg:w-1/2 md:min-h-[700px] min-h-[400px]">
          <img
            src="/assets/images/bg_layout.jpg"
            className="object-cover md:h-[700px] md:w-[600px] h-[400px] w-[300px] absolute z-20 md:left-12 md:top-12 left-9 top-9"
            alt="Background Layout"
          />
          <img
            src="/assets/images/studio4-edited.png"
            className="object-fit md:h-[700px] md:w-[600px] h-[400px] w-[300px] absolute z-30 md:left-28 md:top-28 left-14 top-14 shadow-lg"
            alt="Reiki Studio"
          />
        </div>

        {/* Text Block */}
        <div className="w-full lg:w-1/2 pt-10 lg:pt-40 md:pl-20 pl-6">
          <p className="uppercase tracking-wider md:text-2xl text-xl font-thin text-[#5c6a55] mb-4">
            A great studio full of calmness
          </p>
          <h2 className="md:text-5xl text-4xl font-semibold text-[#5c6a55] mb-6 leading-normal">
            A Sacred Space for <em>Energy</em> Healing
          </h2>
          <p className="md:text-lg text-md font-thin md:pr-0 pr-4 text-neutral-700 leading-relaxed">
            Each session at Zen Reiki Studio is thoughtfully crafted to guide
            you through a journey of relaxation, emotional release, and
            energetic renewal. Whether you're new to energy work or deepening
            your practice, our tranquil environment and intuitive approach
            ensure a healing experience tailored to your needs.
          </p>
          <a
          href="#"
          className="uppercase border-b border-[#5c6a55] text-[#5c6a55] tracking-widest font-thin py-2 px-8 relative top-10 hover:bg-[#5c6a55] hover:text-amber-50 duration-300"
        >
          Book Now
        </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row md:px-28 py-28 bg-white gap-16">
        {/* Text Block */}
        <div className="w-full lg:w-1/2 pt-10 lg:pt-40 md:pl-20 pl-6">
          <p className="uppercase tracking-wider md:text-2xl text-xl font-thin text-[#5c6a55] mb-4">
            Where healing meets harmony
          </p>
          <h2 className="md:text-5xl text-4xl font-semibold text-[#5c6a55] mb-6 leading-normal">
            Discover a Sanctuary for <em>Inner Peace</em>
          </h2>
          <p className="md:text-lg text-md font-thin text-neutral-700 leading-relaxed md:pr-0 pr-4">
            Our sessions offer more than just relaxation — they provide a
            pathway to reconnect with your authentic self. Through intentional
            energy work, intuitive touch, and a serene setting, we help you
            release tension, clear stagnant energy, and awaken a sense of deep
            inner clarity. Each experience is personalised, grounding you in
            stillness and guiding you toward emotional and energetic balance.
          </p>
        </div>

        {/* Image Stack */}
        <div className="relative w-full lg:w-1/2 md:min-h-[700px] min-h-[400px]">
          <img
            src="/assets/images/bg_layout.jpg"
            className="object-cover md:h-[700px] md:w-[600px] h-[330px] w-[330px] absolute z-20 md:left-12 md:top-12 left-4 top-4"
            alt="Background Layout"
          />
          <img
            src="/assets/images/zenreception.jpg"
            className="object-fit md:h-[700px] md:w-[600px] h-[330px] w-[330px] absolute z-30 md:left-28 md:top-28 left-10 top-10 shadow-lg"
            alt="Reiki Studio"
          />
        </div>
      </div>
    </div>
  );
};

export default SessionsPage;
