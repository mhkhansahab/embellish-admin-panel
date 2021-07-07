import React from 'react';
import "./management.css";
import Header from "./../../Components/organisms/header/header";
import ListManager from "./../../Components/molecules/listManager/listManager";
import Modal from "./../../Components/organisms/modal/modal";
import {useState} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {setProductModal, setBannerModal, modalCleaner, editStatusChanger, getProducts} from "./../../Store/action/actions";
import {useEffect} from "react";

function Management(props) {
    const isBanner = props.location.pathname.includes("banner");
    const [showModal, setshowModal] = useState(false);

    useEffect(() => {
        props.getProducts();
    }, []);


    const modalController = (type, id, modal)=>{
        if(type === "add"){
            setshowModal(!showModal);
            props.modalCleaner();
        }else{
            if (modal === "product"){
                props.setProductModal(id);
                props.editStatusChanger(true);
                setshowModal(!showModal);
            }else{
                props.setBannerModal(id);
                props.editStatusChanger(true);
                setshowModal(!showModal);
            }
                        
        }
    }

    return (
        <div className="management">
            <Header upperText="" lowerText="Management"></Header>
            <ListManager modalController = {modalController}  isBanner={isBanner}></ListManager>
            {
                showModal ? <Modal modalController = {modalController} isBanner={isBanner}></Modal> : null
            }
        </div>
    );
}

const mapDispatchToProps = {
    setProductModal,
    setBannerModal,
    modalCleaner,
    editStatusChanger,
    getProducts
}

export default connect(null,mapDispatchToProps)(withRouter(Management));