import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { use } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("User trying to log Out");
    logOut()
      .then(() => {
        toast.success("Sign-out successful.", {
          position: "top-center",
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
        });
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services/:id">Services</NavLink>
      </li>
      <li>
        <NavLink to="/my-profile">My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar py-4 md:px-12 sticky top-0 h-fit bg-white z-10 shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#706F6F] text-lg"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-lg ">
          <img className="max-w-30" src={logo} alt="Logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#706F6F] text-lg">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <div className="avatar">
          <div className="w-14 rounded-full">
            {user && user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || "User"}
                title={user.displayName || "User"}
                className="cursor-pointer"
              />
            ) : (
              ""
            )}
          </div>
        </div>

        {user ? (
          <button
            onClick={handleLogOut}
            className="bg-[#403F3F] px-8 md:px-12 py-3 text-white font-semibold text-xl rounded-4xl cursor-pointer"
          >
            LogOut
          </button>
        ) : (
          <Link
            className="bg-[#ff3600] px-8 md:px-12 py-3 text-white font-semibold rounded-4xl text-xl cursor-pointer"
            to="/login"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
