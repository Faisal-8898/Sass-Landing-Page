import React from "react";
import { Element } from "react-scroll";
import { features } from "../constants";

const Features = () => {
  return (
    <section>
      <Element className="features">
        <div className="container">
          <div className="relative flex flex-wrap border-2 border-s3 rounded-7xl feature-after max-md:flex-nowrap md:overflow-hidden max-md:flex-col md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map(({ id, icon, caption, button, text, title }) => (
              <div
                key={id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex items-start justify-start">
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                    <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src={icon}
                      className="object-contain size-28"
                      alt="feature_icon"
                    />
                  </div>
                </div>
                <p className="caption mb-5 max-md:mb-6 max-md:h5">{caption}</p>
                <h2 className="max-w-400 text-p4 mb-7  h3 max-md:mb-5 max-md:h5">{title}</h2>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
