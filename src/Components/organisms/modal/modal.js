import React from "react";
import "./modal.css";
import close from "./../../../Assets/general/close.svg";
import coin from "./../../../Assets/general/coin.svg";
import { useState, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import {
  createBanner,
  createProduct,
  modalCleaner,
  updateBanner,
  updateProduct,
  editStatusChanger,
} from "./../../../Store/action/actions";
import Swal from "sweetalert2";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";

function Modal(props) {
  const [banner, setbanner] = useState({ link: "" });
  const [product, setproduct] = useState({
    name: "",
    description: "",
    image: "",
    category: "abc",
    quantity: "",
    price: "",
    color: "",
    size: "",
    extraImage: "",
    sizes: [],
    colors: [],
    extraImages: [],
  });

  const categories = useSelector((state) => state.categories);
  const { isEdit, data } = useSelector((state) => state.modal);

  useEffect(() => {
    if (data.length !== 0) {
      const element = data[0];
      if (props.isBanner) {
        setbanner({ link: element.link });
      } else {
        setproduct({
          name: element.name,
          description: element.description,
          image: element.image,
          category: element.category,
          quantity: element.quantity,
          price: element.price,
          color: "",
          size: "",
          extraImage: "",
          sizes: element.sizes,
          colors: element.colors,
          extraImages: element.more_images,
        });
      }
    }
  }, []);

  const bannerHandler = (e) => {
    const input = { ...banner };
    input.link = e.target.value;
    setbanner(input);
  };

  const addBanner = () => {
    const input = { ...banner };
    if (input.link !== "") {
      try {
        props.createBanner(input);
        setbanner({ link: "" });
        props.modalController("add");
        props.modalCleaner();
      } catch {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } else {
      Swal.fire("No URL Added");
    }
  };

  const editBanner = () => {
    const input = { ...banner };
    if (input.link !== "") {
      try {
        props.updateBanner(input, data[0]._id);
        setbanner({ link: "" });
        props.modalController("add");
        props.modalCleaner();
        props.editStatusChanger(false);
      } catch {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } else {
      Swal.fire("No URL Added");
    }
  };

  const productHandler = (e, type) => {
    if (type === "name") {
      setproduct({
        ...product,
        name: e.target.value,
      });
    } else if (type === "price") {
      setproduct({
        ...product,
        price: e.target.value,
      });
    } else if (type === "link") {
      setproduct({
        ...product,
        image: e.target.value,
      });
    } else if (type === "description") {
      setproduct({
        ...product,
        description: e.target.value,
      });
    } else if (type === "quantity") {
      setproduct({
        ...product,
        quantity: e.target.value,
      });
    } else if (type === "size") {
      setproduct({
        ...product,
        size: e.target.value,
      });
    } else if (type === "color") {
      setproduct({
        ...product,
        color: e.target.value,
      });
    } else if (type === "extraImage") {
      setproduct({
        ...product,
        extraImage: e.target.value,
      });
    } else {
      setproduct({
        ...product,
        category: e.target.value,
      });
    }
  };

  const listedProductHandler = (e, type) => {
    if (e.key === "Enter") {
      if (type === "size") {
        if (product.size !== "") {
          setproduct({
            ...product,
            sizes: [...product.sizes].concat(product.size),
            size: "",
          });
        }
      } else if (type === "color") {
        if (product.color !== "") {
          setproduct({
            ...product,
            colors: [...product.colors].concat(product.color),
            color: "",
          });
        }
      } else if (type === "extraImage") {
        if (product.extraImage !== "") {
          setproduct({
            ...product,
            extraImages: [...product.extraImages].concat(product.extraImage),
            extraImage: "",
          });
        }
      }
    }
  };
  const removeColor = (index) => {
    let obj = { ...product };
    let colors = [...obj.colors];
    colors.splice(index, 1);
    obj.colors = colors;
    setproduct(obj);
  };

  const removeSize = (index) => {
    let obj = { ...product };
    let sizes = [...obj.sizes];
    sizes.splice(index, 1);
    obj.sizes = sizes;
    setproduct(obj);
  };

  const removeImage = (index) => {
    let obj = { ...product };
    let images = [...obj.extraImages];
    images.splice(index, 1);
    obj.extraImages = images;
    setproduct(obj);
  };

  const addProduct = () => {
    const input = { ...product };
    if (
      input.name !== "" &&
      input.image !== "" &&
      input.price !== "" &&
      input.description !== "" &&
      input.quantity !== "" &&
      input.sizes.length >= 0 &&
      input.colors.length >= 0
    ) {
      try {
        props.createProduct(input);
        setproduct({
          name: "",
          description: "",
          image: "",
          category: "",
          quantity: "",
          price: "",
          color: "",
          size: "",
          extraImage: "",
          sizes: [],
          colors: [],
          extraImages: [],
        });
        props.modalController("add");
        props.modalCleaner();
      } catch {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } else {
      Swal.fire("Enter All Fields");
    }
  };

  const editProduct = () => {
    const input = { ...product };
    if (
      input.name !== "" &&
      input.image !== "" &&
      input.price !== "" &&
      input.description !== "" &&
      input.quantity !== "" &&
      input.sizes.length >= 0 &&
      input.colors.length >= 0
    )
     {
      try {
        props.updateProduct(input, data[0]._id);
        setproduct({
          name: "",
          description: "",
          image: "",
          category: "",
          quantity: "",
          price: "",
          color: "",
          size: "",
          extraImage: "",
          sizes: [],
          colors: [],
          extraImages: [],
        });
        props.modalController("add");
        props.modalCleaner();
        props.editStatusChanger(false);
      } catch {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } else {
      Swal.fire("Enter All Fields");
    }
  };

  const bannerModal = () => {
    return (
      <>
        <div className="modal-header flex">
          <div className="modal-text">Add New Banner</div>
          <div
            className="close-btn flex center-1 center-2"
            onClick={() => {
              props.modalController("add", "");
              props.editStatusChanger(false);
            }}
          >
            <img src={close}></img>
          </div>
        </div>
        <div className="modal-fields">
          <div className="input-label">ENTER IMAGE URL</div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Write here..."
              value={banner.link}
              onChange={(e) => bannerHandler(e)}
            ></input>
          </div>
        </div>
      </>
    );
  };

  const productModal = () => {
    return (
      <>
        <div className="modal-header flex">
          <div className="modal-text">Add New Product</div>
          <div
            className="close-btn flex center-1 center-2"
            onClick={() => {
              props.modalController("add", "");
              props.editStatusChanger(false);
            }}
          >
            <img src={close}></img>
          </div>
        </div>

        <div className="modal-fields">
          <div className="input-label">PRODUCT NAME</div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Write here..."
              value={product.name}
              onChange={(e) => productHandler(e, "name")}
            ></input>
          </div>

          <div className="input-label">DESCRIPTION</div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Write here..."
              value={product.description}
              onChange={(e) => productHandler(e, "description")}
            ></input>
          </div>

          <div className="input-label">ENTER IMAGE URL</div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Write here..."
              value={product.image}
              onChange={(e) => productHandler(e, "link")}
            ></input>
          </div>

          <div className="input-label">SELECT CATEGORY</div>
          <div className="input-field">
            <select
              type="text"
              onChange={(e) => productHandler(e, "categories")}
            >
              <option disabled value="none">
                Select a Category
              </option>
              {categories.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="input-label">PRICE (Single Unit)</div>
          <div className="input-field price-input">
            <img src={coin} alt="Coin"></img>
            <input
              type="number"
              placeholder="Eg. 4500"
              value={product.price}
              onChange={(e) => productHandler(e, "price")}
            ></input>
          </div>

          <div className="input-label">Quantity</div>
          <div className="input-field price-input">
            <img src={coin} alt="Coin"></img>
            <input
              type="number"
              placeholder="Write Here.."
              value={product.quantity}
              onChange={(e) => productHandler(e, "quantity")}
            ></input>
          </div>

          <div className="input-label">ENTER COLORS</div>
          <div className="input-tile-container">
            {product.colors.map((color, index) => {
              return (
                <div className="input-tile flex" key={index}>
                  {color}
                  <div
                    className="input-tile-icon"
                    onClick={() => removeColor(index)}
                  >
                    <HighlightOffOutlinedIcon />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Write here..."
              value={product.color}
              onChange={(e) => productHandler(e, "color")}
              onKeyPress={(e) => listedProductHandler(e, "color")}
            ></input>
          </div>

          <div className="input-label">ENTER SIZES</div>
          <div className="input-tile-container">
            {product.sizes.map((size, index) => {
              return (
                <div className="input-tile flex" key={index}>
                  {size}
                  <div
                    className="input-tile-icon"
                    onClick={() => removeSize(index)}
                  >
                    <HighlightOffOutlinedIcon />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Write here..."
              value={product.size}
              onChange={(e) => productHandler(e, "size")}
              onKeyPress={(e) => listedProductHandler(e, "size")}
            ></input>
          </div>

          <div className="input-label">ENTER EXTRA IMAGES</div>
          <div className="input-tile-container">
            {product.extraImages.map((image, index) => {
              return (
                <div className="input-tile flex" key={index}>
                  <div className="image-input-tile">{image}</div>
                  <div
                    className="input-tile-icon"
                    onClick={() => removeImage(index)}
                  >
                    <HighlightOffOutlinedIcon />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Write here..."
              value={product.extraImage}
              onChange={(e) => productHandler(e, "extraImage")}
              onKeyPress={(e) => listedProductHandler(e, "extraImage")}
            ></input>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="modal flex center-1 center-2">
      <div className="fields-container">
        {props.isBanner ? bannerModal() : productModal()}
        {props.isBanner ? (
          <div className="save-btn" onClick={isEdit ? editBanner : addBanner}>
            Save
          </div>
        ) : (
          <div className="save-btn" onClick={isEdit ? editProduct : addProduct}>
            Save
          </div>
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  createBanner,
  createProduct,
  modalCleaner,
  updateBanner,
  updateProduct,
  editStatusChanger,
};

export default connect(null, mapDispatchToProps)(Modal);
