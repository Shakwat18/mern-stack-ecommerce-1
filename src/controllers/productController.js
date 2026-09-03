const {
  brandService,
  categoryService,
  sliderService,
  similarService,
  keywordService,
  remarkService,
  productDetailsService,
  categoryListService,
  brandListService,
  productReviewService,
  createReviewService
} = require("../services/ProductServices");


const brandList = async (req, res) => {
  const result = await brandListService(req);
  return res.status(200).json(result);
};
const categoryList = async (req, res) => {
  const result = await categoryListService(req);
  return res.status(200).json(result);
};
const sliderList = async (req, res) => {
  const result = await sliderService();
  return res.status(200).json(result);
};

const productsReviewList = async (req, res) => {
  const result = await productReviewService(req);
  return res.status(200).json(result);
};
const productsListByBrand = async (req, res) => {
  const result = await brandService(req);
  return res.status(200).json(result);
};

const productsListByCategory = async (req, res) => {
  const result = await categoryService(req);
  return res.status(200).json(result);
};

const productsListBySimilar = async (req, res) => {
  const result = await similarService(req);
  return res.status(200).json(result);
};

const productsListByKeyword = async (req, res) => {
  const result = await keywordService(req);
  return res.status(200).json(result);
};

const productsListByRemark = async (req, res) => {
  const result = await remarkService(req);
  return res.status(200).json(result);
};

const productsListByDetails = async (req, res) => {
  const result = await productDetailsService(req);
  return res.status(200).json(result);
};


const createReview=async(req,res)=>{
    const result = await createReviewService(req);
  return res.status(200).json(result); 
}

module.exports = {
    productsReviewList,
  productsListByBrand,
  productsListByCategory,
  productsListByDetails,
  productsListByKeyword,
  productsListByRemark,
  productsListBySimilar,
  brandList,
  categoryList,
  sliderList,
  createReview
};
