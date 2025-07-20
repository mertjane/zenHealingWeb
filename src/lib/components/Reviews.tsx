import { useEffect } from "react";

const Reviews = () => {
  useEffect(() => {
    // Check if the script is already loaded
    const existingScript = document.getElementById("shapo-embed-js");

    if (!existingScript) {
      // Create and load the script
      const script = document.createElement("script");
      script.id = "shapo-embed-js";
      script.type = "text/javascript";
      script.src = "https://cdn.shapo.io/js/embed.js";
      script.defer = true;

      // Append to head or body
      document.head.appendChild(script);
    }

    // Cleanup function (optional - removes script when component unmounts)
    return () => {
      const scriptToRemove = document.getElementById("shapo-embed-js");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <div className="h-max w-full md:p-20 p-0 text-center">
      <h1 className="md:text-7xl text-5xl tracking-wider text-[#5c6a55]">
        Our Customers Experiences
      </h1>
      <div id="shapo-widget-69e788f1c54279990664"></div>
    </div>
  );
};

export default Reviews;
