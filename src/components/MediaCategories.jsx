import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import React from "react";
import ActorCard from "./ActorCard";

const actors = [
  {
    actorName: "Martin Freeman",
    moviesCount: "13",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi5Eo41Fe0TRCkPUuLpSywPzOUdOrrTl-f5A&usqp=CAU",
  },
  {
    actorName: "George Clooney",
    moviesCount: "20",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIrGZxc8tNh5HZc19KUuBFdizNHAbVJCr_Q&usqp=CAU",
  },
  {
    actorName: "Denzel Washington",
    moviesCount: "37",
    imageURL:
      "https://www.futuro.cl/wp-content/uploads/2020/12/c2b2b522fe46b53942a3d9ac0baae8a5.jpg",
  },
  {
    actorName: "Brad Pitt",
    moviesCount: "32",
    imageURL:
      "https://i.pinimg.com/originals/f0/1e/52/f01e526313f2f66f8499e39865049cdb.jpg",
  },
  {
    actorName: "Mark Whalberg",
    moviesCount: "22",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSqGHChO0D8s2yIXMoUrgYGrjbj0l0zVmUewkffSrdXZBP7ETeqGFlGRgSjr3jgnn0uA8&usqp=CAU",
  },
  {
    actorName: "Will Smith",
    moviesCount: "35",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn2jn04MVhe8YmWvyvHeBk5j_WRUzrl7v5Lr60mdMPEs0Pn-SL5rivXEgqNnBvKR_tqGQ&usqp=CAU",
  },
];

function MediaCategories() {
  return (
    <div className='mt-9'>
      {/* Categories Container */}
      <div>
        <div className='flex justify-between items-center'>
          <p className='text-gray-200 font-medium'>Best Actors</p>
          <div className='flex space-x-3'>
            <button className='flex items-center justify-between p-2 border rounded-full text-gray-200 '>
              <ChevronLeftIcon className='w-4 h-4 ' />
            </button>
            <button className='flex items-center justify-between p-2 border border-gray-200 rounded-full text-gray-200'>
              <ChevronRightIcon className='h-4 w-4' />
            </button>
          </div>
        </div>
        <div className='mt-4 grid grid-cols-4 2xl:grid-cols-6 gap-4'>
          {actors.map((actor, index) => (
            <ActorCard actor={actor} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MediaCategories;
