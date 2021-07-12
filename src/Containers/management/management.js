import React from 'react';
import Header from "./../../Components/organisms/header/header";
import ListManager from "./../../Components/molecules/listManager/listManager";
import Modal from "./../../Components/organisms/modal/modal";
import {useState} from "react";
import {withRouter} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setProductModal, setBannerModal, modalCleaner, editStatusChanger, getProducts, setCategoryModal} from "./../../Store/action/actions";
import {useEffect} from "react";

function Management(props) {
    const dispatch = useDispatch();
    const location = props.location.pathname;
    const [showModal, setshowModal] = useState(false);

    useEffect(() => {
        dispatch(getProducts());
    }, []);


    const modalController = (type, id, modal)=>{
        if(type === "add"){
            setshowModal(!showModal);
            dispatch(modalCleaner());
        }else{
            if (modal === "product"){
                dispatch(setProductModal(id));
                dispatch(editStatusChanger(true));
                setshowModal(!showModal);
            }else if(modal === "category"){
                dispatch(setCategoryModal(id));
                dispatch(editStatusChanger(true));
                setshowModal(!showModal);
            }
            else{
                dispatch(setBannerModal(id));
                dispatch(editStatusChanger(true));
                setshowModal(!showModal);
            }
                        
        }
    }

    return (
        <div className="management">
            <Header upperText="" lowerText="Management"></Header>
            <ListManager modalController = {modalController}  location={location}></ListManager>
            {
                showModal ? <Modal modalController = {modalController} location={location}></Modal> : null
            }
        </div>
    );
}

export default withRouter(Management);