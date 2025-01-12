import React from 'react'

const ListAllCafeCard = () => {
  return (
    <div className='box-border border-2 rounded-md' alt ='Card_Conatiner'>
        <div className='flex p-1 gap-2'>
            <div className='block border-2 rounded-lg'>
                Image Placeholder
            </div>

            {/*  */}
            <div className='border-2 w-full'> 
              <div className='flex flex-col p-2'>

                <div className='flex justify-start shrink-0 gap-2 flex-nowrap border-2'>
                    <div className='block gap-1 h-full'>
                      <h3>
                        Title
                      </h3>
                    </div>
                    <div>
                      rating
                    </div>
                </div>

                <div className='border-2'>
                    Description
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ListAllCafeCard