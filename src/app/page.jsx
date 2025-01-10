"use client";

import { useEffect, useState } from "react";
import Border from "./Border";
import Leftsite from "./Leftsite";
import Midleft from "./Midleft";
import Rightsite from "./Rightsite";
import Search from "./Search";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState([]);
  const [changeCity, setChangecity] = useState("ulaanbaator");
  const [weather, setWeather] = useState();
  const [sun, setSunny] = useState("sun");
  const [moon, setMoon] = useState("moon");
  const [date, setDate] = useState("");
  const [condition, setCondition] = useState("");
  const [loading, setLoading] = useState(true);
  const [rweather, setRweather] = useState();
  const [none, setNone] = useState("");

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let inCome = data.data.map((country) => {
      return country.cities;
    });
    inCome = inCome.flat();
    setCities(inCome);
  }

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getWeather("Ulaanbaatar");
  }, []);
  async function getWeather(city) {
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=8e8cf64c39e54ab0baa21021250801&q=${city}`
    );
    const data = await result.json();
    console.log(data);
    setSunny(data.current.condition.text);
    setMoon(data.current.condition.tex);
    setChangecity(city);
    setCondition(data.current.condition.text);
    setDate(data.forecast.forecastday[0].date);
    setRweather(data.forecast.forecastday[0].day.mintemp_c);
    setNone(data.forecast.forecastday[0].hour[0].condition.text);

    // getWeather(city);
    setWeather(data.forecast.forecastday[0].day.maxtemp_c);

    setSearch("");
  }
  const searchHandler = (e) => {
    const search = e.target.value;
    const filtered = cities.filter((city) => {
      return city.includes(search);
    });
    setSearch(filtered);
  };
  // const handleClick = () => {
  //   if (sun === "sun") {
  //     setSunny("cloudy");
  //   }
  //   if (sun === "cloudy") {
  //     setSunny("sun");
  //   }
  // };
  // const changeClick = () => {
  //   if (moon === "Cloudy") {
  //     setMoon("Sunny");
  //   }
  //   if (moon === "Sunny") {
  //     setMoon("Cloudy");
  //   }
  // };
  // const fetchdata = () => {
  //   setLoading(true);
  //   fetch("https://countriesnow.space/api/v0.1/countries");
  //   setLoading(true);
  // };
  // if (loading) {
  //   return <div className="text-black"></div>;
  // }
  return (
    <div className="flex relative aspect[] w-[100vw] h-[100vh] justify-center items-center ">
      <div className="absolute left-[7vw] top-[3vh] rounded-full h-[6vh] min-w-[320px] w-[512px] border-none bg-white text-black ">
        <div className="flex items-center justify-center mt-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="lucide lucide-search"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            className=" text-black  outline-none  items-center  font-manrope text-[30px] font-bold line-clamp-1 "
            type="text"
            placeholder="Search"
            onChange={searchHandler}
            name=""
            id=""
          />
        </div>
        <img
          className="w-[176px] h-[176px] blur-sm flex mt-[30px] m-auto"
          src="./shar.png"
          alt=""
        />
        <div className="absolute top-[90px] left-[10px] z-30 rounded-md bg-white/80 bg-blur-md w-[512px]">
          {search.length > 0 &&
            search.slice(0, 4).map((city, index) => (
              <div key={index} className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 32 32"
                >
                  <path
                    stroke="#9CA3AF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m18.477 25.577 4.683-8.362C26.223 11.745 22.27 5 16 5S5.777 11.745 8.84 17.215l4.683 8.362c1.084 1.936 3.87 1.936 4.954 0"
                  ></path>
                  <circle
                    cx="16"
                    cy="13"
                    r="2"
                    stroke="#9CA3AF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></circle>
                </svg>
                <p
                  className=" font-bold text-black text-2xl m-[5px]"
                  onClick={() => getWeather(city)}
                >
                  {city}
                </p>
              </div>
            ))}
        </div>
      </div>

      <Leftsite
        changeCity={changeCity}
        getweather={getWeather}
        setChangecity={setChangecity}
        setSearch={setSearch}
        weather={weather}
        setSunny={setSunny}
        sun={sun}
        setDate={setDate}
        date={date}
        condition={condition}
        setCondition={setCondition}

        // handleClick={handleClick}
      />

      <Border />

      <Rightsite
        none={none}
        setNone={setNone}
        date={date}
        // changeClick={changeClick}
        setDate={setDate}
        changeCity={changeCity}
        getweather={getWeather}
        setChangecity={setChangecity}
        setSearch={setSearch}
        condition={condition}
        setCondition={setCondition}
        rweather={rweather}
        setRweather={setRweather}
        moon={moon}
        setMoon={setMoon}
      />
    </div>

    // <div className="flex justify-center items-center aspect[] w-[1200px] h-[1000px]">
    //   <div className="bg-[#FFF] flex justify-center items-center aspect[] w-[1200px] h-[1000px]">
    //     <div className="  bg-green-200 aspect[] w-[414px] h-[896px]  rounded-[48px] "></div>
    //   </div>
    //   <div className="bg-[#0B0F1A] flex justify-center items-center aspect[] w-[1200px] h-[1000px]">
    //     <div className="bg-red-200 aspect[] w-[414px] h-[896px] rounded-[48px]"></div>
    //   </div>
    // </div>
  );
}
