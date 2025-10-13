import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import {
  Menu,
  MenuButton,
  MenuHeading,
  MenuItem,
  MenuItems,
  MenuSection,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { weatherUnitSystem } from "../constants";

// OpenWeather API example
// units=imperial -> temperature in °F, wind in mph
// units=metric   -> temperature in °C, wind in m/s

export function NavBar() {
  return (
    <nav className="flex justify-between items-center p-4">
      {/* Logo */}
      <Link to="/">
        <img srcSet={logo} alt="Logo Image" width={170} />
      </Link>
      {/* Unit Option */}
      <Menu>
        {/* Unit Option - Menu Button */}
        <MenuButton className="cursor-pointer flex justify-between items-center gap-2 rounded-md bg-n-0/15 px-3 py-1.5 text-sm/6 font-semibold text-n-0 shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-n-0/30">
          <Cog6ToothIcon className="size-4" />
          Units
          <ChevronDownIcon className="size-4 fill-white/60" />
        </MenuButton>
        {/* Unit Option - Menu Items */}
        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-n-0/15 p-1 text-sm/6 text-n-0 transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        >
          {weatherUnitSystem.map((e, i) => {
            if (e.menuHeading) {
              return (
                <div key={e.menuHeading ? e.menuHeading : e.menuHeading + i}>
                  <MenuSection>
                    <MenuHeading className="text-xs opacity-50 px-3 py-1.5">
                      {e.menuHeading}
                    </MenuHeading>
                    {e.menuItems.map((item) => (
                      <div key={item.value}>
                        <MenuItem>
                          <button
                            onClick={(e) => console.log(item.value)}
                            className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                          >
                            {item.label}
                          </button>
                        </MenuItem>
                      </div>
                    ))}
                  </MenuSection>
                  {i !== weatherUnitSystem.length - 1 && (
                    <div className="my-1 h-px bg-white/5" />
                  )}
                </div>
              );
            } else {
              return e.menuItems.map((item) => (
                <div key={item.value}>
                  <MenuItem>
                    <button
                      onClick={(e) => console.log(item.value)}
                      className="cursor-pointer group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10"
                    >
                      {item.label}
                    </button>
                  </MenuItem>
                  {i !== weatherUnitSystem.length - 1 && (
                    <div className="my-1 h-px bg-white/5" />
                  )}
                </div>
              ));
            }
          })}
        </MenuItems>
      </Menu>
    </nav>
  );
}
