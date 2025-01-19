"use client";
import ProfileNav from "@/app/components/navigation/ProfileNav";
import Link from "next/link";
import { handleGoogleSignIn } from "@/app/lib/auth/googleSignInServerAction";
import { useEffect, useState } from "react";
import { auth } from "@/app/lib/auth/authConfig";

const NavBar = () => {
  const [user, setUser] = useState(null); // To store session data
  const [loading, setLoading] = useState(true); // To track loading state

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await auth(); // Fetch session
        setUser(session); // Set user data
      } catch (error) {
        console.error("Failed to return authentication", error);
      } finally {
        setLoading(false); // Stop loading regardless of success/failure
      }
    };

    fetchSession(); // Trigger the session fetch
  }, []); // No `user` dependency to avoid infinite re-renders

  return (
    <div className="fixed w-full top-0 start-0 bg-blueGray bg-opacity-95 shadow-lg rounded-b-lg z-10">
      <div className="flex justify-between mx-4 p-2">
        <Link href="/" className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          Beans
        </Link>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex items-center font-bold gap-4">
            <li>
              <Link
                href="./browse-all"
                className="text-white hover:bg-gray-100 hover:bg-opacity-15 p-2 rounded-sm"
                aria-current="page"
              >
                All Cafes
              </Link>
            </li>
            <li>
              <Link href="./about-us" className="block px-3 bg-grey text-white rounded-3xl">
                About Us
              </Link>
            </li>
            <li>
              {loading ? (
                // Show a placeholder or spinner during loading
                <span className="text-white">Loading...</span>
              ) : user ? (
                // Show profile navigation if user is logged in
                <ProfileNav userImage={user.user.image} />
              ) : (
                // Show login button if user is not logged in
                <button onClick={handleGoogleSignIn} className="text-white">
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
