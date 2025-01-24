import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Navbar() {
  const { getUser, isAuthenticated } = getKindeServerSession();
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
              {(await isAuthenticated()) ? (
                <LogoutLink className="auth-btn">Logout</LogoutLink>
              ) : (
                <>
                  <LoginLink
                    postLoginRedirectURL="/profile"
                    className="auth-btn ml-2"
                  >
                    Login
                  </LoginLink>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
