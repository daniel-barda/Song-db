import React from "react";

import { BsSearch } from "react-icons/bs";
import logo from "../images/logo.svg";
import { useGlobalContext } from "../context";

const TopBar = () => {
  const { query, handleSearch, setQuery } = useGlobalContext();

  return (
    <div className="TopBar pb-1">
      <img className="logo" src={logo} alt="logo" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <label className="relative block flex justify-center">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>

          <input
            className=" block bg-white w-full py-3 pl-9 pr-3 shadow-sm focus:outline-none sm:text-sm search ocus:outline-none focus:ring-2 focus:ring-white"
            type="text"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="submit-btn">
            <BsSearch />
          </button>
        </label>
      </form>
    </div>
  );
};

export default TopBar;
