import React from "react";
import hands_img from "@/images/aflux_info/hands.jpg";

const AfluxInfo = () => {
  return (
    <div className="flex bg-green-50 w-full justify-center">
      <div className="flex flex-row container mx-xl py-32 justify-center items-center">
        <div className="flex flex-col">
          <img
            className="flex rounded-full"
            src={hands_img.src}
            alt="hands img"
            width={540}
            height={540}
          />
        </div>
        <div className="flex flex-col ml-16">
          <h1 className="text-5xl mb-8">
            Aflux® <br></br>- przyszłość jest dziś
          </h1>
          <p className="text-lg mb-8">
            Krem do ciała poprawiający jędrność i sprężystość skóry, <br></br>
            wygładający pory i nadający skórze świetlisty blask.
          </p>
          <h2 className="text-2xl">
            W czym nasz produkt jest lepszy od innych?
          </h2>
          <ul className="my-4 pl-4">
            <li
              className="relative my-2 before:inline-block before:w-3 before:h-3 before:mr-4
            before:bg-green-500 before:rounded-full before:border before:border-green-600"
            >
              Bogata formuła skladników
            </li>
            <li
              className="relative my-2 before:inline-block before:w-3 before:h-3 before:mr-4
            before:bg-green-500 before:rounded-full before:border before:border-green-600"
            >
              Potwierdzona skuteczność niezliczoną ilością <br></br>badań
              laboratoryjnych
            </li>
            <li
              className="relative my-2 before:inline-block before:w-3 before:h-3 before:mr-4
            before:bg-green-500 before:rounded-full before:border before:border-green-600 after:inline-block"
            >
              Źródło wielu składników odżywczych
            </li>
          </ul>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default AfluxInfo;
