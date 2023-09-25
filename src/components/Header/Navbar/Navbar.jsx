import { NavLink } from "react-router-dom";
const Navbar = () => {
  const links = 
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
          }
        >
          Donation
        </NavLink>
      </li>
      <li>
      <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
          }
        >
          Statistics
        </NavLink>
      </li>
    </>
  ;


  return (
    <div>
      <div className="container mx-auto px-10 navbar bg-base-100 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <div
            //   tabIndex={0}
              className="men list-none menu-sm dropdown-content mt-3 z-[1] p-2 w-52"
            >
              {links}
            </div>
          </div>
          <img src="https://i.ibb.co/hcVLtSf/Logo.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="men list-none gap-5 menu-horizontal px-1">{links}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
