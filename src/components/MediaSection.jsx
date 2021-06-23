/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import ContentNav from "./ContentNav";
import AppMain from "./AppMain";

function MediaSection({ type }) {
  return (
    <Transition
      as={Fragment}
      appear={true}
      show={true}
      enter='transition-opacity duration-300'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-200'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'>
      <main className='flex h-screen w-full divide-x divide-gray-800'>
        <AppMain />
        <ContentNav type={type} />
      </main>
    </Transition>
  );
}

export default MediaSection;
