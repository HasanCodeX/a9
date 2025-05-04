import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config"; // Adjust the import path if needed

const Navbar = () => {
  const [user] = useAuthState(auth);

  // Function to handle logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("Logout error", error);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 py-2">
      {/* Website name */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-semibold text-primary ml-1">
          Event Explorer
        </Link>
      </div>

      {/* Navbar links (Home, My Profile) */}
      <div className="hidden lg:flex space-x-4 mr-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "btn btn-sm btn-primary"
              : "btn btn-sm btn-ghost hover:text-primary"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "btn btn-sm btn-primary"
              : "btn btn-sm btn-ghost hover:text-primary"
          }
        >
          My Profile
        </NavLink>
      </div>

      {/* User authentication dropdown */}
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          {/* User avatar and dropdown trigger */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {/* Show user image or a default if not logged in */}
              <img
                alt="User Avatar"
                src={
                  user?.photoURL ||
                  "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                }
              />
            </div>
          </div>

          {/* User profile dropdown */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user ? (
              <>
                {/* Show user details */}
                <li>
                  <span className="justify-between">
                    <span className="font-semibold text-sm">
                      {user.displayName || "Anonymous"}
                    </span>
                    <span className="badge badge-primary">Online</span>
                  </span>
                </li>
                {/* Profile link */}
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                {/* Logout button */}
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-error text-white"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              // Login button when user is not logged in
              <li>
                <Link to="/login" className="btn btn-sm btn-primary text-white">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
