import { TypeAnimation } from "react-type-animation";
import { RiMailSendLine, RiDownloadLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const LeftHero = () => (
  <div className="flex flex-col gap-5">
    <div className="w-full flex flex-col gap-5">
      <div className="flex gap-4 items-center">
        <div className="w-[30px] h-[0.5px] bg-blue-500"></div>
        <h6 className="text-md font-semibold text-blue-500">HELLO</h6>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-4xl font-bold  text-gray-300">
            I'm <span className="text-blue-500">JOVAN</span> PANJI PRATAMA
          </h1>
          <h2 className="text-2xl font-bold  text-gray-300">
            I'm a{" "}
            <span className="text-blue-500 filter:">
              <TypeAnimation
                sequence={[
                  "FRONTEND DEV",
                  1000,
                  "BACKEND DEV",
                  1000,
                  "GAMER",
                  1000,
                  "HUMAN",
                  1000,
                ]}
                repeat={Infinity}
                speed={30}
              />
            </span>
          </h2>
        </div>
        <p className="text-sm leading-loose">
          This is <span className="text-blue-500">Jovan Panji Pratama</span>, a
          web developer. located in ngawi, looking for a job in indonesia
        </p>
      </div>
    </div>
    <div className="flex gap-4">
      <button className="hidden lg:flex items-center duration-200 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
        <IconContext.Provider value={{ className: "react-icon" }}>
          <span className="mr-3">Hire Me</span>
          <RiMailSendLine />
        </IconContext.Provider>
      </button>
      <button className="hidden lg:flex items-center duration-200 border border-gray-300 hover:border-blue-500 text-gray-300 hover:text-blue-500 font-semibold py-2 px-4 rounded button">
        <IconContext.Provider value={{ className: "react-icon" }}>
          <span className="mr-3">Download CV</span>
          <RiDownloadLine />
        </IconContext.Provider>
      </button>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full pt-[150px] pb-[150px] pr-[10%] pl-[10%] h-fit grid lg:grid-cols-2  items-center"
    >
      <LeftHero />
      <div className="flex justify-center">
        <img
          src="https://sandhikagalih.github.io/portfolio-tailwind-css/dist/img/sandhika.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
