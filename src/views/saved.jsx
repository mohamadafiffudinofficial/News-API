import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { NewsCard } from "../components";
import { dateParser } from "../libs/date";
import { news } from '../libs/helpers';
import { SET_DETAIL_NEWS } from '../store/slicers/detailNewsSlicer';



const Saved = () => {
    const savedNews = useSelector((state)=> state.savedNewsSlicer.savedNews);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick=(title)=>{
      dispatch(SET_DETAIL_NEWS(news(savedNews,title)));
      history.push(`detail/${title}`);
    }

      return (
        <div className="h-full">
            <h1 className="mx-2 text-2xl font-bold my-5">Berita Tersimpan</h1>
            <hr className="mx-2 " />
            <section className="mx-2 flex flex-row flex-wrap">
                <div className="newst-news w-full space-y-2 mt-5 p-3">
                    {
                      savedNews.length > 0 ?
                          savedNews.map((news, idx) => 
                              <NewsCard 
                                  key={idx} 
                                  published={dateParser(news.publishedAt)} 
                                  title={news.title} 
                                  category="Berita Tersimpan" 
                                  image={news.urlToImage}
                                  onClickCard={handleClick}
                                  isSaved={false}
                              />)
                        :
                      <div className="space-y-5 mt-5">
                          <p>Belum ada berita yang disimpan</p>
                      </div>
                    }
                </div>
            </section>
        </div>
      )
}

export default Saved
