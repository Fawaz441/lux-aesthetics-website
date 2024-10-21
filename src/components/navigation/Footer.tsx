import Logo from "components/shared/Logo";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-yellow py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between max-w-desktop mx-auto">
        <Logo />
        <div className="flex md:space-x-20 flex-col space-y-20 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-4">
            <a href="tel:062712211" className="text-brown text-base leading-6">
              062712211
            </a>
            <a
              href="mailto:eberbach@i-hausarztpraxis.com"
              className="text-brown text-base leading-6"
            >
              eberbach@i-hausarztpraxis.com
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <p className="text-brown text-base leading-6">
              Schienenstraße 5<br />
              68305 Mannheim
            </p>
            <p className="text-brown text-base leading-6">
              Bahnofspl. 7,
              <br />
              69412 Eberbach
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
