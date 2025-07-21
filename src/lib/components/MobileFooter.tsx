import { ROUTES } from "../routes/routePaths";

const MobileFooter = () => {
  return (
    <div className="bg-[#717d67] h-auto px-4 py-10">
      <h1 className="text-amber-50 text-3xl mx-auto text-center leading-tight font-light">
        Elevate Your Life. Embrace the Elements. <em>Transform</em> Your Soul.
      </h1>
      <img
        src="/assets/images/logoOriginal.png"
        className="mx-auto w-[200px] h-[200px] object-cover"
        alt="Footer Logo"
      />
      <div>
        <ul>
          <li>
            <p className="text-amber-50 tracking-widest mx-auto text-center font-thin leading-normal text-md w-full px-8">
              Room 2, St Augustine's Arts & Events Centre, Junction Of, Stanford
              Ave, Florence Rd, Brighton and Hove, BN1 6EA
            </p>
          </li>
          <li className="mt-10 text-center">
            <a
              href=":mail"
              className="text-amber-50 tracking-widest mx-auto text-center font-thin leading-normal text-md w-full px-8"
            >
              info@zenhealing.co.uk
            </a>
            <p className="text-amber-50 tracking-widest mx-auto text-center font-thin leading-normal text-md w-full px-8">
              07414 882121
            </p>
          </li>
          <li className="mt-10 text-center flex flex-col">
            <a
              className="text-amber-50 tracking-widest mx-auto text-center font-thin leading-normal text-md w-full px-8"
              href={ROUTES.INSTAGRAM}
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="text-amber-50 tracking-widest mx-auto text-center font-thin leading-normal text-md w-full px-8"
              href={ROUTES.FACEBOOK}
              target="_blank"
            >
              Facebook
            </a>
          </li>
          <div className="flex flex-col text-center mt-10">
            <small className="text-amber-50 tracking-widest font-thin">
              <a href="#">Terms & Conditions | </a>
              <a href="#">Privacy Policy | </a>
              <a href="#">Clinic Policy</a>
            </small>
            <small className="text-amber-50 font-thin tracking-widest mt-8 w-3/4 mx-auto">
              © 2024 by Zen Healing Reiki. Website by DiploDev
            </small>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MobileFooter;
