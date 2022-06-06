import React from 'react'

const Skeleton = ({length=5}) => {
  const skeletonLength = [...Array(length).keys()];

    return (
        <>
          {
            skeletonLength.map((i)=>
              <div className="space-y-10" key={i}>
                <div className="animate-pulse flex space-x-4">
                  <div className=" bg-blue-400 h-20 w-32"></div>
                  <div className="flex-1 space-y-4 py-1 flex flex-col justify-between">
                    <div className="h-4 bg-blue-400  w-2/4"></div>
                    <div className="space-x-2 flex flex-row">
                      <div className="h-4 bg-blue-400 w-1/12"></div>
                      <div className="h-4 bg-blue-400 w-2/12"></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </>
    )
}

export default Skeleton
