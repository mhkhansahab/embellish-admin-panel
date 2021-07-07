export const GET_ALL_BANNERS = "GET_ALL_BANNERS";
export const ADD_BANNER = "ADD_BANNER";
export const DELETE_BANNER = "DELETE_BANNER";
export const UPDATE_BANNER = "UPDATE_BANNER";

export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES";

export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const MODAL_DATA_EDITOR = "MODAL_DATA_EDITOR";
export const MODAL_DATA_CLEANER = "MODAL_DATA_CLEANER";

export const EDIT_STATUS_CHANGER = "EDIT_STATUS_CHANGER";

export const getProducts = () => async (dispatch) => {
  try {
    const promise = await fetch(
      "https://embellish.herokuapp.com/product/all_products"
    );
    const products = await promise.json();
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: products.products,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = (data) => async (dispatch) => {
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

    const promise = await fetch(
      "https://embellish.herokuapp.com/admin/add_product",
      fetchData
    );
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

export const deleteProduct = (id) => async (dispatch, getState) => {
  const tempData = {
    id: id,
    username: "admin_user135",
    password: "admin_password_embellish",
  };

  try {
    const fetchData = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(tempData),
    };
    const promise = await fetch(
      "https://embellish.herokuapp.com/admin/delete_product",
      fetchData
    );
    const product = await promise.json();
    if (product.message === "Product Removed Successfully") {
      const products = getState().products;
      const filtered = products.filter((item) => {
        return item._id !== id;
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
  const tempData = {...data};
  tempData.id = id;
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
    const promise = await fetch(
      "https://embellish.herokuapp.com/admin/update_product",
      fetchData
    );
    const product = await promise.json();

    console.log(product);
    // const products = getState().products;
    // const filtered = products.map((item) => {
    //   if (product.data._id === item._id) {
    //     return product;
    //   }
    //   return item;
    // });

    // dispatch({
    //   type: UPDATE_PRODUCT,
    //   payload: filtered,
    // });
  } catch (error) {
    throw error;
  }
};

export const getBanners = () => async (dispatch) => {
  try {
    const promise = await fetch(
      "https://internship-slick-api.herokuapp.com/api/banners"
    );
    const banners = await promise.json();
    dispatch({
      type: GET_ALL_BANNERS,
      payload: banners.data,
    });
  } catch (error) {
    throw error;
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const promise = await fetch(
      "https://internship-slick-api.herokuapp.com/api/products/categories"
    );
    const categories = await promise.json();
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: categories.data,
    });
  } catch (error) {
    throw error;
  }
};

export const createBanner = (data) => async (dispatch) => {
  try {
    const fetchData = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    };
    const promise = await fetch(
      "https://internship-slick-api.herokuapp.com/api/banners",
      fetchData
    );
    const banner = await promise.json();
    dispatch({
      type: ADD_BANNER,
      payload: banner.data,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteBanner = (id) => async (dispatch, getState) => {
  try {
    const fetchData = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    };
    const promise = await fetch(
      "https://internship-slick-api.herokuapp.com/api/banners?id=" + id,
      fetchData
    );
    const banner = await promise.json();

    const banners = getState().banners;
    const filtered = banners.filter((item) => {
      return item._id !== id;
    });
    dispatch({
      type: DELETE_BANNER,
      payload: filtered,
    });
  } catch (error) {
    throw error;
  }
};

export const updateBanner = (data, id) => async (dispatch, getState) => {
  try {
    const fetchData = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(data),
    };
    const promise = await fetch(
      "https://internship-slick-api.herokuapp.com/api/banners/" + id,
      fetchData
    );
    const banner = await promise.json();

    const banners = getState().banners;
    const filtered = banners.map((item) => {
      if (banner.data._id === item._id) {
        return banner.data;
      }
      return item;
    });

    dispatch({
      type: UPDATE_BANNER,
      payload: filtered,
    });
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
