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
          className="hidden sm:block"
        />
        <h1 className="hero_font tracking-normal bg-gradient-to-r from-emerald-950 to-emerald-500 bg-clip-text text-transparent">
          Durga Digitals
        </h1>
      </div>
      <NavigationMenuDemo />
      <ModeToggle />
    </header>
  );
};

export default Header;
