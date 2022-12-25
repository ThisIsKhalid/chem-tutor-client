import React, { useContext, useState } from "react";
import { FaAsterisk, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../Assets/chemistry.png";
import { AuthContext } from "../../Context/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Succesfully Sign Out!");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="px-4 py-4 md:px-24 lg:px-8 bg-slate-100">
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          aria-label="CHEM TUTOR"
          title="CHEM TUTOR"
          className="inline-flex items-center"
        >
          <img className="h-12 w-full" src={logo} alt="" />
          <span className="ml-2 text-2xl font-bold font-mono tracking-wide uppercase">
            <span className="bg-emerald-600 text-white border-2 border-emerald-600 py-1 px-2 rounded-l-md">
              CHEM
            </span>
            <span className="text-gray-800 border-2 border-gray-700 py-1 px-1 rounded-r-md">
              TUTOR
            </span>
          </span>
        </Link>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <Link
              to="/home"
              aria-label="Home"
              title="Home"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              aria-label="Courses"
              title="Courses"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              aria-label="Blogs"
              title="Blogs"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
            >
              Blogs
            </Link>
          </li>
          {user?.email ? (
            <>
              <li>
                <Link
                  to="/my_reveiws"
                  aria-label="My Reviews"
                  title="My Reviews"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                >
                  My Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/add_service"
                  aria-label="Add Service"
                  title="Add Service"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                >
                  Add Service
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  aria-label="Sign Out"
                  title="Sign Out"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/signup"
                  aria-label="Sign UP"
                  title="Sign UP"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                >
                  Sign UP
                </Link>
              </li>
              <li>
                <Link
                  to="/signin"
                  aria-label="Sign IN"
                  title="Sign IN"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                >
                  Sign IN
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <FaBars className="w-5 h-8 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      aria-label="CHEM TUTOR"
                      title="CHEM TUTOR"
                      className="inline-flex items-center"
                    >
                      <img className="h-12 w-full" src={logo} alt="" />
                      <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                        <span className="bg-emerald-600 text-white border-2 border-emerald-600 py-1 px-2 rounded-l-md">
                          CHEM
                        </span>
                        <span className="text-gray-800 border-2 border-gray-700 py-1 px-1 rounded-r-md">
                          TUTOR
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <FaAsterisk className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/home"
                        aria-label="Home"
                        title="Home"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services"
                        aria-label="Courses"
                        title="Courses"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                      >
                        Courses
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        aria-label="Blogs"
                        title="Blogs"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                      >
                        Blogs
                      </Link>
                    </li>
                    {user?.email ? (
                      <>
                        <li>
                          <Link
                            to="/my_reveiws"
                            aria-label="My Reviews"
                            title="My Reviews"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                          >
                            My Reviews
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/add_service"
                            aria-label="Add Service"
                            title="Add Service"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                          >
                            Add Service
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={handleLogOut}
                            aria-label="Sign out"
                            title="Sign Out"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                          >
                            Sign Out
                          </button>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link
                            to="/signup"
                            aria-label="Sign UP"
                            title="Sign UP"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                          >
                            Sign UP
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/signin"
                            aria-label="Sign IN"
                            title="Sign IN"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                          >
                            Sign IN
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
