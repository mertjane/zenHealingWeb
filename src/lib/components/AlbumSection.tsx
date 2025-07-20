import { ParallaxScroll, StaggerAnimation, StaggerItem } from "./ScrollFadeIn";

const AlbumSection = () => {
  return (
    <div className="py-20 min-h-screen flex flex-col ">
      {/* Image 1 */}
      <div className="flex md:flex-row flex-col">
        <img
          className="md:w-2/4 md:h-screen w-full h-3/4 object-cover "
          src="/assets/images/reiki1.jpg"
          alt="Image 1"
        />

        <div className="md:w-2/4 w-full md:pl-20 pl-0 md:text-start text-center  md:pt-40 pt-10">
          <ParallaxScroll offset={100}>
            <StaggerAnimation staggerDelay={0.4} childDelay={0.6}>
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
            <StaggerAnimation staggerDelay={0.4} childDelay={0.6}>
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

      {/* Image 3 */}
      <div className="flex md:flex-row flex-col md:py-0 py-10">
        <img
          className="md:w-2/4 md:h-screen w-full h-3/4 object-cover"
          src="/assets/images/reiki3.jpg"
          alt="Image 1"
        />
        <div className="md:w-2/4 w-full md:pl-20 pl-0 md:text-start text-center  md:pt-40 pt-10">
          <ParallaxScroll offset={100}>
            <StaggerAnimation staggerDelay={0.4} childDelay={0.6}>
              <StaggerItem>
                <h1 className="tracking-wider font-thin md:text-5xl text-5xl text-[#646362]">
                  <em>Find Stillness</em> in Every Breath
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="md:text-2xl text-xl text-gray-600 leading-relaxed md:mt-10 mt-4 md:pb-0 pb-8 font-thin md:w-3/4 w-full md:px-0 px-4">
                  Inhale tranquility, exhale tension. Discover deep relaxation
                  as stress melts away with each mindful breath. Let this sacred
                  moment of stillness guide you to clarity and inner peace.
                </p>
              </StaggerItem>
            </StaggerAnimation>
          </ParallaxScroll>
        </div>
      </div>
    </div>
  );
};

export default AlbumSection;
