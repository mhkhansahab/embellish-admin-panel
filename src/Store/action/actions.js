export const GET_ALL_BANNERS = "GET_ALL_BANNERS";
export const ADD_BANNER = "ADD_BANNER";
export const DELETE_BANNER = "DELETE_BANNER";
export const UPDATE_BANNER = "UPDATE_BANNER";

export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const MODAL_DATA_EDITOR = "MODAL_DATA_EDITOR";
export const MODAL_DATA_CLEANER = "MODAL_DATA_CLEANER";

export const EDIT_STATUS_CHANGER = "EDIT_STATUS_CHANGER";

export const SET_USER = "SET_USER";
export const DELETE_USER = "DELETE_USER";

const baseURL = "https://embellish.herokuapp.com/";

export const getProducts = () => async (dispatch) => {
  try {
    const promise = await fetch(baseURL + "product/all_products");
    const products = await promise.json();
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: products.products,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = (data) => async (dispatch, getState) => {
  const tempData = { ...data };
  const user = getState().user.currentUser;
  tempData.username = user.username;
  tempData.password = user.password;

  try {
    const fetchData = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(tempData),
    };

    const promise = await fetch(baseURL + "admin/add_product", fetchData);
    const product = await promise.json();
    if (product.message === "Product Added Successfully") {
      dispatch({
        type: ADD_PRODUCT,
        payload: product.product,
      });
    }
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = (data) => async (dispatch, getState) => {
  const tempData = { ...data };
  const user = getState().user.currentUser;
  tempData.username = user.username;
  tempData.password = user.password;

  try {
    const fetchData = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(tempData),
    };
    const promise = await fetch(baseURL + "admin/delete_product", fetchData);
    const product = await promise.json();
    if (product.message === "Product Removed Successfully") {
      const products = getState().products;
      const filtered = products.filter((item) => {
        return item._id !== tempData.id;
      });
      dispatch({
        type: DELETE_PRODUCT,
        payload: filtered,
      });
    }
  } catch (error) {
    throw error;
  }
};

export const updateProduct = (data, id) => async (dispatch, getState) => {
  const user = getState().user.currentUser;
  const tempData = { ...data };
  tempData.id = id;
  tempData.username = user.username;
  tempData.password = user.password;
  tempData.more_images = tempData.extraImages;
  
  try {
    const fetchData = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(tempData),
    };
    const promise = await fetch(baseURL + "admin/update_product", fetchData);
    const product = await promise.json();

    if (product.message === "Product Updated Successfully") {
      const products = getState().products;
      const filtered = products.map((item) => {
        if (tempData.id === item._id) {
          return product.product;
        }
        return item;
      });
      dispatch({
        type: UPDATE_PRODUCT,
        payload: filtered,
      });
    }
  } catch (error) {
    throw error;
  }
};

export const getBanners = () => async (dispatch) => {
  try {
    const promise = await fetch(baseURL + "get_banners");
    const banners = await promise.json();
    dispatch({
      type: GET_ALL_BANNERS,
      payload: banners.banners,
    });
  } catch (error) {
    throw error;
  }
};

export const createBanner = (data) => async (dispatch, getState) => {
  const tempData = { ...data };
  const user = getState().user.currentUser;
  tempData.username = user.username;
  tempData.password = user.password;

  try {
    const fetchData = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(tempData),
    };
    const promise = await fetch(baseURL + "admin/add_banner", fetchData);
    const banner = await promise.json();
    dispatch({
      type: ADD_BANNER,
      payload: banner.banner,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteBanner = (data) => async (dispatch, getState) => {
  const tempData = { ...data };
  const user = getState().user.currentUser;
  tempData.username = user.username;
  tempData.password = user.password;

  try {
    const fetchData = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(tempData),
    };
    const promise = await fetch(baseURL + "admin/delete_banner", fetchData);
    const banner = await promise.json();
    if (banner.Message === "Banner Deleted") {
      const banners = getState().banners;
      const filtered = banners.filter((item) => {
        return item._id !== tempData.banner_id;
      });
      dispatch({
        type: DELETE_BANNER,
        payload: filtered,
      });
    }
  } catch (error) {
    throw error;
  }
};

export const updateBanner = (data) => async (dispatch, getState) => {
  const tempData = { ...data };
  const user = getState().user.currentUser;
  tempData.username = user.username;
  tempData.password = user.password;

  try {
    const fetchData = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(tempData),
    };
    const promise = await fetch(baseURL + "admin/update_banner", fetchData);
    const banner = await promise.json();
    if (banner.Message === "Banner Updated Successfully") {
      const banners = getState().banners;
      const filtered = banners.map((item) => {
        if (tempData.banner_id === item._id) {
          return {
            ...item,
            img: tempData.banner_img,
          };
        }
        return item;
      });
      dispatch({
        type: UPDATE_BANNER,
        payload: filtered,
      });
    }
  } catch (error) {
    throw error;
  }
};

export const getAllCategories = () => async (dispatch) => {
  try {
    const promise = await fetch(baseURL + "get_categories");
    const categories = await promise.json();
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: categories.categories,
    });
  } catch (error) {
    throw error;
  }
};

