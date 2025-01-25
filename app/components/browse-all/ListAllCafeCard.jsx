import React from 'react';
import SeeMoreButton from './SeeMoreButton';

const ListAllCafeCard = (props) => {
  return (
    <div className="rounded-md min-h-52 font-sans h-52" alt="Card_Container">
      <div className="flex p-4 border-2 rounded-lg gap-2 h-full items-stretch">
        {/* Image Section */}
        <div className="block border-2 rounded-lg flex-shrink-0 h-full w-1/3">
          Image Placeholder
        </div>

        {/* Info Section */}
        <div className="border-2 w-full h-full">
          <div className="flex flex-col p-2 h-full">

            {/* Title and Rating Section */}
            <div className="flex justify-between shrink-0 gap-2 flex-nowrap">
              <div className="block gap-1">
                <h3>{props.cafeName}</h3>
              </div>
              <div className="flex justify-center gap-2">
                <div className="flex flex-col justify-center items-center">
                  <div>Rating:</div>
                  <div># Reviews</div>
                </div>
                <div className="bg-grey rounded-lg rounded-bl-none p-2">
                  <div>{props.cafeAvgRating}</div>
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className=" flex h-full justify-between border-2">
              <div className='border-2'>
                Description
              </div>
              <div className='flex flex-col justify-between border-2 w-36'>
                <div className='border-2'>
                  placeholder
                </div>
                <div className='border-2'>
                  <SeeMoreButton/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListAllCafeCard;