import React from 'react'
import { useHistory, useLocation } from 'react-router';
import { SEARCH_NEWS } from "../service/api_path"
import { NewsCard, Skeleton } from "../components";
import { NewsHooks } from '../libs/hooks'
import { dateParser } from "../libs/date";
import { useDispatch, useSelector } from 'react-redux';
import { SET_DETAIL_NEWS } from '../store/slicers/detailNewsSlicer';
import { ADD_SAVED_NEWS, SET_SAVED_NEWS } from '../store/slicers/savedNewsSlicer';
import { news } from '../libs/helpers';

const Search = () => {
    const { search } = useLocation();
    const keywords = search.split('=')[1];
    const { newsData,loading } = NewsHooks({ method: 'get', url: SEARCH_NEWS(keywords)});
    const savedNews = useSelector((state)=> state.savedNewsSlicer.savedNews);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick=(title)=>{
        dispatch(SET_DETAIL_NEWS(news(newsData,title)));
        history.push(`detail/${title}`);
    }

    const handleClickCardButton = (title) => {
        if(isNewsSaved(title)){
            const filteredNews = savedNews.filter((news)=> news.title !== title);
            return dispatch(SET_SAVED_NEWS(filteredNews));
        }
        return dispatch(ADD_SAVED_NEWS(news(newsData,title)));
    }

    const isNewsSaved = (title) => {
        return savedNews.some((news)=> news.title === title);
    }

    return (
        <div>
            <h1 className="mx-2 text-2xl font-bold my-5">{`Pencarian Berita ${keywords}`}</h1>
            <hr className="mx-2 " />
            <section className="mx-2 flex flex-row flex-wrap">
                <div className="newst-news w-full space-y-2 mt-5 p-3">
                    {
                        newsData.length > 0 && !loading?
                            newsData.map((news, idx) => 
                                <NewsCard 
                                    key={idx} 
                                    published={dateParser(news.publishedAt)} 
                                    title={news.title} 
                                    category={keywords} 
                                    image={news.urlToImage} 
                                    onClickCardButton={handleClickCardButton}
                                    onClickCard={handleClick} 
                                    isNewsSaved={isNewsSaved}
                                />)
                            :
                            <div className="space-y-5 mt-5">
                                <Skeleton length={8} />
                            </div>
                    }
                </div>
            </section>
        </div>
    )
}

export default Search
