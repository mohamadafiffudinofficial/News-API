import { TOP_HEADLINES } from "../service/api_path"
import Slider from "react-slick";
import {NewsHooks} from '../libs/hooks'
import { dateParser } from "../libs/date";
import { useHistory } from "react-router-dom";
import { reactSlickSettings } from "../libs/reactSlick";
import { useDispatch, useSelector } from 'react-redux'
import { SET_DETAIL_NEWS } from "../store/slicers/detailNewsSlicer";
import { ADD_SAVED_NEWS, SET_SAVED_NEWS} from "../store/slicers/savedNewsSlicer";
import { news } from "../libs/helpers";
import { NewsCard, NewsSideCard, Skeleton } from "../components";

const Home = () => {
    const {newsData,headlineNews,loading} = NewsHooks({method:'get',url:TOP_HEADLINES});
    const history = useHistory();
    const dispatch = useDispatch();
    const savedNews = useSelector((state)=> state.savedNewsSlicer.savedNews);

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
            <Slider {...reactSlickSettings}>
                {
                    headlineNews&&headlineNews.map((news,idx)=>{
                        return(
                            <div className="relative h-full" key={idx}>
                                <img src={news.urlToImage} alt="headline-news" className="w-full h-60 md:h-80 lg:h-96" />
                                <div className="bg-gray-900 bg-opacity-60 w-full h-26 absolute bottom-0 z-10 p-4 space-y-3">
                                    <p className="text-sm lg:text-xl font-semibold">{news.title}</p>
                                    <p className="text-xs lg:text-small">{dateParser(news.publishedAt)}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
                <h1 className="mx-2 text-2xl font-bold my-5">Berita Terkini</h1>
                    <hr className="mx-2 "/>
            <section className="mx-2 flex flex-row flex-wrap">
                <div className="newst-news w-full lg:w-2/3 space-y-2 mt-5 p-3">
                    {
                        newsData.length > 0 && !loading ?
                        newsData.map((news,idx)=> 
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
                            headlineNews.length > 0 && !loading?
                            headlineNews.map((news,idx)=> 
                                <NewsSideCard 
                                    key={idx}  
                                    title={news.title} 
                                    category="Trending" 
                                    image={news.urlToImage} 
                                    onClickCard={handleClick} 
                            />)
                            :
                            <div className="space-y-5 mt-5">
                                <Skeleton/>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
