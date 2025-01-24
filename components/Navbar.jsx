import Link from "next/link";
import React from "react";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Home, User, LogIn, LogOut } from "lucide-react";

export default async function Navbar() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <Link href="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">BP</span>
          </div>
          <span className="text-xl font-semibold text-gray-800">Blog Post</span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
          >
            <Home size={20} />
            <span>Home</span>
          </Link>

          <Link
            href="/profile"
            className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
          >
            <User size={20} />
            <span>Profile</span>
          </Link>

          {(await isAuthenticated()) ? (
            <LogoutLink className="flex items-center space-x-1 bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600">
              <LogOut size={20} />
              <span>Logout</span>
            </LogoutLink>
          ) : (
            <LoginLink
              postLoginRedirectURL="/profile"
              className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
            >
              <LogIn size={20} />
              <span>Login</span>
            </LoginLink>
          )}
        </div>
      </div>
    </nav>
  );
}
