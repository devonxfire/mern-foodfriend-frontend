import hero3 from "../assets/hero3.png";

const Hero = () => {
  return (
    <div>
      <img
        src={hero3}
        alt="hero-image"
        className="w-full max-h-[600px] object-cover"
      />
    </div>
  );
};

export default Hero;
