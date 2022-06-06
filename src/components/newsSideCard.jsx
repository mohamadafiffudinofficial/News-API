import React from 'react'

const NewsSideCard = ({image,title,category,onClickCard}) => {
    return (
        <div 
            className="w-full p-2 flex flex-row lg:flex-col space-x-2 lg:space-x-0 justify-between  bg-gray-600 bg-opacity-20 cursor-pointer hover:bg-opacity-50"
            onClick={()=>onClickCard(title)}
        >
            <img src={image} alt="news" className="h-20 w-28 lg:w-full md:object-cover lg:object-contain" />
            <div className="flex flex-col justify-between flex-grow">
                <p className="tracking-wider text-sm mt-1">{title}</p>
                <div className="space-y-3">
                    <span className="text-red-600 text-xs">{category}</span>
                </div>
            </div>
        </div>
    )
}

export default NewsSideCard