export const createCategory = (data) => async (dispatch, getState) => {
  const tempData = { ...data };
  const cat_value = tempData.cat_name.replace(" ", "_");
  const user = getState().user.currentUser;
  tempData.username = user.username;
  tempData.password = user.password;
  tempData.cat_value = cat_value;

  try {
    const fetchData = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(tempData),
    };
    const promise = await fetch(baseURL + "admin/add_category", fetchData);
    const category = await promise.json();
    dispatch({
      type: ADD_CATEGORY,
      payload: category.category,
    });
  } catch (error) {
    throw error;
  }
};

export const updateCategory = (data) => async (dispatch, getState) => {
  const tempData = { ...data };
  const user = getState().user.currentUser;
  tempData.username = user.username;
  tempData.password = user.password;

  try {
    const fetchData = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(tempData),
    };
    const promise = await fetch(baseURL + "admin/update_category", fetchData);
    const category = await promise.json();
    if (category.Message === "Category Successfully Updated") {
      const categories = getState().categories;
      const filtered = categories.map((item) => {
        if (tempData.cat_id === item._id) {
          return {
            ...item,
            name: tempData.cat_name,
            value: tempData.cat_name.replace(" ", "_"),
            img: tempData.cat_img,
          };
        }
        return item;
      });
      dispatch({
        type: UPDATE_CATEGORY,
        payload: filtered,
      });
    }
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = (data) => async (dispatch, getState) => {
  const tempData = { ...data };
  const user = getState().user.currentUser;
  tempData.username = user.username;
  tempData.password = user.password;

  try {
    const fetchData = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(tempData),
    };
    const promise = await fetch(baseURL + "admin/delete_category", fetchData);
    const category = await promise.json();

    if (category.Message === "Category Deleted") {
      const categories = getState().categories;
      const filtered = categories.filter((item) => {
        return item._id !== tempData.category_id;
      });
      dispatch({
        type: DELETE_CATEGORY,
        payload: filtered,
      });
    }
  } catch (error) {
    throw error;
  }
};

export const setProductModal = (id) => (dispatch, getState) => {
  const products = getState().products;

  const filtered = products.filter((item) => {
    return item._id === id;
  });

  dispatch({
    type: MODAL_DATA_EDITOR,
    payload: filtered,
  });
};

export const setBannerModal = (id) => (dispatch, getState) => {
  const banners = getState().banners;
  const filtered = banners.filter((item) => {
    return item._id === id;
  });

  dispatch({
    type: MODAL_DATA_EDITOR,
    payload: filtered,
  });
};

export const setCategoryModal = (id) => (dispatch, getState) => {
  const categories = getState().categories;

  const filtered = categories.filter((item) => {
    return item._id === id;
  });

  dispatch({
    type: MODAL_DATA_EDITOR,
    payload: filtered,
  });
};

export const modalCleaner = () => (dispatch) => {
  dispatch({
    type: MODAL_DATA_CLEANER,
    payload: [],
  });
};

export const editStatusChanger = (status) => (dispatch) => {
  dispatch({
    type: EDIT_STATUS_CHANGER,
    payload: status,
  });
};

export const sendNewsletter = (data) => async () => {
  const tempData = { ...data };
  tempData.username = "admin_user135";
  tempData.password = "admin_password_embellish";

  try {
    const fetchData = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(tempData),
    };
    const promise = await fetch(baseURL + "admin/send_mail", fetchData);
    const jsonResponse = await promise.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
};

export const signIn = (data) => async (dispatch) => {
  const tempData = { ...data };
  const fetchData = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(tempData),
  };
  try {
    const promise = await fetch(baseURL + "admin/login", fetchData);
    const jsonPromise = await promise.json();
    if (jsonPromise.message !== "Access Denied") {
      dispatch(setUser(tempData));
      window.sessionStorage.setItem("isLogin", true);
      window.sessionStorage.setItem("user", JSON.stringify(tempData));
    }
  } catch (error) {
    console.log(error);
  }
};

export const setUser = (data) => (dispatch) => {
  dispatch({
    type: SET_USER,
    payload: data,
  });
};
export const signOut = () => (dispatch) => {
  window.sessionStorage.removeItem("isLogin");
  window.sessionStorage.removeItem("user");
  dispatch({
    type: DELETE_USER,
  });
};
