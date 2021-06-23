import React from "react";
import Preloader from "../img/833.gif";

function Loader() {
  return (
    <div className='flex justify-center h-10 mt-9'>
      <img src={Preloader} alt='' />
    </div>
  );
}

export default Loader;
