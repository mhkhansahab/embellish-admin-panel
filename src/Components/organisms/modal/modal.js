import React from "react";
import "./modal.css";
import close from "./../../../Assets/general/close.svg";
import coin from "./../../../Assets/general/coin.svg";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createBanner,
  createProduct,
  modalCleaner,
  updateBanner,
  updateProduct,
  editStatusChanger,
  createCategory,
  updateCategory,
} from "./../../../Store/action/actions";
import Swal from "sweetalert2";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";

function Modal(props) {
  const dispatch = useDispatch();
  const [banner, setbanner] = useState({ link: "" });
  const [category, setcategory] = useState({ name: "", link: "" });
  const [product, setproduct] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
    quantity: "",
    price_pkr: "",
    price_ind: "",
    price_uae: "",
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
      if (props.location.includes("banner")) {
        setbanner({ link: element.img });
      }
      else if(props.location.includes("product")){
        setproduct({
          name: element.name,
          description: element.description,
          image: element.image,
          category: element.category,
          quantity: element.quantity,
          price_pkr: element.price_pkr,
          price_ind: element.price_ind,
          price_uae: element.price_uae,
          color: "",
          size: "",
          extraImage: "",
          sizes: element.sizes,
          colors: element.colors,
          extraImages: element.more_images,
        });
      }else{
        setcategory({ name: element.name, link: element.img });
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
        dispatch(createBanner({ banner_img: input.link }));
        setbanner({ link: "" });
        props.modalController("add");
        dispatch(modalCleaner());
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
        dispatch(updateBanner({ banner_img: input.link , banner_id: data[0]._id}));
        setbanner({ link: "" });
        props.modalController("add");
        dispatch(modalCleaner());
        dispatch(editStatusChanger(false));
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

  const productHandler = (e, type) => {
    if (type === "name") {
      setproduct({
        ...product,
        name: e.target.value,
      });
    } else if (type === "price_pkr") {
      setproduct({
        ...product,
        price_pkr: e.target.value,
      });
    } else if (type === "price_ind") {
      setproduct({
        ...product,
        price_ind: e.target.value,
      });
    } else if (type === "price_uae") {
      setproduct({
        ...product,
        price_uae: e.target.value,
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

  const addProduct = () => {
    const input = { ...product };
    if (
      input.name !== "" &&
      input.image !== "" &&
      input.price_pkr !== "" &&
      input.price_ind !== "" &&
      input.price_uae !== "" &&
      input.description !== "" &&
      input.quantity !== "" &&
      input.sizes.length >= 0 &&
      input.colors.length >= 0
    ) {
      try {
        dispatch(createProduct(input));
        setproduct({
          name: "",
          description: "",
          image: "",
          category: "",
          quantity: "",
          price_pkr: "",
          price_ind: "",
          price_uae: "",
          color: "",
          size: "",
          extraImage: "",
          sizes: [],
          colors: [],
          extraImages: [],
        });
        props.modalController("add");
        dispatch(modalCleaner());
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
      input.price_pkr !== "" &&
      input.price_ind !== "" &&
      input.price_uae !== "" &&
      input.description !== "" &&
      input.quantity !== "" &&
      input.sizes.length >= 0 &&
      input.colors.length >= 0
    ) {
      try {
        dispatch(updateProduct(input, data[0]._id));
        setproduct({
          name: "",
          description: "",
          image: "",
          quantity: "",
          price_pkr: "",
          price_ind: "",
          price_uae: "",
          color: "",
          size: "",
          extraImage: "",
          sizes: [],
          colors: [],
          extraImages: [],
        });
        props.modalController("add");
        dispatch(modalCleaner());
        dispatch(editStatusChanger(false));
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

  const categoryHandler = (e, type) => {
    const input = { ...category };
    if (type === "name") {
      input.name = e.target.value;
      setcategory(input);
    } else {
      input.link = e.target.value;
      setcategory(input);
    }
  };

  const addCategory = () => {
    const input = { ...category };
    if (input.link !== "" && input.name !== "") {
      try {
        dispatch(
          createCategory({ cat_name: category.name.trim(), cat_img: category.link.trim() })
        );
        setcategory({ name: "", link: "" });
        props.modalController("add");
        dispatch(modalCleaner());
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

  const editCategory = () => {
    const input = { ...category };
    if (input.link !== "" && input.name !== "") {
      try {
        dispatch(
          updateCategory({ cat_name: input.name, cat_img: input.link , cat_value: data[0].value, cat_id : data[0]._id})
        );
        setcategory({ name: "", link: "" });
        props.modalController("add");
        dispatch(modalCleaner());
        dispatch(editStatusChanger(false));
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

  const bannerModal = () => {
    return (
      <>
        <div className="modal-header flex">
          <div className="modal-text">Add New Banner</div>
          <div
            className="close-btn flex center-1 center-2"
            onClick={() => {
              props.modalController("add", "");
              dispatch(editStatusChanger(false));
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
              dispatch(editStatusChanger(false));
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
              <option value="none">
                Select a Category
              </option>
              {categories.map((item) => {
                return (
                  <option key={item._id} value={item.value}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="input-label">PRICE IN PKR(Single Unit)</div>
          <div className="input-field price-input">
            <img src={coin} alt="Coin"></img>
            <input
              type="number"
              placeholder="Eg. 4500"
              value={product.price_pkr}
              onChange={(e) => productHandler(e, "price_pkr")}
            ></input>
          </div>

          <div className="input-label">PRICE IN INR(Single Unit)</div>
          <div className="input-field price-input">
            <img src={coin} alt="Coin"></img>
            <input
              type="number"
              placeholder="Eg. 4500"
              value={product.price_ind}
              onChange={(e) => productHandler(e, "price_ind")}
            ></input>
          </div>

          <div className="input-label">PRICE IN UAED(Single Unit)</div>
          <div className="input-field price-input">
            <img src={coin} alt="Coin"></img>
            <input
              type="number"
              placeholder="Eg. 4500"
              value={product.price_uae}
              onChange={(e) => productHandler(e, "price_uae")}
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

  const categoryModal = () => {
    return (
      <>
        <div className="modal-header flex">
          <div className="modal-text">Add New Category</div>
          <div
            className="close-btn flex center-1 center-2"
            onClick={() => {
              props.modalController("add", "");
              dispatch(editStatusChanger(false));
            }}
          >
            <img src={close}></img>
          </div>
        </div>
        <div className="modal-fields">
          <div className="input-label">ENTER CATEGORY NAME</div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Write here..."
              value={category.name}
              onChange={(e) => categoryHandler(e, "name")}
            ></input>
          </div>
          <div className="input-label">ENTER IMAGE URL</div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Write here..."
              value={category.link}
              onChange={(e) => categoryHandler(e, "link")}
            ></input>
          </div>
        </div>
      </>
    );
  };

  const filterLocationToShowModal = (location) => {
    if (location.includes("product")) {
      return productModal();
    } else if (location.includes("banner")) {
      return bannerModal();
    } else {
      return categoryModal();
    }
  };

  const filterLocationToShowButton = (location) => {
    if (location.includes("product")) {
      return (
        <div className="save-btn" onClick={isEdit ? editProduct : addProduct}>
          Save
        </div>
      );
    } else if (location.includes("banner")) {
      return (
        <div className="save-btn" onClick={isEdit ? editBanner : addBanner}>
          Save
        </div>
      );
    } else {
      return (
        <div className="save-btn" onClick={isEdit ? editCategory : addCategory}>
          Save
        </div>
      );
    }
  };

  return (
    <div className="modal flex center-1 center-2">
      <div className="fields-container">
        {filterLocationToShowModal(props.location)}
        {filterLocationToShowButton(props.location)}
      </div>
    </div>
  );
}

export default Modal;
