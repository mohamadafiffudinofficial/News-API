import React from "react";

const Home = React.lazy(()=> import('../views/home'));
const Covid = React.lazy(()=> import('../views/covid'));
const Indonesia = React.lazy(()=> import('../views/indonesia'));
const Programing = React.lazy(()=> import('../views/programing'));
const Saved = React.lazy(()=> import('../views/saved'));
const DetailNews = React.lazy(()=> import('../views/detailNews'));
const Search = React.lazy(()=> import('../views/search'));
const NotFound = React.lazy(()=> import('../views/404'));

const routes = [
    {
        path: '/',
        name : 'Home',
        component : Home,
        exact : true
    },
    {
        path: '/saved',
        name : 'Saved',
        component : Saved,
    },
    {
        path: '/programing',
        name : 'Programing',
        component : Programing,
    },
    {
        path: '/indonesia',
        name : 'Indonesia',
        component : Indonesia,
    },
    {
        path: '/covid',
        name : 'Covid',
        component : Covid,
    },
    {
        path: '/search',
        name : 'Search',
        component : Search,
    },
    {
        path: '/detail/:title',
        name : 'Detail',
        component : DetailNews,
    },
    {
        component : NotFound,
    },
];

export default routes