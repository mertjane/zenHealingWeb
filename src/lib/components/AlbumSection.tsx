import useIsMobile from "../hooks/useIsMobile";
import { ParallaxScroll, StaggerAnimation, StaggerItem } from "./ScrollFadeIn";

const AlbumSection = () => {
  const isMobile = useIsMobile();
  return (
    <div className="pt-20 pb-5 min-h-screen flex flex-col ">
      {/* Image 1 */}
      <div className="flex md:flex-row flex-col">
        <img
          className="md:w-2/4 md:h-screen w-full h-3/4 object-cover "
          src="/assets/images/reiki1.jpg"
          alt="Image 1"
        />

        <div className="md:w-2/4 w-full md:pl-20 pl-0 md:text-start text-center  md:pt-40 pt-10">
          <ParallaxScroll offset={100}>
            <StaggerAnimation staggerDelay={0.3} childDelay={0.5}>
              <StaggerItem>
                <h1 className="tracking-wider font-thin md:text-5xl text-4xl text-[#646362]">
                  <em>Recharge</em> Your Mind, <br /> Body & Spirit
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="md:text-2xl text-lg text-gray-600 leading-relaxed md:mt-10 mt-4 font-thin md:w-3/4 w-full md:px-0 px-4 md:pb-0 pb-20">
                  Step into a serene space where healing energy flows freely.
                  Our Reiki sessions are designed to restore your inner balance,
                  relieve stress, and awaken your natural vitality. Let the
                  power of touch guide you to a state of peace and harmony.
                </p>
              </StaggerItem>
            </StaggerAnimation>
          </ParallaxScroll>
        </div>
      </div>

      {/* Image 2 */}
      <div className="flex md:flex-row flex-col">
        <div className="flex md:order-1 order-2 md:w-2/4 w-full md:pl-20 pl-0 md:text-start text-center  md:pt-40 pt-10">
          <ParallaxScroll offset={100}>
            <StaggerAnimation staggerDelay={0.3} childDelay={0.5}>
              <StaggerItem>
                <h1 className="tracking-wider font-thin md:text-5xl text-5xl text-[#646362]">
                  <em>Awaken</em> Your Inner Light
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="md:text-2xl text-lg text-gray-600 leading-relaxed md:mt-10 mt-4 md:pb-0 pb-8 font-thin md:w-3/4 w-full md:px-0 px-4">
                  Embrace the gentle flow of energy that brings you back to your
                  center. Through calming techniques and spiritual guidance,
                  reconnect with your true essence and ignite the light within.
                </p>
              </StaggerItem>
            </StaggerAnimation>
          </ParallaxScroll>
        </div>
        <img
          className="flex md:order-2 order-1 md:w-2/4 md:h-screen w-full h-3/4 object-cover"
          src="/assets/images/reiki2.jpg"
          alt="Image 1"
        />
      </div>

      {isMobile ? (
        <>
          {/* Image 3 */}
          <div className="flex md:flex-row flex-col md:py-0 py-10">
            <img
              className="md:w-2/4 md:h-screen w-full h-3/4 object-cover"
              src="/assets/images/reiki3.jpg"
              alt="Image 1"
            />

            <div className="md:w-2/4 w-full md:pl-20 pl-0 md:text-start text-center  md:pt-40 pt-10 pr-4">
              <ParallaxScroll offset={100}>
                <StaggerAnimation staggerDelay={0.3} childDelay={0.5}>
                  <StaggerItem>
                    <h1 className="tracking-wider text-center mt-6 font-thin text-4xl text-[#646362]">
                      What is Reiki?
                    </h1>
                    <p className="md:text-xl text-lg text-gray-600 leading-relaxed md:mt-10 mt-4 font-thin md:w-3/4 w-full md:px-0 px-4 md:pb-0 pb-20">
                      Reiki is a gentle, natural energy healing practice that
                      originated in Japan. The word Reiki means universal life
                      energy.When this energy flows freely, it helps you feel
                      balanced, calm, and well.
                      <br />
                      <br />
                      During a Reiki session, I gently place my hands on or just
                      above your body to channel this healing energy. Many
                      people feel warmth, tingling, or a deep sense of
                      relaxation — some even drift off to sleep! Reiki is
                      suitable for people of all ages.
                      <br />
                      <br />
                      Reiki is safe, non-invasive, and works beautifully
                      alongside any other wellness or medical treatments you may
                      have. Sessions can be done in person or at a distance,
                      because energy is not limited by time or space.
                      <br />
                      <br />
                      Reiki gently supports your body’s natural healing by
                      boosting energy, strengthening the immune system, and
                      helping you recover after surgery. Many people also find
                      it comforting when navigating life with an illness.
                      <br />
                      <br />
                      Reiki is a safe, complementary therapy that will not
                      interfere with any medical treatments — that’s why you’ll
                      find Reiki offered in many hospitals and hospices both
                      here and around the world. It’s also widely used to help
                      support people with cancer and their loved ones. You can
                      find more information about Reiki at Cancer Research UK.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <h1 className="tracking-wider px-3 mt-2 font-thin md:text-3xl text-5xl text-[#646362]">
                      Benefits of Reiki
                    </h1>
                    <div className="md:text-xl text-lg text-gray-600 leading-relaxed md:mt-6 mt-4 font-thin md:w-3/4 w-full md:px-0 px-4 md:pb-0 pb-20">
                      People often turn to Reiki to:
                      <ul className="list-disc text-start ml-8 mt-4">
                        <li>Reduce stress and anxiety</li>
                        <li>Sleep better and unwind</li>
                        <li>Support emotional and physical healing</li>
                        <li>Restore balance and inner peace</li>
                        <li>ReRelieve chronic pain and tension</li>
                        <li>
                          Aid recovery after surgery, chemotherapy, or
                          radiotherapy
                        </li>
                        <li>Complement other wellness or medical treatments</li>
                        <li>
                          Reiki works beautifully alongside traditional
                          healthcare, supporting your body’s natural
                          ability to heal itself.
                        </li>
                      </ul>
                    </div>
                  </StaggerItem>
                </StaggerAnimation>
              </ParallaxScroll>
            </div>
          </div>
        </>
      ) : (
        <div className="w-full py-0 flex flex-col">
          <div className="flex">
            <div className="flex-1 ">
              <img
                className="w-full h-screen  object-cover"
                src="/assets/images/reiki3.jpg"
                alt="Image 1"
              />
            </div>
            <div className="flex-1 ">
              <ParallaxScroll offset={100}>
                <StaggerAnimation staggerDelay={0.3} childDelay={0.5}>
                  <StaggerItem>
                    <h1 className="px-20 tracking-wider mt-10 font-thin text-5xl text-[#646362]">
                      What is Reiki?
                    </h1>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="px-20 md:text-xl text-lg text-gray-600 leading-relaxed mt-5 font-thin">
                      Reiki is a gentle, natural energy healing practice that
                      originated in Japan. The word Reiki means universal life
                      energy.When this energy flows freely, it helps you feel
                      balanced, calm, and well.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="px-20 md:text-xl text-lg text-gray-600 leading-relaxed mt-5 font-thin">
                      During a Reiki session, I gently place my hands on or just
                      above your body to channel this healing energy. Many
                      people feel warmth, tingling, or a deep sense of
                      relaxation — some even drift off to sleep! Reiki is
                      suitable for people of all ages.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="px-20 md:text-xl text-lg text-gray-600 leading-relaxed mt-5 font-thin">
                      Reiki is safe, non-invasive, and works beautifully
                      alongside any other wellness or medical treatments you may
                      have. Sessions can be done in person or at a distance,
                      because energy is not limited by time or space.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                  <p className="px-20 md:text-xl text-lg text-gray-600 leading-relaxed mt-5 font-thin">
                    Reiki gently supports your body’s natural healing by
                    boosting energy, strengthening the immune system, and
                    helping you recover after surgery. Many people also find it
                    comforting when navigating life with an illness.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <p className="px-20 md:text-xl text-lg text-gray-600 leading-relaxed mt-5 font-thin">
                    Reiki is a safe, complementary therapy that will not
                    interfere with any medical treatments — that’s why you’ll
                    find Reiki offered in many hospitals and hospices both here
                    and around the world. It’s also widely used to help support
                    people with cancer and their loved ones. You can find more
                    information about Reiki at Cancer Research UK.
                  </p>
                </StaggerItem>
                </StaggerAnimation>
              </ParallaxScroll>
            </div>
          </div>
          <div className="p-20 ">
            <ParallaxScroll offset={100}>
              <StaggerAnimation staggerDelay={0.3} childDelay={0.5}>
                
                
                <StaggerItem>
                  <h1 className="tracking-wider mt-6 font-thin text-6xl text-center text-[#646362]">
                    Benefits of Reiki
                  </h1>
                </StaggerItem>
                <StaggerItem>
                  <div className="md:text-xl text-lg text-center text-gray-600 leading-relaxed mt-5 font-thin">
                    <em>People often turn to Reiki to:</em>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-start list-disc list-inside mt-10">
                      <li>Reduce stress and anxiety</li>
                      <li>Sleep better and unwind</li>
                      <li>Support emotional and physical healing</li>
                      <li>Restore balance and inner peace</li>
                      <li>Relieve chronic pain and tension</li>
                      <li>
                        Aid recovery after surgery, chemotherapy, or
                        radiotherapy
                      </li>
                      <li>Complement other wellness or medical treatments</li>
                      <li>
                        Reiki works beautifully alongside traditional
                        healthcare, supporting your body’s natural
                        ability to heal itself.
                      </li>
                    </ul>
                  </div>
                </StaggerItem>
              </StaggerAnimation>
            </ParallaxScroll>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlbumSection;
