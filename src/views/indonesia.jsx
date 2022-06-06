import { INDONESIA_NEWS } from "../service/api_path"
import { NewsCard, NewsSideCard, Skeleton } from "../components";
import { NewsHooks } from '../libs/hooks'
import { dateParser } from "../libs/date";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { SET_DETAIL_NEWS } from "../store/slicers/detailNewsSlicer";
import { ADD_SAVED_NEWS, SET_SAVED_NEWS } from "../store/slicers/savedNewsSlicer";
import { news } from "../libs/helpers";

const Indonesia = () => {
    const { newsData, headlineNews,loading } = NewsHooks({ method: 'get', url: INDONESIA_NEWS });
    const savedNews = useSelector((state)=> state.savedNewsSlicer.savedNews);
    const history = useHistory();
    const dispatch = useDispatch();

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
            <h1 className="mx-2 text-2xl font-bold my-5">Berita Indonesia News</h1>
            <hr className="mx-2 " />
            <section className="mx-2 flex flex-row flex-wrap">
                <div className="newst-news w-full lg:w-2/3 space-y-2 mt-5 p-3">
                    {
                        newsData.length > 0 && !loading ?
                            newsData.map((news, idx) => 
                                <NewsCard 
                                    key={idx} 
                                    published={dateParser(news.publishedAt)} 
                                    title={news.title} 
                                    category="Berita Terkini" 
                                    image={news.urlToImage}
                                    onClickCard={handleClick} 
                                    onClickCardButton={handleClickCardButton}
                                    isNewsSaved={isNewsSaved}
                                />)
                            :
                            <div className="space-y-5 mt-5">
                                <Skeleton length={8} />
                            </div>
                    }
                </div>
                <div className="popular-news w-full lg:w-1/3 p-3">
                    <h1 className="text-2xl font-bold my-3">Trending</h1>
                    <div className="space-y-2">
                        {
                            headlineNews.length > 0 && !loading ?
                                headlineNews.map((news, idx) => 
                                    <NewsSideCard 
                                        key={idx} 
                                        title={news.title} 
                                        category="Trending" 
                                        image={news.urlToImage}
                                        onClickCard={handleClick}  
                                    />)
                                :
                                <div className="space-y-5 mt-5">
                                    <Skeleton />
                                </div>
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Indonesia
