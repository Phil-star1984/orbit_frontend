/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import orbitLogo from "/src/assets/orbitLogo.svg";
import { useCart } from "../Context/CartProvider";
import SearchBtn from "./buttons/SearchBtn.jsx";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useAuth } from "../Context/AuthProvider";

const navigation = [
  { name: "Store", href: "/store", current: true },
  { name: "Categories", href: "/categories/4", current: false },
  { name: "Deals", href: "/deals", current: false },
  { name: "Events", href: "/events", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ setResults }) {
  const { cart } = useCart();
  const { isLoggedIn, setIsLoggedIn, loading } = useAuth();
  const { userData } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://orbitback.onrender.com/auth/logout",
        {},
        { withCredentials: true }
      );
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
      setIsLoggedIn(false);
    }
  };

  if (loading) {
    return <></>;
  }

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-black h-[5.7rem]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="pt-7 relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <NavLink to="/">
                    <img
                      className="h-14 w-auto"
                      src={orbitLogo}
                      alt="Orbit Gaming Logo"
                    />
                  </NavLink>
                </div>
                <div className="hidden sm:ml-6 sm:flex items-center">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        /* className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )} */
                        className={({ isActive }) => {
                          return (
                            "flex items-center h-8 rounded-md px-4 py-1 text-sm font-medium " +
                            (!isActive
                              ? "text-white hover:bg-gray-900 hover:text-white"
                              : "text-white bg-gray-700")
                          );
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                    <SearchBtn setResults={setResults} />
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>

                  {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                </button>

                <Link
                  to="/cart"
                  className="relative rounded-full bg-lila p-1 text-gray-400 ml-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <ShoppingCartIcon className="h-6 w-6 " aria-hidden="true" />
                  {cart.length > 0 && (
                    <div className="absolute top-0 right-0 flex justify-center items-center bg-red-400 text-white rounded-full text-xs h-5 w-5 translate-x-2 -translate-y-2 ">
                      {cart.length}
                    </div>
                  )}
                </Link>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <span className="absolute -inset-1.5" />
                    <Menu.Button className="relative flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <div className="border-lila border-2 rounded-full flex">
                        {!isLoggedIn && (
                          <Link to="/login">
                            <UserIcon
                              className="h-8 text-gray-400 p-1 hover:text-white"
                              aria-hidden="true"
                            />
                          </Link>
                        )}
                        {isLoggedIn && (
                          <span className="m-2 text-gray-300 text-sm">
                            Welcome, {userData.firstName}!
                          </span>
                        )}
                      </div>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {isLoggedIn && (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink
                                to="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Profile
                              </NavLink>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink
                                to="/categories/4"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Categories
                              </NavLink>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <NavLink
                                to="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </NavLink>
                            )}
                          </Menu.Item>
                        </>
                      )}

                      {isLoggedIn ? (
                        <Menu.Item>
                          {({ active }) => (
                            <NavLink
                              to="#"
                              onClick={handleLogout}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Logout
                            </NavLink>
                          )}
                        </Menu.Item>
                      ) : (
                        <Menu.Item>{({ active }) => <></>}</Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
