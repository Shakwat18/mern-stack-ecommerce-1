import axios from "axios";
import { create } from "zustand";
const productStore = create((set) => ({
  sliderList: null,
  getSliderList: async () => {
    let res = await axios.get("/api/sliderList");
    set({ sliderList: res.data["data"] });
  },

  brandList: null,
  getBrandList: async () => {
    let res = await axios.get("/api/brandList");
    set({ brandList: res.data["data"] });
  },

  categoryList: null,
  getCategoriesList: async () => {
    let res = await axios.get("/api/categoryList");
    set({ categoryList: res.data["data"] });
  },

  productByRemark: null,
  getProductByRemark: async (remark) => {
    let res = await axios.get("/api/productsListByRemark/" + remark);
    set({ productByRemark: res.data["data"] });
  },
  
}));

export default productStore;
