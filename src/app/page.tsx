'use client'
import carImage from "../images/first-container-car.png"
import carImageSecond from "../images/first-container-car-second.png"
import ContactForm from "@/components/form";
import bigLogo from '../images/bigLogo.svg'
import { SnackbarProvider } from 'notistack';

export default function Home() {
  return (
     <SnackbarProvider maxSnack={3}>
    <div className="w-full flex flex-col items-center min-h-screen pb-[100px]">
      <div
      style={{ backgroundImage: `url(${carImage.src})` }}
      className="bg-cover bg-center w-full h-[550px]"
      />
      <div className="flex flex-col items-start w-full mt-5 ml-3 mb-8">

        <h1 className="text-titleSize md:text-titleSize-md lg:text-titleSize-lg font-krona font-bold break-words mx-5 text-black">
          About us:
        </h1>

        <p className="text-subtitleSize md:text-subtitleSize-md lg:text-subtitleSize-lg font-montserrat text-black font-normal mt-5 mx-5 mr-10">
          Welcome to Mart Transit LLC, FMCSA licensed company, we provide door to door direct transport services for your vehicles, motorcycles, classic, luxury, exotic, custom and high end cars for the best service at the best price in all states!
          We have dedicated honest and reliable personnel with many years of experience, we work very hard to make sure your vehicle get picked up and delivered on time and we guarantee you will be provided with hassle-free move!
          All our transport carriers are fully insured for highest limits, your vehicle is protected the entire time it is in our care.
          So car transportation with us is easy, comfortable and safe.
        </p>
      </div>
       <div
        style={{ backgroundImage: `url(${carImageSecond.src})` }}
        className="bg-cover bg-center w-full h-[550px]"
       />
     
      <div className="mt-10 w-full flex justify-between px-10">
        <div className="flex flex-col">
            <p className="text-titleSize md:text-titleSize-md lg:text-titleSize-lg font-krona font-bold break-words text-black mb-5">
              Car Delivery Form:
            </p>
           <ContactForm />
        </div>
       
        <div className="flex flex-col items-center justify-center">
          <div
            style={{ backgroundImage: `url(${bigLogo.src})` }}
            className="bg-cover bg-center w-[470px] h-[470px]"
          />
          <p className="text-titleSize md:text-titleSize-md lg:text-titleSize-lg font-krona font-bold break-words text-black mb-5 text-center">Mart Transit LLC</p>
        </div>
      </div>
      </div>
      </SnackbarProvider>
  );
}
