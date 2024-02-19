import Image from "next/image";
import Button from "@/components/buttons/Button";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const ServicesExperience = () => {
  return (
    <div className="mt-16 grid place-items-center items-center justify-center rounded-lg bg-primary1 md:h-auto lg:h-[700px] ">
      <div className="flex max-w-[86rem] justify-between  flex-col items-center gap-8  lg:flex-row">
        <div className="flex flex-col sm:p-6 p-2 max-w-[50rem] text-neutral">
          <h3 className="text-wrap max-w-lg text-[37.9px] uppercase leading-[42.64px] lg:mt-4">
            Experience the Power of Web 3 Wallets{" "}
          </h3>
          <p className=" mt-4  text-wrap text-[16px] max-w-[34rem] leading-[24px]">
            Discover the Next Generation of Wallets, Web 3 Wallets seamlessly
            integrate with decentralized applications and blockchain networks,
            offering enhanced security, multi-chain support, and user-centric
            design. Enjoy interoperability and DeFi integration, empowering you
            to navigate the digital frontier with ease and confidence.
          </p>
          <div className="mt-5 flex flex-col gap-y-5">
            <div className="flex items-center">
              <Image
                width={24}
                height={24}
                alt="img"
                src="/homepage/tick.svg"
              />
              <p className="ml-2">Seamless Integration, Connect with ease to decentralized applications and blockchain networks</p>
            </div>

            <div className="flex items-center">
              <Image
                width={24}
                height={24}
                alt="img"
                src="/homepage/tick.svg"
              />
              <p className="ml-2">
              Enhanced Security, Safeguard your assets with robust encryption and decentralized architecture              </p>
            </div>

            <div className="flex items-center">
              <Image
                width={24}
                height={24}
                alt="img"
                src="/homepage/tick.svg"
              />
              <p className="ml-2">
              Multi-Chain Support, Access multiple blockchains and digital assets from a single interface.              </p>
            </div>
            <div className="flex items-center">
              <Image
                width={24}
                height={24}
                alt="img"
                src="/homepage/tick.svg"
              />
              <p className="ml-2">
              DeFi Integration, Explore decentralized finance services like staking, yield farming, and more directly from your wallet</p>
            </div>
          </div>
         
        </div>
        <div className="">
          <Image
            src="/homepage/developers-transformed.png"
            width={465}
            height={428}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesExperience;