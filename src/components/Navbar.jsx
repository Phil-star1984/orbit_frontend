/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { useCart } from "../Context/CartProvider";
import SearchBtn from "./buttons/SearchBtn.jsx";
import { Button } from "@material-tailwind/react";
import { useAuth } from "../Context/AuthProvider";
import axios from "axios";

const navigation = [
  { name: "Store", href: "/store", current: true },
  { name: "Wishlist", href: "/wishlist", current: false },
  { name: "Deals", href: "/deals", current: false },
  { name: "Events", href: "/events", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ setResults }) {
  const { cart } = useCart();
  const { isLoggedIn, setIsLoggedIn, loading } = useAuth();
  const { checkUser, userData } = useAuth();

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
                      className="h-11 w-auto"
                      src="../src/assets/Orbit_Logo_Zeichenfläche 1 Kopie 2.svg"
                      alt="Orbit Gaming Logo"
                    />
                  </NavLink>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.nNavLinkme}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
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
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <button
                  type="button"
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
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <div className="border-lila border-2 rounded-full flex">
                        <UserIcon
                          className="h-8 text-gray-400 p-1"
                          aria-hidden="true"
                        />
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
                      {isLoggedIn && ( // <-- Wrap the two options with this condition
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
                                Your Profile
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
                        <Menu.Item>
                          {({ active }) => (
                            <NavLink
                              to="/login"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Login
                            </NavLink>
                          )}
                        </Menu.Item>
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
