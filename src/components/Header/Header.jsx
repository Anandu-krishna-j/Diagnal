import { useState, useEffect, useRef } from "react";
import { BASE_IMG } from "../../utils/constants";

export default function Header({ search, setSearch, title }) {
    
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  return (
    <div className="flex items-center justify-between px-[16px] sm:px-[20px] py-[10px] sm:py-[12px] min-h-[56px] sm:min-h-[60px] h-[130px]">
      <div className="flex items-center gap-[12px] sm:gap-[20px]">
        <img
          src={`${BASE_IMG}Back.png`}
          height="18px"
          width="18px"
          alt="Back"
          className="cursor-pointer hover:opacity-80 transition-opacity sm:h-[20px] sm:w-[20px]"
          onClick={() => setShowSearch(false)}
        />
        <h1 className={`text-white text-[18px] sm:text-[20px] font-semibold tracking-[0.5px] transition-all duration-200 ${ showSearch ? "hidden sm:block" : "block" }`} > {title} </h1>
      </div>

      <div className="flex items-center justify-end min-w-[36px] sm:min-w-[40px]">
        {!showSearch ? (
          <img
            src={`${BASE_IMG}search.png`}
            alt="Search"
            height="18px"
            width="18px"
            className="cursor-pointer hover:opacity-80 transition-opacity filter brightness-0 invert sm:h-[20px] sm:w-[20px]"
            onClick={() => setShowSearch(true)}
          />
        ) : (
          <div className="flex items-center gap-[8px] sm:gap-[12px] animate-slideIn">
            <div className="relative">
              <div className="absolute left-[10px] sm:left-[12px] top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search titles..."
                className="
                  pl-[32px] sm:pl-[36px] pr-[12px] sm:pr-[16px] py-[6px] sm:py-[8px]
                  w-[180px] xs:w-[200px] sm:w-[220px] md:w-[280px] lg:w-[340px]
                  bg-[#2a2a2a]
                  text-white text-[13px] sm:text-[14px]
                  placeholder:text-gray-500 placeholder:text-[12px] sm:placeholder:text-[14px]
                  rounded-[4px]
                  text-[#ffffff]
                  border border-[#333]
                  shadow-[0_4px_12px_rgba(0,0,0,0.5)]
                  focus:outline-none
                  transition-all duration-300
                "
              />
            </div>

            <button
              onClick={() => {
                setShowSearch(false);
                setSearch("");
              }}
              className="
                px-[10px] sm:px-[14px] py-[5px] sm:py-[6px]
                text-[12px] sm:text-[14px] font-medium
                text-[#ffffff]
                bg-[#2a2a2a]
                rounded-[4px]
                border border-[#333]
                hover:bg-[#e50914]
                hover:border-[#e50914]
                active:scale-95
                transition-all duration-200
                whitespace-nowrap
                cursor-pointer
              "
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}