import React from "react";
import KeyFeaturesSection from "../common/KeyFeaturesSection";
import GlimpseSection from "../common/Glimpsesection";

const KEY_FEATURES_DATA = [
  "First venue in the world",
  "First in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium, 5 Star Hunter Valley resort and airport all in 500 meters radius",
  "First one stop tennis academy in Asia Pacific",
  "First venue in the world",
  "First in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium, 5 Star Hunter Valley resort and airport all in 500 meters radius",
  "First one stop tennis academy in Asia Pacific",
];

const GLIMPSE_IMAGES_DATA = [
  {
    src: "https://images.unsplash.com/photo-1545809074-59472b3f5ecc?w=500&q=80",
    alt: "Tennis player serving on court",
  },
  {
    src: "https://images.unsplash.com/photo-1560012057-4372e14c5085?w=700&q=80",
    alt: "Aerial view of multiple tennis courts",
  },
];

const KeyFeature = () => {
  const handleRegister = () => {
    console.log("Register clicked");
  };
  return (
    <div className="min-h-screen bg-white">
      <KeyFeaturesSection
        title="key Features"
        subtitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        buttonLabel="Register Now"
        features={KEY_FEATURES_DATA}
        onButtonClick={handleRegister}
      />
      <GlimpseSection
        title="A Glimpse of Excellence"
        subtitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        buttonLabel="Register Now"
        images={GLIMPSE_IMAGES_DATA}
        onButtonClick={handleRegister}
      />
    </div>
  );
};

export default KeyFeature;
