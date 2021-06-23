import {
  HomeIcon,
  SearchCircleIcon,
  LightBulbIcon,
  SparklesIcon,
  UserIcon,
  UserGroupIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import {
  HomeIcon as OutlineHomeIcon,
  SearchCircleIcon as OutlineSearchCircleIcon,
  LightBulbIcon as OutlineLightBulbIcon,
  SparklesIcon as OutlineSparklesIcon,
  CogIcon as OutlineCogIcon,
  UserGroupIcon as OutlineUserGroupIcon,
  UserIcon as OutlineUserIcon,
} from "@heroicons/react/outline";
import React from "react";
import UserMenuItem from "./UserMenuItem";

function UserMenu() {
  return (
    <div className='mt-9 flex flex-col space-y-8'>
      <div>
        <h3 className='uppercase text-gray-400 text-xs 2xl:text-sm font-semibold tracking-wider'>
          Menu
        </h3>
        <div className='mt-4'>
          <div className='flex flex-col gap-4'>
            {menuItems.map(item => (
              <UserMenuItem
                key={item.item}
                name={item.item}
                activeIcon={item.activeIcon}
                inactiveIcon={item.inactiveIcon}
                linkTo={item.linkTo}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h3 className='uppercase text-gray-400 text-xs  font-semibold tracking-wider'>
          Social
        </h3>
        <div className='mt-4'>
          <div className='flex flex-col gap-4'>
            {socialItems.map(item => (
              <UserMenuItem
                key={item.item}
                name={item.item}
                activeIcon={item.activeIcon}
                inactiveIcon={item.inactiveIcon}
                linkTo={item.linkTo}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h3 className='uppercase text-gray-400 text-xs  font-semibold tracking-wider'>
          Menu
        </h3>
        <div className='mt-4'>
          <div className='flex flex-col gap-4'>
            {generalItems.map(item => (
              <UserMenuItem
                key={item.item}
                name={item.item}
                activeIcon={item.activeIcon}
                inactiveIcon={item.inactiveIcon}
                linkTo={item.linkTo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;

const menuItems = [
  {
    item: "Home",
    activeIcon: HomeIcon,
    inactiveIcon: OutlineHomeIcon,
    linkTo: "/home/movies",
  },
  {
    item: "Search",
    activeIcon: SearchCircleIcon,
    inactiveIcon: OutlineSearchCircleIcon,
    linkTo: "/search",
  },
  {
    item: "Discovery",
    activeIcon: LightBulbIcon,
    inactiveIcon: OutlineLightBulbIcon,
    linkTo: "/discovery",
  },
  {
    item: "Coming Soon",
    activeIcon: SparklesIcon,
    inactiveIcon: OutlineSparklesIcon,
    linkTo: "/coming-soon",
  },
];

const socialItems = [
  {
    item: "Friends",
    activeIcon: UserIcon,
    inactiveIcon: OutlineUserIcon,
    linkTo: "/friends",
  },
  {
    item: "Parties",
    activeIcon: UserGroupIcon,
    inactiveIcon: OutlineUserGroupIcon,
    linkTo: "/parties",
  },
];

const generalItems = [
  {
    item: "Settings",
    activeIcon: CogIcon,
    inactiveIcon: OutlineCogIcon,
    linkTo: "/settings",
  },
  {
    item: "Log out",
    activeIcon: LogoutIcon,
    inactiveIcon: LogoutIcon,
    linkTo: "/logout",
  },
];
