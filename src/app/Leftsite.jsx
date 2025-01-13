import { useState } from "react";
import Icons from "./Icons";
import Sun from "./Sun";

export default function Leftsite({
  searched,
  setChangecity,
  getweather,
  changeCity,
  weather,
  sun,
  setSunny,
  setDate,
  date,
  condition,
}) {
  const photo = () => {
    let test = condition.toLowerCase();
    // "light freezing rain"
    switch (true) {
      case test.includes("sun"):
        return <img src="/icon.png" alt="" />;
      case test.includes("mist"):
        return <img src="/Clouds.png" alt="" />;
      case test.includes("cloud"):
        return <img src="/icon.png" />;
      case test.includes("rain"):
        return <img src="/Rain.png " alt="" />;
      case test.includes("snow"):
        return <img src="/Snow.png" alt="" />;
      case test.includes("overcast"):
        return <img src="/Clouds.png" alt="" />;
      case test.includes("clear"):
        return <img src="/icon.png" alt="" />;
    }
  };
  return (
    <div className="bg-[#F3F4F6]   w-[50vw] h-[100vh] flex justify-center items-center  ">
      <div className="bg-[rgba(255,255,255,0.75)] w-[400px] h-[80vh] rounded-[48px] absolute p-[40px]">
        <div className="flex justify-start mr-[20px]"></div>
        <p className=" flex  text-gray-500 text-lg not-italic font-medium leading-none ml-[20px] ">
          {date}
        </p>

        <div className=" ">
          <h1 className="text-[50px] flex font-extrabold text-5xl text-black mt-[40px] justify-center h-[90px]">
            {changeCity}
            <svg
              className="mt-[15px] "
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                stroke="#4B5563"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m18.477 25.577 4.683-8.362C26.223 11.745 22.27 5 16 5S5.777 11.745 8.84 17.215l4.683 8.362c1.084 1.936 3.87 1.936 4.954 0"
              ></path>
              <circle
                cx="16"
                cy="13"
                r="2"
                stroke="#4B5563"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></circle>
            </svg>
          </h1>
        </div>

        {/* <Sun sun={sun} setSunny={setSunny} /> */}
        <div className="m-auto mt-[30px]">{photo()}</div>

        <h2 className="text-gray-600 text-8xl font-extrabold  flex  mt-[40px]  ml-[10px]">
          {weather}
        </h2>
        <h1 className="text-[#FF8E27] text-2xl font-extrabold ml-[20px] mt-[30px]">
          {condition}
        </h1>
        <Icons />
      </div>
    </div>
  );
}
