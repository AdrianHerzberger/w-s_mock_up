import Image from 'next/image';
import logo from "../../../public/layout-logo-w-s-weis.svg"

export const Header = () => {
  return (
    <header className="row-start-1 flex gap-6 flex-wrap items-center justify-start w-full">
      <Image
        src={logo} 
        alt={"logo"}
        width={100} 
        priority
      />
    </header>
  );
}
