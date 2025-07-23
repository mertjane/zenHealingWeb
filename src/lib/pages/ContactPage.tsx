import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import { ROUTES } from "../routes/routePaths";

const ContactPage = () => {
  return (
    <div className="min-h-screen md:h-[380vh]">
      <div className="md:h-[900px] h-[1200px] bg-[#eee6da] md:pt-[14em] pt-[10em] md:px-28 px-10 flex md:flex-row flex-col">
        <div className="flex-1">
          <h1 className="md:text-7xl text-6xl tracking-wider text-[#5c6a55]">
            Contact
          </h1>
          <p className="text-neutral-700 md:text-4xl text-xl w-full tracking-wider leading-tight font-thin pt-6">
            Whether you have questions, feedback, or simply wish to share your
            journey with us, we're here to listen. Reach out to Zen Healing
            today and become a part of our growing community in Brighton. We
            look forward to hearing from you.
            <br />
            <br />
            <h2>
              <em>
                "Don’t miss out — book your free 15-minute consultation today!"
              </em>
            </h2>
            <p className="px-0 md:text-xl text-lg text-gray-600 leading-relaxed mt-4 font-thin">
              I offer distance Reiki Healing / Video Call sessions for those who
              would like help and support but prefer not to have in-person
              sessions.
            </p>
          </p>
        </div>
        <div className="flex-1 py-8 md:pl-28">
          <a
            href=":mail"
            className="font-thin tracking-wider text-[#5c6a55] text-2xl"
          >
            info@zenhealing.co.uk
          </a>
          <br />
          <br />

          <p className="font-thin tracking-wider text-[#5c6a55] text-2xl">
            07414 882121
          </p>
          <br />
          <br />
          <p className="font-thin tracking-wider text-[#5c6a55] text-2xl md:w-4/4">
            Room 2, St Augustine's Arts & Events Centre, Junction Of, Stanford
            Ave, Florence Rd, Brighton and Hove, BN1 6EA
          </p>
          <br />
          <br />
          <div className="flex items-center gap-4">
            <a href={ROUTES.INSTAGRAM} target="_blank">
              <FaInstagram color="#5c6a55" size={30} />
            </a>
            <a href={ROUTES.FACEBOOK} target="_blank">
              <FiFacebook color="#5c6a55" size={30} />
            </a>
          </div>
        </div>
      </div>
      <ContactForm />
      <Map />
      <div className="h-[330px] bg-[#eee6da] flex flex-col items-center justify-center">
        <h1 className="md:text-6xl text-4xl tracking-wider text-[#5c6a55]">
          Follow the Flow
        </h1>
        <p className="text-[#5c6a55] text-2xl text-center w-full tracking-wider leading-tight font-thin pt-6">
          Connect with Zen Healing Online
        </p>
        <a
          href="https://www.instagram.com/zen.healing.reiki/"
          target="_blank"
          className="text-[#5c6a55] text-2xl text-center w-full tracking-wider leading-tight font-regular pt-6"
        >
          @zen.healing.reiki
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
