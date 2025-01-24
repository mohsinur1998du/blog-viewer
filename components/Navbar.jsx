import Link from "next/link";
import React from "react";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h4 className="brand">A blog post</h4>
        <div className="nav-links">
          <ul className="links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              {user ? (
                <LogoutLink className="auth-btn">Logout</LogoutLink>
              ) : (
                <LoginLink className="auth-btn">Login</LoginLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
