import React from 'react';
import "./bannerTilesHolder.css";
import BannerTile from "./../../atoms/bannerTile/bannerTile";
import {useSelector, connect, useDispatch} from "react-redux";
import { deleteBanner } from "./../../../Store/action/actions"


function BannerTilesHolder(props) {

    const bannerRemover = (id)=>{
        props.deleteBanner(id);
    }

    const bannersData = useSelector(state => state.banners);

    return (
        <div className="banner-tiles">
            {
                bannersData ? bannersData.map((item)=>{
                    return(
                    <BannerTile 
                    image={item.link} 
                    link={item.link} 
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


const mapDispatchToProps = {
    deleteBanner
}

export default connect(null,mapDispatchToProps)(BannerTilesHolder);