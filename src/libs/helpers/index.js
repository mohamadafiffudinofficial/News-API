export const news = (newsData,title)=>{
    return newsData.find((news)=> news.title === title);
}