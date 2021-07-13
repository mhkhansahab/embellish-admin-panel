import React, {useEffect} from 'react';
import { deleteCategory, getAllCategories} from '../../../Store/action/actions';
import CategoryTile from '../../atoms/categoryTile/categoryTile';
import {useSelector, useDispatch} from "react-redux";

function CategoryTilesHolder(props) {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllCategories());
    }, [])
    
    const categoryRemover = (id)=>{
        dispatch(deleteCategory({category_id: id}));
    }

    const categoriesData = useSelector(state => state.categories);

    return (
        <div className="banner-tiles">
            {
                categoriesData ? categoriesData.map((item)=>{
                    return(
                    <CategoryTile 
                    image={item.img} 
                    name={item.name} 
                    key = {item._id}
                    id = {item._id} 
                    deleteFunc={()=>categoryRemover(item._id)}
                    modalController = {props.modalController}
                    ></CategoryTile>);
                }) : null
            }
        </div>
    );
}

export default CategoryTilesHolder;
