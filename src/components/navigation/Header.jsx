import { faBurger, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ showSearchFields }) => {
  const location = useLocation();

  const showAdditionalFields = location.pathname === "/search-results";

  return (
    <div className="flex flex-wrap items-center justify-between px-10 py-2 text-white bg-yellow-500">
      <div className="text-2xl font-semibold">
        <FontAwesomeIcon icon={faBurger} className="mx-2" />
        <span>Gastronomist</span>
      </div>

      {showAdditionalFields && (
        <div className="justify-center ">
          <input
            type="search"
            placeholder="Pizza, tapas, mexican"
            className="px-2 py-1 mx-1 bg-white border rounded text-slate-950 focus:outline-none"
          />
          <input
            type="search"
            placeholder="City"
            className="px-2 py-1 mx-1 bg-white border rounded text-slate-950 focus:outline-none"
          />
          <button className="px-2 mx-1 py-[2.9px] bg-white border rounded">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-neutral-400 hover:text-slate-950"
            />
          </button>
        </div>
      )}
      <div className="flex justify-end">
        {location.pathname !== "/" && (
          <>
            <Link
              to="/"
              className="flex items-center px-4 duration-300 hover:text-blue-600"
            >
              <span>Main Page</span>
            </Link>
          </>
        )}
        <button className="px-4 underline duration-300 rounded-lg hover:text-blue-600 ">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Header;
