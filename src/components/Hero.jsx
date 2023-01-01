import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { Cursor, useTypewriter } from 'react-simple-typewriter'


const Hero = () => {
  const [text, count] = useTypewriter({
    words: ['< a Software Engineer/>', '< a Front-End Developer/>', '<passionate about web-design/>'],
    loop: true,
    delaySpeed: 2000,


  })
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} mb-10`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-col justify-center items-center w-full">
          <span className="sm:text-[50px] flex-1 font-poppins font-semibold text-center text-[52px] text-black ss:leading-[75.8px] leading-[75px]">
            Hello, my name is <br className="sm:block hidden" />{" "}</span>
          <span className="text-blue-800 flex-1  font-poppins font-semibold text-center text-[72px] text-black ss:leading-[100.8px] leading-[75px]">Kong Yu Chen</span>{" "}
          <p className="text-[30px] font-poppins font-semibold text-center">
            <span >I am <span className="text-blue-800">{text}</span></span>
            <Cursor cursorColor="#1E40AF"/>
          </p>

          <div className="sm:hidden md:mr-4 mr-0 mt-8">
            <button className="bg-transparent hover:bg-blue-800 text-blue-800 font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded font-poppins ">
            Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;