import BuyCard from "./BuyCard";
import buycard1 from '../assets/buycard1.svg'
import buycard2 from '../assets/buycard2.svg'
import buycard3 from '../assets/buycard3.svg'

const BuySection = () => {
  return (
    <div className="bg-[#0797EB]   py-5 pb-24 mt-12 ">
      <div className="mx-9">
        <h2 className="py-12 piedra-regular text-white text-5xl ">
          HOW TO BUY
        </h2>
        <div className="flex lg:flex-row flex-col gap-y-16 lg:justify-between gap-3  justify-center items-center w-full">
          <BuyCard
            header={"Create a Wallet"}
            body={
              "You can download and use any of the ton wallets like tonkeeper"
            }
            img={buycard1}
            direction={"flip-left"}
          />

          <BuyCard
            header={"Swap on Dedust"}
            body={"All you need to do is buy some TON and swap to TONSEASON"}
            img={buycard2}
            direction={"flip-left"}
           
          />
          <BuyCard
            header={"Check Wallet"}
            body={"After swapping using dedust.io, you should have $TSE now"}
            img={buycard2}
            direction={"flip-left"}
          />
        </div>
      </div>
    </div>
  );
}
export default BuySection