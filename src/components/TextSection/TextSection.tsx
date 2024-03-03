import React from "react";
import sora_bg from "@/images/text_section/pexels-sora.jpg";

const TextSection = () => {
  return (
    <div className="relative">
      <img
        className="!h-[880px] object-cover lg:h-full lg:w-full"
        src={sora_bg.src}
        alt="sora background"
        width={1400}
        height={650}
      />
      <div className="absolute mx-8 top-1/2 left-0 lg:left-[10vw] translate-y-[-50%] text-white">
        <h1
          className="text-3xl font-bold w-full lg:w-96 mb-4"
          data-aos="fade-up"
        >
          Jakie korzyści przynosi Aflux®
        </h1>
        <p
          className="text-sm lg:text-lg font-extralight w-full lg:w-1/3 mb-4"
          data-aos="fade-up"
        >
          Aflux® to wysokiej jakości krem do rąk stworzony z myślą o intensywnej
          pielęgnacji suchej i zniszczonej skóry dłoni.
        </p>
        <p
          className="text-sm lg:text-lg font-extralight w-full lg:w-1/3 mb-4"
          data-aos="fade-up"
        >
          Jego unikalna formuła zawiera składniki odżywcze i nawilżające, takie
          jak masło shea, witamina E i ekstrakty roślinne, które głęboko
          penetrują skórę, przywracając jej miękkość i elastyczność.
        </p>
        <ul className="my-4 pl-4" data-aos="fade-up">
          <li className="text-white font-extralight text-sm lg:text-lg relative my-2 before:inline-block before:mb-[2px] lg:before:mb-0 before:w-2 before:h-2 lg:before:w-3 lg:before:h-3 before:mr-3 lg:before:mr-4 before:bg-green-500 before:rounded-full before:border before:border-green-600 w-full lg:w-1/3">
            Intensywne nawilżenie: Krem Aflux głęboko nawilża suchą skórę dłoni,
            przywracając jej miękkość i elastyczność.
          </li>
          <li className="text-white font-extralight text-sm lg:text-lg relative my-2 before:inline-block before:mb-[2px] lg:before:mb-0 before:w-2 before:h-2 lg:before:w-3 lg:before:h-3 before:mr-3 lg:before:mr-4 before:bg-green-500 before:rounded-full before:border before:border-green-600 w-full lg:w-1/3">
            Szybkie wchłanianie: Lekka formuła kremu szybko się wchłania, nie
            pozostawiając tłustej warstwy, co pozwala natychmiastowo wrócić do
            codziennych czynności.
          </li>
          <li className="text-white font-extralight text-sm lg:text-lg relative my-2 before:inline-block before:mb-[2px] lg:before:mb-0 before:w-2 before:h-2 lg:before:w-3 lg:before:h-3 before:mr-3 lg:before:mr-4 before:bg-green-500 before:rounded-full before:border before:border-green-600 w-full lg:w-1/3">
            Delikatny zapach: Krem Aflux ma delikatną, świeżą woń, która dodaje
            przyjemności każdej aplikacji, pozostawiając dłonie odświeżone i
            pachnące.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TextSection;
