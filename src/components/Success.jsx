import { Link } from "react-router-dom";
import orbitLogo from "/src/assets/orbitLogo.svg";
import { useAuth } from "../Context/AuthProvider";

function Success() {
  const { isLoggedin, userData } = useAuth();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[url('../src/assets/orbit_payment.png')] bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
        <div className="text-center flex flex-col bg-gray-900 m-8 p-8 rounded-lg  backdrop-filter backdrop-blur-md bg-opacity-90  border-white">
          <img
            className="h-16 w-auto mb-8"
            src={orbitLogo}
            alt="Orbit Gaming Logo"
          />
          <h3 className="text-xl font-bold text-white mb-4">
            Order Confirmation
          </h3>
          <p className="text-white text-md">
            Thank you for your purchase {userData.firstName}!
          </p>
          <p className="text-white text-md">
            We've received your order <strong>{userData._id}</strong> and are
            getting it ready. Confirmation details will be sent to{" "}
            <strong>{userData.email}</strong>.
          </p>
          <p className="text-white text-md mt-6">
            If you have any questions, feel free to reach out.
          </p>
          <Link to="/">
            <button className="bg-white hover:opacity-50 text-black font-bold py-2 px-4 rounded-md mt-8">
              EXPLORE
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Success;
