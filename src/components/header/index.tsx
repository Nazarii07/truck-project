import Image from "next/image";
import Logo from "../../images/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full justify-between items-center px-6 py-2 bg-headerBg">
      <Image src={Logo} alt="Logo" width={75} height={75}/>
      <div>
        <Link href={'/'} className="text-titleSize font-krona">
          Mart Transit LLC
        </Link>
      </div>
      <div>
        216 858 5758
      </div>
    </header>
  );
};

export default Header;
