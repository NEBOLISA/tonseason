import about from '../assets/about.svg'
import DetailCard from './DetailCard';
import { useState } from "react";
import { FaClipboard } from "react-icons/fa";

const DetailsSection = () => {
    const detailData = {
      Aboutheader: "ABOUT  TONSEASON",
      Aboutparagraph1:
        "This token was created by The Krypto King, a visionary dedicated to building a community where people can learn the art of trading with integrity and proper ethics.",
      Aboutparagraph2:
        " Our goal is to foster a supportive and incentivizing environmentwhere all investors benefit from each other’s knowledge and experience, embodying the spirit of",
      AboutSpanText: "One for all, all for one.",
      Missionheader: "OUR  MISSION",
      MissionP1:
        "In our quest to enhance this mission, we are expanding to the TON blockchain. This move brings us to a platform with fewer jeeters and a community of traders who understand the importance of strategic investing.",
      MissionP2:
        "By taking out their initial investments and leaving a moon bag, these experienced traders ensure that everyone has the chance to see their investments grow.",
      Communityheader: "OUR  COMMUNITY",
      CommunityP1:
        "Our community thrives on the principle of educating and empowering each other. We focus on teaching the trading technique of DCA-ing out, not just to the current members but to future generations of crypto traders.",
      CommunityP2:
        "We also believe in the opportunity for everyone to make good income and money on the TON blockchain, especially with a slightly longer-term approach to holding. ",
      CommunityP3:
        "Together, we aim to create a legacy of responsible trading and sustained growth.",
    };
     const [isTextCopied, setIsTextCopied] = useState(false);
     const contractAddress =
       " EQC5DX3xP_jZETDDg3Ja_H2XgOHOGP1tPy98v6hhciUepv76";
     const copyToClipboard = async(text) => {
       navigator.clipboard
         .writeText(text)
         .then(() => {
           setIsTextCopied(true);
           setTimeout(() => {
             setIsTextCopied(false);
           }, 3000);
         })
         .catch((err) => {
           console.error("Failed to copy text: ", err);
         });
     };
  return (
    <div className="mt-4 pb-14">
      <div className=" flex flex-col gap-3 items-center justify-center relative">
        <h3 className="text-white bg-black px-3 py-[3px] rounded-md">
          <span className="font-bold">Contract</span> Address
        </h3>
        <div
          onClick={() => copyToClipboard(contractAddress)}
          className=" flex items-center justify-center gap-3 bg-[#024C89] px-3 text-center py-[3px] rounded-md mx-2 md:w-max w-[98%] cursor-pointer"
        >
          <h3 className="text-white whitespace-normal  text-[11px] break-words  ">
            {contractAddress}
          </h3>
          <FaClipboard className="text-white cursor-pointer" />
          {isTextCopied && (
            <div className="px-3 py-[2px] absolute -bottom-8 shadow-xl text-sm rounded-md bg-gray-100">
              Address copied
            </div>
          )}
        </div>
      </div>
      <DetailCard
        header={detailData.Aboutheader}
        p1={detailData.Aboutparagraph1}
        p2={detailData.Aboutparagraph2}
        spanText={detailData.AboutSpanText}
        img={about}
      />
      <DetailCard
        header={detailData.Missionheader}
        p1={detailData.MissionP1}
        p2={detailData.MissionP2}
        img={about}
        columnreverse
        gray
      />
      <DetailCard
        header={detailData.Communityheader}
        p1={detailData.CommunityP1}
        p2={detailData.CommunityP2}
        p3={detailData.CommunityP3}
        img={about}
      />
    </div>
  );
}
export default DetailsSection