import { useState, useEffect } from "react";

const CautionMarquee = () => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-96 h-24 bg-yellow-400 border-4 border-black rounded-lg shadow-lg overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div
        className={`flex justify-center p-1 h-full ${
          isBlinking ? "opacity-100" : "opacity-70"
        } transition-opacity duration-300`}
      >
        <span className="text-black text-4xl font-bold uppercase tracking-wider">
          Caution
        </span>
      </div>
      <div className="absolute bottom-0 overflow-hidden w-full bg-black py-1">
        <div className="flex whitespace-nowrap">
          <div className="animate-marquee text-yellow-400 text-lg font-semibold uppercase tracking-wider">
            Do not enter • Do not enter • Do not enter • Do not enter •&nbsp;
          </div>
          <div
            className="animate-marquee text-yellow-400 text-lg font-semibold uppercase tracking-wider"
            aria-hidden="true"
          >
            Do not enter • Do not enter • Do not enter • Do not enter •&nbsp;
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 w-4 h-4 rounded-full shadow-inner m-2 transition-colors duration-300 ${
          isBlinking ? "bg-white" : "bg-yellow-300"
        }`}
      ></div>
      <div
        className={`absolute top-0 right-0 w-4 h-4 rounded-full shadow-inner m-2 transition-colors duration-300 ${
          isBlinking ? "bg-white" : "bg-yellow-300"
        }`}
      ></div>
      <div
        className={`absolute bottom-0 left-0 w-4 h-4 rounded-full shadow-inner m-2 transition-colors duration-300 ${
          isBlinking ? "bg-white" : "bg-yellow-300"
        }`}
      ></div>
      <div
        className={`absolute bottom-0 right-0 w-4 h-4 rounded-full shadow-inner m-2 transition-colors duration-300 ${
          isBlinking ? "bg-white" : "bg-yellow-300"
        }`}
      ></div>
    </div>
  );
};

export default CautionMarquee;
