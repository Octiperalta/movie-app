/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useLocation } from "react-router-dom";

function CustomLink({
  to,
  activeClassName,
  inactiveClassName,
  className,
  children,
  ...rest
}) {
  const location = useLocation();

  const isActive = location.pathname === to;

  //   let currentClassName = activeClassName;

  return (
    <Link to={to} {...rest}>
      <a
        className={`block transition-all duration-300 ${
          isActive ? "border-r-4 border-red-600" : "border-gray-800 border-0"
        }  `}>
        {children({ isActive })}
      </a>
    </Link>
  );
}

export default CustomLink;
