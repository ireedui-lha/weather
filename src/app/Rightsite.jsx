import Iconsmoon from "./Iconsmoon";
import Moon from "./Moon";

export default function Rightsite({
  changeCity,
  rweather,
  setMoon,
  moon,
  date,
  condition,
  none,
}) {
  const Case = (condition) => {
    let test = condition.toLowerCase();
    // "light freezing rain"
    switch (true) {
      case test.includes("sun"):
        return <img src="/moon.png" alt="" />;
      case test.includes("clear"):
        return <img src="/moon.png" alt="" />;
      case test.includes("mist"):
        return <img src="/moon.png  " alt="" />;
      case test.includes("rain"):
        return <img src="/Rain.png" alt="" />;
      case test.includes("cloud"):
        return <img src="/moon.png" alt="" />;
    }
  };
  console.log({ condition });
  return (
    <div className="bg-[#0F141E]  w-[50vw] h-[100vh] flex justify-center items-center">
      <div className="bg-[rgba(17,24,39)] w-[400px] h-[80vh] rounded-[48px] p-[40px]">
        <div>
          <p className="flex  text-gray-500 text-lg not-italic font-medium leading-none mt-[10px] ml-[20px]">
            {date}
          </p>
          <h1 className="text-[50px] flex font-extrabold text-5xl">
            {changeCity}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="lucide lucide-map-pin-check-inside mt-[15px]"
              viewBox="0 0 24 24"
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <path d="m9 10 2 2 4-4"></path>
            </svg>
          </h1>
        </div>

        {/* <Moon moon={moon} setMoon={setMoon} /> */}
        <div className="m-auto">{Case(condition)}</div>
        <h2 className="text-gray-600 text-8xl font-extrabold  flex  mt-[16px]  ml-[10px]">
          {rweather}
        </h2>
        <h3 className="text-[#FF8E27] text-2xl font-extrabold ml-[20px] ">
          {none}
        </h3>
        <Iconsmoon />
      </div>
    </div>
  );
}
