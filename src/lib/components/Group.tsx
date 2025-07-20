const Group = () => {
  return (
    <div className="md:h-screen h-[70vh] relative flex items-center justify-center">
      <div className="inset-0 bg-black/40 z-50 absolute top-0 left-0 w-full h-full"></div>
      <img
        src="/assets/images/reiki4.jpg"
        className="object-cover w-full h-full"
        alt="Reiki Session"
      />
      <div className="absolute text-center z-[60]">
        <h1 className="md:text-7xl text-5xl text-amber-50">
          Your <em>Journey</em> to Transformation
        </h1>
        <p className="md:text-3xl text-2xl md:px-0 px-4 text-amber-50 md:w-4/6 w-full font-light mx-auto mt-10">
          At Zen Healing, we believe in more than just physical exercise. Our
          philosophy is rooted in personal growth, compassion, and discipline.
          We invite you to embrace the power of Reiki, not just as a practice
          but as a way of life. Through our guidance, you'll discover inner
          strength, peace, and gratitude that extend far beyond the energy.
        </p>
        <a
          href="#"
          className="uppercase border-b border-white text-white tracking-widest font-thin py-3 px-8 relative top-10 hover:bg-[#717d67] hover:text-amber-50 hover:border-[#717d67] duration-300"
        >
          sign up today
        </a>
      </div>
    </div>
  );
};

export default Group;
