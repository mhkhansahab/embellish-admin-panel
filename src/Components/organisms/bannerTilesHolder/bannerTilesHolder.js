import React, {useEffect} from 'react';
import "./bannerTilesHolder.css";
import BannerTile from "./../../atoms/bannerTile/bannerTile";
import {useSelector, useDispatch} from "react-redux";
import { deleteBanner } from "./../../../Store/action/actions"


function BannerTilesHolder(props) {

    const dispatch = useDispatch();
    
    const bannerRemover = (id)=>{
        dispatch(deleteBanner({banner_id: id}));
    }

    const bannersData = useSelector(state => state.banners);

    return (
        <div className="banner-tiles">
            {
                bannersData ? bannersData.map((item)=>{
                    return(
                    <BannerTile 
                    image={item.img} 
                    link={item.img} 
                    key = {item._id}
                    id = {item._id} 
                    deleteFunc={()=>bannerRemover(item._id)}
                    modalController = {props.modalController}
                    ></BannerTile>);
                }) : null
            }
        </div>
    );
}


export default BannerTilesHolder;