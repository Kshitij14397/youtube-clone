import React from "react";

const Head = () => {
  return (
    <div className="h-14 px-4 grid grid-flow-col items-center justify-between">
      <div className="flex">
        <img
          className="w-10 h-10 p-2 box-border"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          alt="menu"
        />
        <img
          className="w-[116px] h-[3.6rem] pl-4 pr-[14px] py-[18px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
          alt="youtube-logo"
        />
      </div>
      <div className="flex flex-row flex-grow-0 flex-shrink basis-[600px]">
      <input
          className="px-1 flex-grow flex-shrink basis-[0.000000001px] h-10 relative rounded-[40px] border-[2px] border-solid-black border-gray-200 shadow-sm"
          type="text"
          placeholder="Search"
        />
        <button>Search</button>
      </div>
      <div className="flex min-w-[225px] items-center justify-end">
        <img
          className="h-9 w-9 mx-2 rounded-[50%] overflow-hidden"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
