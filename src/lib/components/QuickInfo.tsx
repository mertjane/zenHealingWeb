import { ScrollAnimation } from "./ScrollFadeIn";

const QuickInfo = () => {
  return (
    <div className="md:h-[110vh] h-[95vh] bg-[#eee6da]">
      <img
        src="/assets/images/logoOriginal.png"
        alt="Zen Reiki"
        className="w-[300px] h-[200px] object-cover mx-auto"
      />

      <div className="text-center">
        <ScrollAnimation
          variant="fadeUp"
          delay={0.2}
          margin="0px 0px -50px 0px"
        >
          <h1 className="md:text-7xl text-3xl text-[#646362] leading-normal mt-8 ">
            Unearth Your Inner Balance <br /> <em>Amidst</em> the{" "}
            <em>Elements</em> of Serenity
          </h1>
        </ScrollAnimation>
        <ScrollAnimation
          variant="fadeUp"
          delay={0.4}
          margin="0px 0px -30px 0px"
        >
          <p className="md:text-3xl text-xl md:max-w-4/6 w-full mx-auto pt-12 md:px-0 px-4 font-thin tracking-wider text-[#646362]">
            Discover a new realm of wellness and transformation at Zen Reiki,
            Brighton's only Reiki studio. Nestled in the south-end of our city,
            we invite you to embark on a journey of self-discovery and renewal,
            where you can connect with the elements of nature in a luxurious and
            serene environment.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          variant="fadeUp"
          delay={0.6}
          margin="0px 0px -20px 0px"
        >
          <a
            href="#"
            className="uppercase border-b border-[#646362] text-[#646362] tracking-widest font-thin py-2 px-8 relative top-10 hover:bg-[#646362] hover:text-amber-50 duration-300"
          >
            explore sessions
          </a>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default QuickInfo;
