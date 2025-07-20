const Lotus = () => {
  return (
    <div className="md:h-screen h-[120vh] relative flex items-center justify-center mb-20">
      <div className="inset-0 bg-black/40 z-50 absolute top-0 left-0 w-full h-full"></div>
      <img
        src="/assets/images/lotuswater.jpg"
        className="object-cover w-full h-full"
        alt="Lotus"
      />
      {/* Content Section */}

      <div className="absolute md:top-1/3 top-1/4 text-center z-50">
        <h1 className="text-slate-200 md:text-8xl text-5xl tracking-wider">
          Embrace the 4 Principles
        </h1>
        <div className="flex md:flex-row flex-col items-center justify-center text-slate-200 md:pt-34 pt-28 gap-12">
          <div className="flex-1 flex flex-col gap-4 items-center justify-center hover:-translate-y-5 duration-300">
            <h3 className="text-4xl tracking-wider">Balance</h3>
            <em className="text-xl font-thin text-center w-3/4">
              "Just for today, I will do my work honestly."
            </em>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center justify-center hover:-translate-y-5 duration-300">
            <h3 className="text-4xl tracking-wider">Calm</h3>
            <em className="text-xl font-thin text-center w-3/4">
              "Just for today, I will not be angry."
            </em>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center justify-center hover:-translate-y-5 duration-300">
            <h3 className="text-4xl tracking-wider">Healing</h3>
            <em className="text-xl font-thin text-center w-3/4">
              "Just for today, I will not worry."
            </em>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center justify-center hover:-translate-y-5 duration-300">
            <h3 className="text-4xl tracking-wider">Awareness</h3>
            <em className="text-xl font-thin text-center w-3/4">
              "Just for today, I will be grateful."
            </em>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lotus;
