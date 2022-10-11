import ScreenOne from "./assets/screen-one.png";
import ScreenTwo from "./assets/screen-two.png";

export function Home() {
  return (
    <>
      <div className="w-[100%] md:w-[60%]">
        <h1 className="mb-7 font-poppins text-4xl text-center md:text-left md:text-7xl md:leading-[6rem] font-bold text-gray-700">
          Baixe o app
          <br /> Planeja Livre
        </h1>

        <small className="block mb-7 text-base text-gray-700">
          Planeja livre foi desenvolvido para você planejar suas atividades
          fisicas <br />e trocar ideias com pessoas como o mesmo intuito
          construtivo que você
        </small>

        <div className="md:flex hidden gap-6">
          <a
            href=""
            className="font-poppins text-center bg-blue hover:bg-blue text-white font-bold px-5 w-1/4 py-4 rounded-full"
          >
            Android <i className="fa-brands fa-google-play"></i>
          </a>
          <a
            href=""
            className="font-poppins text-center bg-blue hover:bg-blue text-white font-bold px-5 w-1/4 py-4 rounded-full"
          >
            IOS <i className="fa-brands fa-app-store-ios"></i>
          </a>
        </div>
      </div>

      <div className="w-[100%] md:w-[40%] flex flex-col md:flex-row justify-center md:-space-x-10 md:space-y-16">
        <img
          src={ScreenOne}
          className="z-20 md:h-[35rem] mb-5"
          alt="Screen One"
        />
        <img src={ScreenTwo} className="z-10 md:h-[30rem]" alt="Screen Two" />
      </div>

      <div className="flex flex-col justify-center md:flex-row gap-5 md:invisible">
        <a
          href=""
          className="font-poppins text-center bg-blue hover:bg-blue text-white font-bold p-5 rounded-full"
        >
          Android <i className="fa-brands fa-google-play"></i>
        </a>

        <a
          href=""
          className="font-poppins text-center bg-blue hover:bg-blue text-white font-bold p-5 rounded-full"
        >
          IOS <i className="fa-brands fa-app-store-ios"></i>
        </a>
      </div>
    </>
  );
}
