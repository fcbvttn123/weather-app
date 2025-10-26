export function TodayForecast() {
  return (
    <div className="px-[40px] mt-[20px]">
      <div className="grid gap-4 grid-cols-2">
        <div className="w-full p-[10px] bg-n-700 rounded-xl col-span-2 min-h-[200px]"></div>
        <div className="w-full p-[10px] bg-n-700 rounded-xl col-span-1 min-h-[100px]"></div>
        <div className="w-full p-[10px] bg-n-700 rounded-xl col-span-1 min-h-[100px]"></div>
        <div className="w-full p-[10px] bg-n-700 rounded-xl col-span-1 min-h-[100px]"></div>
        <div className="w-full p-[10px] bg-n-700 rounded-xl col-span-1 min-h-[100px]"></div>
      </div>
    </div>
  );
}
