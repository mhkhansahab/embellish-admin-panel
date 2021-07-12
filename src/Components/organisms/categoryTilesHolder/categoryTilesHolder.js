import React, {useEffect} from 'react';
import { getBanners } from '../../../Store/action/actions';
import CategoryTile from '../../atoms/categoryTile/categoryTile';
import {useSelector, useDispatch} from "react-redux";

function CategoryTilesHolder(props) {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBanners());
    }, [])
    
    const bannerRemover = (id)=>{
        props.deleteBanner({banner_id: id});
    }

    const bannersData = useSelector(state => state.banners);

    return (
        <div className="banner-tiles">
            {
                bannersData ? bannersData.map((item)=>{
                    return(
                    <CategoryTile 
                    image={item.img} 
                    link={item.img} 
                    key = {item._id}
                    id = {item._id} 
                    deleteFunc={()=>bannerRemover(item._id)}
                    modalController = {props.modalController}
                    ></CategoryTile>);
                }) : null
            }
        </div>
    );
}

export default CategoryTilesHolder;
