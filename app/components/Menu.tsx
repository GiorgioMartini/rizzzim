import React from "react";

export const Menu = () => {
  return (
    <div>
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Profile</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
    </div>
  );
};
