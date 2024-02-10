import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-auto">
        <Image
          src={"/images/logo/vertex.png"}
          alt="vertex"
          height={500}
          width={500}
          className="dark:brightness-0 dark:invert"
        />
        <p className="text-center text-muted-foreground">
          Elevate Your Digital Presence with Expert Web Development Services
        </p>
      </div>
    </div>
  );
};

export default Hero;
