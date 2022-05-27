import React, { useEffect, useState } from "react";
import getChallenges from "../services/getChallenges";
import getItems from "../services/getItems";
import getMaps from "../services/getMaps";
import getNews from "../services/getNews";
import getUpcomingItems from "../services/getUpcomingItems";
import FortniteContext from "./FortniteContext";

export default function FortniteProvider(props) {
    const { children } = props;

    const [users, setUsers] = useState({ userOne: '', userTwo: ''})
    const [usersDataOne, setUsersDataOne] = useState();
    const [usersDataTwo, setUsersDataTwo] = useState();
    const [loading, setLoading] = useState(false);
    const [maps, setMaps] = useState()
    const [upcoming, setUpcoming] = useState();
    const [news, setNews] = useState();

    useEffect(() => {
        const fetchData = async () => {
          const maps = await getMaps();
          setMaps(maps);
          console.log(maps)
         } 
         fetchData();
       }, [])

       useEffect(() => {
        const fetchChallenges = async () => {
          const challenges = await getChallenges();
          console.log("Missões :", challenges)
         } 
         fetchChallenges();
       }, [])

       useEffect(() => {
        const fetchItems = async () => {
          const items = await getItems();
          console.log("Items :", items)
         } 
         fetchItems();
       }, [])

       useEffect(() => {
        const fetchUpcomingItems = async () => {
          const upcomingItems = await getUpcomingItems();
          console.log("Items por vir :", upcomingItems)
          setUpcoming(upcomingItems);
         } 
         fetchUpcomingItems();
       }, [])

       useEffect(() => {
        const fetchNews = async () => {
          const news = await getNews();
          console.log("Notícias :", news)
          setNews(news.news)
         } 
         fetchNews();
       }, [])
       


    const context = {
        users,
        setUsers,
        usersDataOne,
        setUsersDataOne,
        usersDataTwo,
        setUsersDataTwo,
        loading,
        setLoading,
        maps,
        setMaps,
        upcoming,
        news,
    }
    return  (
        <FortniteContext.Provider value={ context } >
            { children }
        </FortniteContext.Provider>
    )
}