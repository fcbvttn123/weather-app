import bgTodaySmall from "../assets/images/bg-today-small.svg";
import iconSunny from "../assets/images/icon-sunny.webp";

export function TodayForecast() {
  return (
    <div className="px-[40px] mt-[20px]">
      <div className="grid gap-4 grid-cols-2">
        <div className="relative w-full p-[10px] bg-n-700 rounded-xl col-span-2 min-h-[200px]">
          <img
            alt="bgTodaySmall"
            srcset={bgTodaySmall}
            className="absolute inset-0 rounded-xl"
          />
          <p className="font-bold text-2xl text-center mt-[15px] text-n-0">
            Berlin, Germany
          </p>
          <p className="text-center text-xs text-n-200 mt-[5px]">
            Tuesday, Aug 5, 2025
          </p>
          <div className="flex items-center justify-center gap-x-[20px] mt-[10px]">
            <img
              srcset={iconSunny}
              width={80}
              alt="background image - today small"
            />
            <p className="font-bold text-6xl text-center mt-[15px] text-n-0">
              68°
            </p>
          </div>
        </div>
        <div className="w-full p-[10px] bg-n-700 rounded-xl col-span-1 min-h-[100px]"></div>
        <div className="w-full p-[10px] bg-n-700 rounded-xl col-span-1 min-h-[100px]"></div>
        <div className="w-full p-[10px] bg-n-700 rounded-xl col-span-1 min-h-[100px]"></div>
        <div className="w-full p-[10px] bg-n-700 rounded-xl col-span-1 min-h-[100px]"></div>
      </div>
    </div>
  );
}
