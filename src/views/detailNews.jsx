import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { dateParser } from '../libs/date';


const DetailNews = () => {
    const detailNews = useSelector((state)=> state.detailNewsSlicer.detailNews || []);
    const history = useHistory();

    useEffect(()=>{
        if(Object.keys(detailNews).length === 0) history.replace({pathname:'/404'})
    },[])

    return (
        <div className="space-y-5">
            <img src={detailNews.urlToImage} alt="detail" className="w-full h-96 top-10 right-0" />
            <div className="news-detail space-y-10 w-2/3 m-auto">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">{detailNews.title}</h1>
                    <div>
                        <span className="text-red-500">{detailNews.author}</span> | 
                        <span className="text-xs">{detailNews.publishedAt ? dateParser(detailNews.publishedAt) : '-'}</span>
                    </div>
                    <hr />
                </div>
                <article className="text-lg">
                    {detailNews.content}
                    <br /> <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus alias est ex ullam, debitis rem quas dolores non praesentium hic? Architecto odit ipsa, repellendus laudantium enim atque facere id quas?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae assumenda iusto velit molestias quia. Porro laudantium consectetur odit est totam quasi fugiat libero debitis quis, soluta saepe illum ea at?
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur amet vitae quam doloribus consequatur porro maxime sapiente magnam, a, hic inventore? Dicta, commodi nobis ab earum magnam laboriosam doloremque.
                    <br /><br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam at, omnis esse laboriosam quae vel assumenda minus cupiditate similique! Sed recusandae ipsam consequuntur nobis saepe? Ipsa iste consequuntur porro debitis!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi temporibus provident incidunt quasi dignissimos veniam in tempora minus saepe labore. Placeat tempore sed commodi possimus quia! Dolores delectus sed voluptatum!
                </article>
            </div>
        </div>
    )
}

export default DetailNews
