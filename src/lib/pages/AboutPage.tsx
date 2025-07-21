import {
  ParallaxScroll,
  StaggerAnimation,
  StaggerItem,
} from "../components/ScrollFadeIn";
import useIsMobile from "../hooks/useIsMobile";

const AboutPage = () => {
  const isMobile = useIsMobile();

  return (
    <div className="md:h-auto h-[380vh]">
      <div className="md:h-[500px] h-[380px] bg-[#eee6da] md:pt-[14em] pt-[10em] md:px-28 px-10">
        <h1 className="md:text-7xl text-6xl tracking-wider text-[#5c6a55]">
          About Us
        </h1>
        <p className="text-neutral-500 md:text-4xl text-xl md:w-3/4 w-full tracking-wider leading-tight font-thin pt-6">
          Brighton's Zen Reiki Clinic Embracing the Four Elements for Holistic
          Healing Connection.
        </p>
      </div>

      {/* Mobile Layout */}
      {isMobile && (
        <div className="relative px-6 py-12">
          <img
            src="/assets/images/bg_layout.jpg"
            className="absolute z-20 h-[400px] w-[350px] object-cover left-4 top-12"
            alt="dot"
          />
          <img
            src="/assets/images/bio.jpg"
            className="object-cover h-[400px] w-[350px] absolute z-30 left-10 top-20"
            alt="Reiki Master"
          />
          <div className="pt-[28em] p-0">
            <ParallaxScroll offset={100}>
              <StaggerAnimation staggerDelay={0.3} childDelay={0.5}>
                <StaggerItem>
                  <p className="text-gray-600 tracking-wider text-xl font-thin">
                    Ezgi Ates - Qualified Reiki Master.
                  </p>
                </StaggerItem>
                <br />
                <StaggerItem>
                  <h1 className="text-3xl tracking-wider text-gray-600">
                    <em>Member of The Reiki Association</em>
                  </h1>
                </StaggerItem>
                <br />
                <StaggerItem>
                  <p className="text-gray-600 tracking-wider text-xl font-thin">
                    My name is Ezgi , and I am a dedicated Reiki Master and
                    healer. My journey into the world of energy healing began not
                    with a sudden awakening, but with a quiet whisper a persistent
                    inner calling to seek deeper understanding, connection, and
                    healing. Healing is not just my profession it's my calling, my
                    passion, and a legacy that runs deep within my bloodline.{" "}
                    <br />
                    <br /> 
                    I come from a lineage of healers. My great-grandmother
                    was known in her community as a gifted healer. She worked with
                    herbs, energy, intuition, and the natural world to bring
                    balance and relief to those around her.Though I never met her,
                    her wisdom, spirit, and strength have been passed down through
                    generations, and I often feel her presence guiding me in my
                    practice. This ancestral connection grounds my work in
                    tradition, love, and a deep respect for those who came before
                    me.
                    <br />
                    <br />
                    Though the path wasn't always clear, I felt a pull toward
                    healing from a young age deeply empathetic, sensitive to
                    others' emotions, and drawn to the unseen energies that shape
                    our lives. It wasn't until I faced my own health crisis and
                    emotional challenges, when conventional methods offered
                    limited relief, that I truly embraced the power of alternative
                    healing and that's when Reiki found me."
                    <br />
                    <br />
                    I was introduced to Reiki through a trusted friend, and my
                    first session was life-changing bringing a profound sense of
                    peace, clarity, and emotional release unlike anything I had
                    ever experienced. Inspired by that transformation, That moment
                    ignited a fire in me and I knew this was my path. I began my
                    Reiki training with Level I, Level II practitioner and
                    eventually a Reiki Master., becoming attuned and certified
                    through, what began as self-healing expanded into helping
                    others heal too.
                    <br />
                    <br />
                    My approach is grounded in compassion, presence, and the
                    belief that everyone has the innate ability to heal. I
                    continue to learn and grow, incorporating meditation, breath
                    work, and other holistic practices to support my work. Reiki
                    is intuitive and heart-centred. I hold sacred space for my
                    clients to feel safe, seen, and supported. Each session is
                    guided by the universal life force energy, my own spiritual
                    guidance, and a deep trust in the body and spirit's ability to
                    heal.
                    <br />
                    <br />
                    Today, I am honoured to carry forward the healing legacy of my
                    ancestors, blending ancient wisdom with modern practice.
                    Whether you're seeking emotional clarity, physical relief, or
                    spiritual realignment, I offer Reiki as a gentle yet powerful
                    tool for transformation. Reiki is not just what I do — it is a
                    way of life that continues to open my heart and expand my
                    soul.
                    <br />
                    <br />
                    With gratitude and light.
                  </p>
                </StaggerItem>
              </StaggerAnimation>
            </ParallaxScroll>
          </div>
        </div>
      )}

      {/* Desktop Layout */}
      {!isMobile && (
        <div className="px-28 py-20">
          <ParallaxScroll offset={100}>
            <StaggerAnimation staggerDelay={0.3} childDelay={0.5}>
              {/* First Row: Image + Text */}
              <div className="flex gap-12 mb-16">
                <div className="relative w-[600px] h-[700px] flex-shrink-0">
                  <img
                    src="/assets/images/bg_layout.jpg"
                    className="absolute z-20 h-full w-full object-cover left-4 top-0"
                    alt="top"
                  />
                  <img
                    src="/assets/images/bio.jpg"
                    className="object-cover h-full w-full absolute z-30 left-14 top-10"
                    alt="Reiki Master"
                  />
                </div>
                <div className="flex-1 pt-20 pl-20">
                  <StaggerItem>
                    <p className="text-gray-600 tracking-wider text-3xl font-thin mb-4">
                      Ezgi Ates - Qualified Reiki Master.
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <h1 className="text-2xl tracking-wider text-gray-600 mb-6">
                      <em>Member of The Reiki Association</em>
                    </h1>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="text-gray-600 tracking-wider text-2xl font-thin leading-relaxed">
                      My name is Ezgi , and I am a dedicated Reiki Master and
                      healer. My journey into the world of energy healing began not
                      with a sudden awakening, but with a quiet whisper a persistent
                      inner calling to seek deeper understanding, connection, and
                      healing. Healing is not just my profession it's my calling, my
                      passion, and a legacy that runs deep within my bloodline.
                    </p>
                  </StaggerItem>
                </div>
              </div>

              {/* Second Row: Full Width Text */}
              <div className="mb-12">
                <StaggerItem>
                  <p className="text-gray-600 tracking-wider text-2xl font-thin leading-relaxed">
                    I come from a lineage of healers. My great-grandmother
                    was known in her community as a gifted healer. She worked with
                    herbs, energy, intuition, and the natural world to bring
                    balance and relief to those around her.Though I never met her,
                    her wisdom, spirit, and strength have been passed down through
                    generations, and I often feel her presence guiding me in my
                    practice. This ancestral connection grounds my work in
                    tradition, love, and a deep respect for those who came before
                    me.
                  </p>
                </StaggerItem>
              </div>

              <div className="mb-12">
                <StaggerItem>
                  <p className="text-gray-600 tracking-wider text-2xl font-thin leading-relaxed">
                    Though the path wasn't always clear, I felt a pull toward
                    healing from a young age deeply empathetic, sensitive to
                    others' emotions, and drawn to the unseen energies that shape
                    our lives. It wasn't until I faced my own health crisis and
                    emotional challenges, when conventional methods offered
                    limited relief, that I truly embraced the power of alternative
                    healing and that's when Reiki found me.
                  </p>
                </StaggerItem>
              </div>

              <div className="mb-12">
                <StaggerItem>
                  <p className="text-gray-600 tracking-wider text-2xl font-thin leading-relaxed">
                    I was introduced to Reiki through a trusted friend, and my
                    first session was life-changing bringing a profound sense of
                    peace, clarity, and emotional release unlike anything I had
                    ever experienced. Inspired by that transformation, That moment
                    ignited a fire in me and I knew this was my path. I began my
                    Reiki training with Level I, Level II practitioner and
                    eventually a Reiki Master., becoming attuned and certified
                    through, what began as self-healing expanded into helping
                    others heal too.
                  </p>
                </StaggerItem>
              </div>

              <div className="mb-12">
                <StaggerItem>
                  <p className="text-gray-600 tracking-wider text-2xl font-thin leading-relaxed">
                    My approach is grounded in compassion, presence, and the
                    belief that everyone has the innate ability to heal. I
                    continue to learn and grow, incorporating meditation, breath
                    work, and other holistic practices to support my work. Reiki
                    is intuitive and heart-centred. I hold sacred space for my
                    clients to feel safe, seen, and supported. Each session is
                    guided by the universal life force energy, my own spiritual
                    guidance, and a deep trust in the body and spirit's ability to
                    heal.
                  </p>
                </StaggerItem>
              </div>

              <div className="mb-12">
                <StaggerItem>
                  <p className="text-gray-600 tracking-wider text-2xl font-thin leading-relaxed">
                    Today, I am honoured to carry forward the healing legacy of my
                    ancestors, blending ancient wisdom with modern practice.
                    Whether you're seeking emotional clarity, physical relief, or
                    spiritual realignment, I offer Reiki as a gentle yet powerful
                    tool for transformation. Reiki is not just what I do — it is a
                    way of life that continues to open my heart and expand my
                    soul.
                  </p>
                </StaggerItem>
              </div>

              <div>
                <StaggerItem>
                  <p className="text-gray-600 tracking-wider text-2xl font-thin leading-relaxed">
                    With gratitude and light.
                  </p>
                </StaggerItem>
              </div>
            </StaggerAnimation>
          </ParallaxScroll>
        </div>
      )}
    </div>
  );
};

export default AboutPage;