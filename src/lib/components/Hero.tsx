
import { ROUTES } from "../routes/routePaths";

const Hero = () => {
  return (
    <div className="md:h-screen h-[62vh] relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
        src="/assets/videos/herovideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="inset-0 bg-black/30 z-50 absolute top-0 left-0 w-full h-full"></div>

      {/* Content Section */}
      <div className="w-full text-center absolute bottom-10 z-[1001] pb-14">
        <span className="md:text-2xl text-xl tracking-widest uppercase font-light text-slate-300">
          brighton's reiki Clinic
        </span>
        <h1 className="md:text-8xl text-4xl text-amber-50 md:leading-28 leading-normal mt-8 pb-10">
          Where Tranquillity <br />
          <em>Meets</em> Transformation
        </h1>
        <a
          href={ROUTES.BOOK_NOW}
          target="_blank"
          className="cursor-pointer px-12 uppercase text-md tracking-wider border duration-300 py-4 border-white text-white hover:bg-white hover:text-black "
        >
          Book now
        </a>
      </div>
    </div>
  );
};

export default Hero;
