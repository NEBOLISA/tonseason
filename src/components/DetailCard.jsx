import { useEffect} from "react";
import "aos/dist/aos.css";
import AOS from "aos";


const DetailCard = ({
  header,
  p1,
  p2,
  p3,
  spanText,
  img,
  columnreverse,
  gray,
  headerFadeDirection,
  p1FadeDirection,
 
}) => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <div className={`${gray ? "bg-gray-100" : "bg-white"} lg:mt-7 mt-14 `}>
      <div
        className={`${
          columnreverse && "lg:flex-row-reverse "
        }  flex items-center gap-8 mx-9 lg:flex-row py-4  flex-col-reverse`}
      >
        <div className={`lg:w-2/3 w-full`}>
          <h1
            data-aos={headerFadeDirection}
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className="piedra-regular lg:text-start text-center text-5xl text-[#016399]"
          >
            {header}
          </h1>
          <div
            data-aos={headerFadeDirection}
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className="lg:text-left text-center"
          >
            <p className="text-gray-700 w-[96%]">{p1}</p>
            <p className="text-gray-700 w-[96%] mt-7">
              {" "}
              {p2}{" "}
              {spanText && (
                <span className="font-bold text-black"> {spanText}</span>
              )}
            </p>
            {p3 && <p> {p3}</p>}
          </div>
        </div>
        <img src={img} alt="about" className="w-1/2 lg:w-1/3" />
      </div>
    </div>
  );
};
export default DetailCard