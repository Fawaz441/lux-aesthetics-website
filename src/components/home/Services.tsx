import services, { ServiceType } from "constants/service";
import { Link } from "react-router-dom";

const Service = ({ image, name, slug }: ServiceType) => {
  return (
    <Link
      to={`/services/${slug}`}
      className="group w-full max-w-[300px] border-brown border"
    >
      <div className="h-[300px] relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full group-hover:scale-[1.2] w-full top-0 left-0 absolute object-cover transition-all duration-[400]"
        />
      </div>
      <div className="py-6 px-2 flex items-center justify-center">
        <span className="text-brown text-[20px] leading-6 text-center">
          {name}
        </span>
      </div>
    </Link>
  );
};

const Services = () => {
  return (
    <div className="bg-bg2 px-4" id="services">
      <div className="max-w-desktop mx-auto flex flex-col space-y-5 py-8 md:pt-[100px] md:pb-14">
        <h2 className="text-[30px] leading-[50px] md:text-[50px] md:leading-[70px] text-brown font-playwrite">
          Services
        </h2>
        <div className="grid grid-cols-1 justify-items-center 450px:justify-items-start 450px:grid-cols-2 694px:grid-cols-3 984px:grid-cols-4 gap-y-10">
          {services.map((service) => (
            <Service key={service.name} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
