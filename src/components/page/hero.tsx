import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Hero = () => {
  let now = new Date();
  let currentHour = now.getMinutes();

  return (
    <div
      className={cn(
        "flex rounded-lg py-10 px-2 flex-col my-10 bg-gradient-to-r",
        currentHour % 2 === 0
          ? "bg-gradient-to-r from-emerald-500 to-emerald-900"
          : "bg-gradient-to-r from-slate-900 to-slate-700"
      )}
    >
      <div className="mx-auto">
        <Image
          src={"/images/logo/vertex.png"}
          alt="vertex"
          height={500}
          width={500}
          className="brightness-0 invert"
          unoptimized
        />
        <p className="text-center text-white">
          Elevate Your Digital Presence with Expert Web Development Services
        </p>
      </div>
    </div>
  );
};

export default Hero;
