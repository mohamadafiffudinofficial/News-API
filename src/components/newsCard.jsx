import React from 'react'

const NewsCard = ({
        image,
        title,
        category,
        published,
        onClickCardButton,
        onClickCard,
        isSaved = true,
        isNewsSaved
    }) => {

        const handleClick = (e) =>{
            e.stopPropagation(); 
            return onClickCardButton(title)
        }

    return (
        <div 
            className="w-full p-2 flex flex-col md:flex-row md:space-x-4 bg-gray-600 bg-opacity-20 cursor-pointer hover:bg-opacity-50"
            onClick={()=>onClickCard(title)}
        >
            <img src={image} alt="news" className="h-32 w-full md:w-48 object-cover" />
            <div className="flex flex-col justify-between w-full">
                <p className="text-md font-bold tracking-wider mt-1">{title}</p>
                <div className="flex flex-row justify-between">
                    <div className="space-x-3">
                        <span className="text-red-600 text-xs">{category}</span>
                        <span className="text-xs">{published}</span>
                    </div>
                    {
                        isSaved 
                        &&
                        <button 
                            type="button" 
                            className="w-20 h-7 rounded-sm bg-red-600 hover:bg-red-500" 
                            onClick={(e)=>handleClick(e)}
                        >
                            {isNewsSaved(title) ? 'Tersimpan' : 'Simpan'}
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default NewsCard
