import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useFetch } from "../custom-hooks";
import { getAllCities } from "../utils";

export function SearchForm() {
  const [locationInput, setLocationInput] = useState();
  const [allCities, setAllCities] = useState([]);
  const { data } = useFetch("https://countriesnow.space/api/v0.1/countries");
  useEffect(() => {
    data && setAllCities(getAllCities(data));
  }, [data]);
  return (
    <div className="mt-[20px] px-[40px] flex flex-col gap-y-[10px]">
      <div className="relative flex items-center gap-x-[10px] bg-n-700 rounded-xl p-[10px]">
        <MagnifyingGlassIcon className="w-[27px] h-full" />
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Search for a place..."
          className="flex-1 outline-none"
          onChange={(e) => setLocationInput(e.target.value)}
        />
        {/* <ul className="absolute left-0 right-0 top-[110%] bg-n-700 rounded-xl p-[10px]">
          <li className="hover:bg-n-600 rounded-xl p-[10px] mb-[10px] cursor-pointer">
            <button>Test</button>
          </li>
        </ul> */}
      </div>
      <button className="p-[10px] bg-blue-custom-500 hover:bg-blue-custom-700 text-n-0 rounded-xl cursor-pointer duration-200 active:scale-95">
        Search
      </button>
    </div>
  );
}
