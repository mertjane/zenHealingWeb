import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routePaths";

const Footer = () => {
  return (
    <div className="h-[80vh] bg-[#717d67] flex flex-col order-3 w-full text-center p-20 ">
      <h1 className="text-amber-50 text-6xl mx-auto text-center leading-tight font-light">
        Elevate Your Life. Embrace the Elements. <em>Transform</em> Your Soul.
      </h1>

      <div className="flex">
        <div className="flex-1">
          <img
            src="/assets/images/logoOriginal.png"
            className="w-[300px] h-[300px] object-cover"
            alt="Zen Healing"
          />
        </div>
        <div className="flex-1 pt-20 font-thin text-start ml-28 h-max">
          <p className="text-neutral-300 tracking-wide w-3/4">
            Room 2, St Augustine's Arts & Events Centre, Junction Of, Stanford
            Ave, Florence Rd, Brighton and Hove, BN1 6EA
          </p>
        </div>
        <div className="flex-1 pt-20 font-thin  text-start ml-12 h-max">
          <a href=":mail" className="text-neutral-300 tracking-wide">
            info@zenhealing.co.uk
          </a>
          <p className="text-neutral-300 tracking-wide">07414 882121</p>
          <a
            href={ROUTES.BOOK_NOW}
            target="_blank"
            className="cursor-pointer text-neutral-300 tracking-wide text-xs duration-300 py-4"
          >
            Book a session via <i className="underline">Fresha</i>
          </a>
        </div>
        <div className="flex-1 flex flex-col pt-20 font-thin text-start ml-10 h-max">
          <a
            href={ROUTES.INSTAGRAM}
            target="_blank"
            className="text-neutral-300 tracking-wide"
          >
            Instagram
          </a>
          <a
            href={ROUTES.FACEBOOK}
            target="_blank"
            className="text-neutral-300 tracking-wide"
          >
            Facebook
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <small className="text-neutral-300 tracking-wide">
          <Link to={ROUTES.TERMS}>Terms & Conditions | </Link>
          <Link to={ROUTES.CANCEL_POLICY}>Cancellation Policy</Link>
        </small>
        <small className="text-neutral-300 tracking-wide">
          © 2024 by Zen Healing Reiki. Website by DiploDev
        </small>
      </div>
    </div>
  );
};

export default Footer;
