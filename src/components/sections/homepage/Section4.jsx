import Image from "next/image";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const Section4 = () => {
  return (
    <div className="mt-16 grid place-items-center items-center justify-center rounded-lg lg:pl-14 bg-primary1 md:h-auto lg:h-[500px]">
    <div className="flex max-w-7xl flex-col items-center  lg:flex-row"
    ><div className="p-10 flex flex-col  text-neutral">
        <h1 className="text-wrap  uppercase text-[37.9px] leading-[42.64px] lg:mt-4">
          Force Finance Coin (FFC) POWERd BY Ethereum Chain
        </h1>
        <p className=" mt-4  text-wrap text-[16px] leading-[24px]">
          Force Finance Coin (FFC) is a revolutionary cryptocurrency built on
          the Ethereum blockchain, offering users access to a decentralized
          financial ecosystem powered by cutting-edge blockchain technology.{" "}
        </p>
        <div className="mt-5 flex  flex-col gap-y-5">
          <div className="flex items-center">
            <Image width={24} height={24} alt="img" src="/homepage/tick.svg" />
            <p className="ml-2">Decentralized finance on Ethereum chain</p>
          </div>

          <div className="flex items-center">
            <Image width={24} height={24} alt="img" src="/homepage/tick.svg" />
            <p className="ml-2">
              Efficient transactions with scalable solutions
            </p>
          </div>

          <div className="flex items-center">
            <Image width={24} height={24} alt="img" src="/homepage/tick.svg" />
            <p className="ml-2">Secure smart contract functionality ensured</p>
          </div>
        </div>
               <div className="w-full  mt-4 flex flex-col gap-8 md:flex-row">       <Button title="Learn more" size="small" outline="border-black" /></div>
      </div>
      <div className="flex items-center  lg:mr-32 justify-center ">
        <Image
          src="/homepage/developers-transformed.png"
          width={532}
          height={484}
          alt="img"
        />
      </div>

    </div>
      
    </div>
  );
};

export default Section4;