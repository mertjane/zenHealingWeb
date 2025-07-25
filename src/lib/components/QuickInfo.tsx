import { ROUTES } from "../routes/routePaths";

const QuickInfo = () => {
  return (
    <div className="h-auto relative box-border bg-[#eee6da]">
      <img
        src="/assets/images/logoOriginal.png"
        alt="Zen Reiki"
        className="w-[300px] h-[200px] object-cover mx-auto"
      />

      <div className="text-center pb-20">
        <h1 className="md:text-7xl text-3xl text-[#646362] leading-normal mt-8 ">
          Unearth Your Inner Balance <br /> <em>Amidst</em> the{" "}
          <em>Elements</em> of Serenity
        </h1>

        <p className="md:text-3xl text-xl md:max-w-4/6 w-full mx-auto pt-12 md:px-0 px-4 font-thin tracking-wider text-[#646362]">
          Discover a new realm of wellness and transformation at Zen Reiki,
          Brighton's Reiki Clinic. Nestled in the south-end of our city, we
          invite you to embark on a journey of self-discovery and renewal, where
          you can connect with the elements of nature in a luxurious and serene
          environment.{" "}
          <em className="font-medium">
            "Don’t miss out — book your free 15-minute consultation today!”
          </em>
        </p>
        <a
          href={ROUTES.BOOK_NOW}
          target="_blank"
          className="uppercase border-b border-[#646362] text-[#646362] tracking-widest font-thin py-2 px-8 relative top-8  hover:bg-[#646362] hover:text-amber-50 duration-300"
        >
          explore sessions
        </a>
      </div>
    </div>
  );
};

export default QuickInfo;
