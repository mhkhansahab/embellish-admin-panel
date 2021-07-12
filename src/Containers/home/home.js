import React, {useEffect} from "react";
import "./home.css";
import Header from "./../../Components/organisms/header/header";
import Carousel from "../../Components/organisms/carousel/carousel";
import {useSelector, useDispatch} from "react-redux";
import { getBanners } from "../../Store/action/actions";

function Home() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanners());
  }, [])
  
  const banners = useSelector((state)=>state.banners);

  const dayCreator = () => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let date = new Date();
    let day = days[date.getDay()];
    return "It's " + day;
  };

  const dateCreator = ()=>{
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let dateObj = new Date();
    let month = months[dateObj.getMonth()]
    let date = dateObj.getDate();
    let year = dateObj.getFullYear();
    return date + " - " + month +" - "+ year;
  }

  return (
    <div className="home">
      <Header upperText="Hey Awesome," lowerText="Welcome Back..."></Header>
      <Carousel banners={banners}/>

      <div className="date-container flex center-2">
        <div className="day-block">{dayCreator()}</div>
        <div className="date-block">{dateCreator()}</div>
        </div>
    </div>
  );
}

export default Home;
