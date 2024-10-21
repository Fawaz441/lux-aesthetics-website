import Layout from "components/navigation/Layout";
import services from "constants/service";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const data = services.find((service) => service.slug === serviceSlug);

  useEffect(() => {
    if (!data) {
      toast.error("No service with this slug exists!");
      navigate("/");
    }
  }, [data, navigate]);

  if (!data) {
    return <div />;
  }

  const name = data.name;
  const highlight = data.note;
  const description = data.description;

  return (
    <Layout className="bg-bg border-b border-b-brown">
      <div className="h-[300px] px-4 bg-darkgreen flex items-center justify-center">
        <h3 className="text-[24px] leading-[30px] text-white font-bold">
          {name}
        </h3>
      </div>
      <div className="p-4">
        <div className="max-w-[600px] mx-auto">
          <div className="flex flex-col space-y-5 border-b-[0.6px] border-b-brown py-8">
            <h2 className="font-bold text-[24px] leading-[30px] text-brown">
              {name}
            </h2>
            {highlight && (
              <p className="font-regular text-brown text-[15px]">{highlight}</p>
            )}
          </div>
          {/* service description */}
          <div className="flex flex-col space-y-5 border-b-[0.6px] border-b-brown py-8">
            <h2 className="font-bold text-[24px] leading-[30px] text-brown">
              Service Description
            </h2>
            <p className="font-regular text-brown text-[15px]">{description}</p>
          </div>
          {/* contact details */}
          <div className="flex flex-col space-y-5 border-b-[0.6px] border-b-brown py-8">
            <h2 className="font-bold text-[24px] leading-[30px] text-brown">
              Contact Details
            </h2>
            <p className="font-regular text-brown text-[15px]">
              68 Mannheim, Germany
              <br />
              <a href="tel:062712211">062712211</a>
              <br />
              <a href="mailto:eberbach@i-hausarztpraxis.com">
                eberbach@i-hausarztpraxis.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetails;
