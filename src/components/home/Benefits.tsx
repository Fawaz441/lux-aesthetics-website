import { ReactComponent as PersonalizedCare } from "assets/icons/services/personalized-care.svg";
import { ReactComponent as AdvancedTechniques } from "assets/icons/services/advanced-techniques.svg";
import { ReactComponent as ClientSatisfaction } from "assets/icons/services/client-satisfaction.svg";
import clsx from "clsx";

interface BenefitType {
  name: string;
  highlightText: string;
  description: string;
  icon: React.ReactNode;
}

const benefitsList: BenefitType[] = [
  {
    name: "Personalized Care",
    highlightText: "Tailored Treatments",
    description: `We believe in customizing treatments to suit your unique needs and desires. Our goal is to enhance your natural beauty and boost your confidence through personalized care.`,
    icon: <PersonalizedCare className="w-[30px] flex-shrink-0" />,
  },
  {
    name: "Advanced Techniques",
    highlightText: "Cutting-Edge Solutions",
    description: `Our clinic stays up-to-date with the latest aesthetic techniques and technologies to provide you with safe and effective treatments that deliver exceptional results.`,
    icon: <AdvancedTechniques className="w-[30px] flex-shrink-0" />,
  },
  {
    name: "Client Satisfaction",
    highlightText: "Your Happiness Matters",
    description: `Your satisfaction is our priority. We strive to ensure that every visit to Lux Aesthetics leaves you feeling rejuvenated, confident, and beautiful.`,
    icon: <ClientSatisfaction className="w-[30px] flex-shrink-0" />,
  },
];

const Benefits = () => {
  return (
    <div className="bg-bg2 px-4" id="benefits">
      <div className="max-w-desktop mx-auto flex flex-col space-y-5 pt-[100px] pb-14">
        <h2 className="text-[30px] leading-[50px] md:text-[50px] md:leading-[70px] text-brown font-playwrite">
          Lux Benefits
        </h2>
        <p className="text-brown text-[18px] leading-6">Why Choose Us</p>
        <div className="my-5 border-y border-y-brown py-4">
          <p className="text-[25px] leading-[35px] md:text-[30px] font-light md:leading-10 text-brown max-w-[850px]">
            At Lux Aesthetics, we prioritize your beauty and well-being. Our
            personalized approach, state-of-the-art treatments, and expert team
            ensure you receive the highest level of care.
          </p>
        </div>
        {/* benefits listing */}
        <div>
          {benefitsList.map((benefit, index) => (
            <div key={benefit.name} className="flex items-center">
              <div
                className={clsx(
                  "flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-[50px] ml-auto 1000px:w-[70%] pt-5 pb-10",
                  {
                    "border-b border-b-brown":
                      index !== benefitsList.length - 1,
                  }
                )}
              >
                <div className="flex space-x-6 flex-shrink-0 md:w-[280px]">
                  {benefit.icon}
                  <div className="flex flex-col space-y-2 md:space-y-4">
                    <h3 className="text-[20px] leading-6 text-brown">
                      {benefit.name}
                    </h3>
                    <span className="font-light text-sm text-brown">
                      {benefit.highlightText}
                    </span>
                  </div>
                </div>
                <p className="font-light text-base leading-6">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
