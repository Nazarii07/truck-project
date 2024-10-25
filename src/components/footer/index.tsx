import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 flex justify-between px-[20px] items-center border-t border-footerTopBorder w-full bg-footerBg min-h-[70px]">
      <p className="mt-3 mb-3 text-customGray font-montserrat text-footerSize md:text-footerSize-md">
        (c) Product by Mart Transit LLC
      </p>
      <div className="flex items-center justify-between">
        <p className="mt-3 mb-3 mr-6 text-customGray font-montserrat text-footerSize md:text-footerSize-md">
          Phone: 216 858 5758
        </p>
        <p className="mt-3 mb-3 mr-6 text-customGray font-montserrat text-footerSize md:text-footerSize-md">
          @mail: mart.transit.dispatch@gmail.com
        </p>
        <Link href={"/privacy-policy"}>
          <p className="mt-3 mb-3 text-customGray font-montserrat text-footerSize md:text-footerSize-md cursor-pointer">
            Privacy Policy
          </p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
