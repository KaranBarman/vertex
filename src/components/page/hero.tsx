import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex rounded-md py-10 px-2 flex-col bg-gradient-to-r my-10 from-cyan-500 to-blue-500">
      <div className="mx-auto">
        <Image
          src={"/images/logo/vertex.png"}
          alt="vertex"
          height={500}
          width={500}
          className="brightness-0 invert"
          unoptimized
        />
        <p className="text-center text-black">
          Elevate Your Digital Presence with Expert Web Development Services
        </p>
      </div>
    </div>
  );
};

export default Hero;
