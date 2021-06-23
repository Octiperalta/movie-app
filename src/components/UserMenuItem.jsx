/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CustomLink from "./CustomLink";

function UserMenuItem({
  name,
  activeIcon: ActiveIcon,
  inactiveIcon: InactiveIcon,
  linkTo,
}) {
  return (
    <CustomLink to={linkTo}>
      {({ isActive }) => (
        <div className='flex items-center relative group hover:bg-gray-800 rounded-l-md pl-2 -ml-2 py-1'>
          {isActive ? (
            <ActiveIcon className='h-4 w-4 2xl:h-5 2xl:w-5 text-red-600 block' />
          ) : (
            <InactiveIcon className='h-4 w-4 2xl:h-5 2xl:w-5 text-gray-500 block' />
          )}

          <div
            className={` ml-2 text-xs 2xl:text-sm font-medium leading-relaxed transition-color duration-300 ${
              isActive
                ? "text-gray-200"
                : "text-gray-500 group-hover:text-gray-400"
            } `}>
            {name}
          </div>
        </div>
      )}
    </CustomLink>
  );
}

export default UserMenuItem;
