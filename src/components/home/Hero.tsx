import heroOne from "assets/images/home/heroimgone.webp";
import heroTwo from "assets/images/home/heroimgtwo.webp";

const Hero = () => {
  return (
    <div className="bg-bg px-4" id="hero">
      <div className="max-w-desktop mx-auto pt-10 md:h-[calc(100vh_-_80px)] flex flex-col">
        <div className="flex flex-col space-y-10 flex-1">
          <h1 className="font-playwrite text-[50px] leading-[60px] md:text-[80px] md:leading-[90px] text-brown">
            Discover Lux Beauty
          </h1>
          <p className="text-[20px] leading-8 text-brown max-w-[700px]">
            Welcome to Lux Aesthetics, your premier destination for beauty and
            aesthetics services in Mannheim and Eberbach, Germany. Experience
            the art of beauty with our specialized treatments.
          </p>
          <div className="flex md:flex-1 flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-4">
            <div className="md:flex-1 h-[250px] w-full md:h-full relative">
              <img
                src={heroOne}
                alt="Lux Aesthetics"
                className="h-full w-full object-contain md:object-cover absolute top-0 left-0"
              />
            </div>
            <div className="md:flex-1 h-[250px] w-full md:h-full relative">
              <img
                src={heroTwo}
                alt="Lux Aesthetics"
                className="h-full w-full object-contain md:object-cover absolute top-0 left-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
