import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import { NavigationMenuDemo } from "./MenuBar";
const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image
          src={"/images/logo/dd.png"}
          alt="Logo"
          width={40}
          height={40}
          unoptimized
        />
        <h1 className="hero_font tracking-normal hidden sm:block">
          Durga Digitals
        </h1>
      </div>
      <NavigationMenuDemo />
      <ModeToggle />
    </header>
  );
};

export default Header;
