/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import UserMenu from "./UserMenu";
import { Link } from "react-router-dom";

function UserNav() {
  return (
    <div className='flex-shrink-0 w-60 pt-9 border-r border-gray-800 '>
      <div className='pl-10'>
        {/* Brand logo */}
        <div>
          <Link to='/'>
            <a className='block'>
              <div className='flex items-center '>
                <div className='text-red-600 flex items-center transform -rotate-6 pb-1'>
                  <FilmIcon className='h-5 w-5 text-red-700 fill-current' />
                </div>
                <div className='ml-2'>
                  <h1 className='text-gray-200 text-xl font-medium tracking-wider relative font-roboto '>
                    Exxmon
                    <span className='text-red-700 text-[6px] pt-1'>
                      &#9632;
                    </span>
                  </h1>
                </div>
              </div>
            </a>
          </Link>
        </div>

        {/* Menu */}
        <UserMenu />
      </div>
    </div>
  );
}

export default UserNav;

const FilmIcon = ({ className }) => {
  return (
    <svg viewBox='0 0 511 511' className={className}>
      <path d='M20.949 298.483v160c0 29.419 23.936 53.333 53.333 53.333h384c29.419 0 53.333-23.915 53.333-53.333v-160H20.949zM252.757 48.776l-79.83 18.944 66.88 98.411 86.464-19.669zM150.741 72.99L64.703 93.384l66.176 97.494 86.592-19.691zM511.274 93.086l-18.155-68.864C488.938 7.475 471.786-3.063 454.868.798l-71.68 17.024 68.011 100.267 52.117-11.861c2.837-.64 5.269-2.411 6.763-4.885s1.92-5.441 1.195-8.257zM360.981 23.091L275.413 43.4l73.642 97.899 79.808-18.155zM128.447 191.838L94.314 277.15h83.691l34.133-85.312zM235.114 191.838l-34.133 85.312h83.69l34.134-85.312zM500.949 191.838h-52.501l-34.133 85.333h97.301v-74.667a10.644 10.644 0 00-10.667-10.666zM341.781 191.838l-34.134 85.312h83.67l34.154-85.312zM42.517 98.675l-17.387 4.117c-8.469 1.92-15.637 7.061-20.181 14.443-4.544 7.403-5.888 16.107-3.776 24.533l19.776 78.165v57.216h50.389l32.021-80.021 5.205-1.173-66.047-97.28z' />
    </svg>
  );
};
