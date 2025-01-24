import Link from "next/link";
import React from "react";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Home, User, LogIn, LogOut } from "lucide-react";

export default async function Navbar() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">BP</span>
          </div>
          <h4 className="text-xl font-semibold text-gray-800 hidden md:block">
            Blog Post
          </h4>
        </Link>

        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4 items-center">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
                <Home size={20} />
                <span className="hidden md:inline">Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
                <User size={20} />
                <span className="hidden md:inline">Profile</span>
              </Link>
            </li>
            <li>
              {(await isAuthenticated()) ? (
                <LogoutLink className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition-colors flex items-center space-x-1">
                  <LogOut size={20} />
                  <span className="hidden md:inline">Logout</span>
                </LogoutLink>
              ) : (
                <LoginLink
                  postLoginRedirectURL="/profile"
                  className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center space-x-1"
                >
                  <LogIn size={20} />
                  <span className="hidden md:inline">Login</span>
                </LoginLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
