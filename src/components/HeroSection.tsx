import logo from "../assets/soundstage-logo-white.png";

const HeroSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Schulich Soundstage
        </h1>
      </div>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl mx-auto">
        At Schulich Soundstage, we empower students from every faculty to grow
        as musicians—hosting workshops, open‑mic nights, and community concerts
        that encourage creativity and connection.
      </p>

      <div className="flex justify-center my-10">
        <a
          href="#"
          className="py-3 px-4 mx-3 border rounded-md bg-gradient-to-r to-green-800"
        >
          Check out our UPCOMING EVENTS!
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <img
          className="rounded-lg w-1/2 mx-2 my-4"
          src={logo}
          alt="Soundstage Logo"
        />
      </div>
    </div>
  );
};

export default HeroSection;
