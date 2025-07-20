const AboutPage = () => {
  return (
    <div className="md:h-[220vh] h-[155vh] ">
      <div className="md:h-[500px] h-[380px] bg-[#eee6da] md:pt-[14em] pt-[10em] md:px-28 px-10">
        <h1 className="md:text-7xl text-6xl tracking-wider text-[#5c6a55]">About Us</h1>
        <p className="text-neutral-500 md:text-4xl text-xl md:w-3/4 w-full tracking-wider leading-tight font-thin pt-6">
          Brighton's Zen Reiki Studio Embracing the Four Elements for Holistic
          Healing Connection.
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 relative md:px-44 md:py-34 px-6 py-12 flex md:flex-row flex-col">
        <img
          src="/assets/images/bg_layout.jpg"
          className="absolute z-20 md:h-[700px] md:w-[600px] h-[300px] w-[300px] object-cover"
          alt="dot"
        />
        <img
          src="/assets/images/bio_edited.jpg"
          className="object-cover md:h-[700px] md:w-[600px] h-[300px] w-[300px] md:left-56 md:top-48 left-14 top-20  absolute z-30 "
          alt="Reiki Master"
        />
        <div className="md:w-[600px] w-full absolute right-0 md:py-20 pt-[22em] md:pr-20 p-10">
          <p className="text-gray-600 tracking-wider md:text-3xl text-xl font-thin">
            Ezgi Ates - Qualified Reiki Master.
          </p>
          <br />
          <h1 className="md:text-2xl text-3xl tracking-wider text-gray-600">
            <em>Member of The Reiki Association</em>
          </h1>
          <br />
          <p className="text-gray-600 tracking-wider md:text-2xl text-xl font-thin">
            I'm Ezgi, a Reiki Master and healer with a lifelong sensitivity to
            energy and emotion. My journey into Reiki began during a challenging
            time, when a single session brought profound peace and clarity. That
            moment sparked a deep calling to help others heal. <br /><br /> Inspired by my
            great-grandmother, a natural healer. I’ve continued her legacy
            through hands-on energy work, completing Reiki Levels I, II, and
            Master certification. Today, I offer sessions grounded in
            compassion, intuition, and the belief that we all hold the power to
            heal. Reiki is more than a practice, it’s who I am. It’s an honour
            to walk this path with those seeking balance, peace, and
            transformation. <br /><br /> With gratitude and light,
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
