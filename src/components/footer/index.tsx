import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 flex justify-between px-[20px] items-center border-t border-footerTopBorder w-full bg-footerBg min-h-[70px]">
      <p className="mt-3 mb-3 text-customGray font-montserrat text-footerSize md:text-footerSize-md">
        (c) Product by Mart Transit LLC
      </p>
      <div className="flex items-center justify-between">
        <div className="flex flex-col mr-10">
          <p className="mt-3 mb-3  text-customGray font-montserrat text-footerSize md:text-footerSize-md">
            • Phone: 216 858 5758
          </p>
          <p className="mt-3 mb-3 text-customGray font-montserrat text-footerSize md:text-footerSize-md">
            • @mail: mart.transit.dispatch@gmail.com
          </p>
        </div>

        <div className="flex flex-col">
          <Link href={"/privacy-policy"}>
            <p className="mt-3 mb-3  text-customGray font-montserrat text-footerSize md:text-footerSize-md cursor-pointer">
              • Privacy Policy
            </p>
          </Link>
          <Link href={"/terms-conditions"}>
            <p className="mt-3 mb-3 text-customGray font-montserrat text-footerSize md:text-footerSize-md cursor-pointer">
              • Terms and Conditions
            </p>
          </Link>
          <Link href={"/terms-service"}>
            <p className="mt-3 mb-3 text-customGray font-montserrat text-footerSize md:text-footerSize-md cursor-pointer">
              • Terms of Service
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
