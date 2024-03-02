import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  className: string;
}

const Icon = ({ className }: Props) => {
  return (
    <div>
      <Image
        src={"/images/logo/dd.png"}
        className={cn(className, "bg-blend-exclusion")}
        alt="Logo"
        width={80}
        height={80}
        unoptimized
      />
    </div>
  );
};

export default Icon;
