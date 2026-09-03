const { default: mongoose } = require("mongoose");
const Cart = require("../models/CartModel");
const Profile = require("../models/ProfileModel");
const Invoice = require("../models/InvoiceModel");
const InvoiceProduct = require("../models/InvoiceProductModel");
const PaymentSettings = require("../models/PamentSettingsModel");
const FormData = require("form-data");
const { default: axios } = require("axios");

const CreateInvoiceService = async (req) => {
  // step 1: calculation  total payable & vat

  const userId = new mongoose.Types.ObjectId(req.headers["user_id"]);

  const match= { $match: { userId } };
  const joinProduct = {
    $lookup: {
      from: "products",
      localField: "productId",
      foreignField: "_id",
      as: "product",
    },
  };
  const unWindProduct = { $unwind: "$product" };
  const carts = await Cart.aggregate([match, joinProduct, unWindProduct]);
  let price;

  let totalPrice = 0;
  carts.forEach((cart) => {
    if (cart.product.discount) {
      price = Number(cart.product.disPrice);
    }
    price = Number(cart.product.price);
    totalPrice += price * carts.length;
  });
let vat= totalPrice * 0.05
let payable = totalPrice + vat



  // step 2 : prepare customer Details and shipping Details

  const cus_email= req.headers["email"]
const profile=await Profile.aggregate([
    match
])

let cu_details= `Name:${profile[0].cu_name}, Phone:${profile[0].cu_phone}, Address:${profile[0].cu_add}`
let ship_details= `Name:${profile[0].ship_name}, Phone:${profile[0].ship_phone}, Address:${profile[0].ship_add}`

  // step 3: transact & other id

  let tran_id= Math.floor(10000000 + Math.random()*90000000)
  let val_id= 0
  let delivery_status= "pending"
  let payment_status="pending"

  // step 4: invoice create

  const createInvoice= await Invoice.create({
    userId,
    payable,
    cu_details,
    ship_details,
    tran_id,
    val_id,
delivery_status,
payment_status,
total:totalPrice,
vat
    
  })

  // step 5:  create invoice product
let invoiceId= createInvoice['_id']

carts.forEach(async(cart)=>{
    await InvoiceProduct.create({
        userId,
        productId:cart.product._id,
        invoiceId,
        color:cart.color,
        qty: cart.qty,
        price:cart.product.dicount ? cart.product.disPrice : cart.product.price,
        size:cart.size
    })
})
  // step 6: remove cart list

  await Cart.deleteMany({userId})

  // step 7: Prepare SSL payment


  const paySettings= await PaymentSettings.find()

const form= new FormData()

form.append('store_id',paySettings[0]['store_id'])
form.append('store_passwd',paySettings[0]['store_passwd'])
form.append('total_amount',payable.toString())
form.append('currency',paySettings[0]['currency'])
form.append('tran_id',tran_id)
form.append('product_category',"Electronics")
form.append('success_url',`${paySettings[0]['success_url']}/${tran_id} `)
form.append('fail_url',`${paySettings[0]['fail_url']}/${tran_id} `)
form.append('cancel_url',`${paySettings[0]['cancel_url']}/${tran_id} `)
form.append('ipn_url',`${paySettings[0]['ipn_url']}/${tran_id} `)
form.append('store_id',paySettings[0]['store_id'])


form.append('cus_name',profile[0]["cu_name"])
form.append('cus_email',cus_email)
form.append('cus_add1',profile[0]["cu_add"])
form.append('cus_add2',profile[0]["cu_add"])
form.append('cus_city',profile[0]["cu_city"])
form.append('cus_postcode',profile[0]["cu_postcode"])
form.append('cus_country',profile[0]["cu_country"])
form.append('cus_phone',profile[0]["cu_phone"])


form.append('shipping_method','YES')
form.append('ship_name',profile[0]["ship_name"])
form.append('ship_add1',profile[0]["ship_add"])
form.append('ship_add2',profile[0]["ship_add"])
form.append('ship_city',profile[0]["ship_city"])
form.append('ship_state',profile[0]["ship_state"])
form.append('ship_country',profile[0]["ship_country"])
form.append('ship_postcode',profile[0]["ship_postcode"])

form.append('product_name','Accoding Invoice')
form.append('product_category','Accoding Invoice')
form.append('product_profile','Accoding Invoice')
form.append('product_amount','Accoding Invoice')


const ssl=await axios.post(paySettings[0]['init_url'],form)
// console.log(ssl);

    return { status: "success" ,data:ssl.data};
};

const paymentSuccessService= async (req)=>{
 
 try {
   const {trx_id}= req.params

  await Invoice.updateOne({tran_id: trx_id},{payment_status:"success"})
return { status: "success" }
 } catch (error) {
 return { status: "failed", message: error.message }.toString; }
}

const PaymentFailService = async (req) => {
   
 try {
   const {trx_id}= req.params

  await Invoice.updateOne({tran_id: trx_id},{payment_status:"failed"})
return { status: "success" }
 } catch (error) {
 return { status: "failed", message: error.message }.toString; }
};

const PaymentCancelService = async (req) => {
   
 try {
   const {trx_id}= req.params

  await Invoice.updateOne({tran_id: trx_id},{payment_status:"cancel"})
return { status: "success" }
 } catch (error) {
 return { status: "failed", message: error.message }.toString; }
};

const PaymentIPNService = async (req) => {
try {
  
} catch (error) {
 return { status: "failed", message: error.message }.toString; }
};

const InvoiceListService = async (req) => {
try {
  
} catch (error) {
 return { status: "failed", message: error.message }.toString; }
};

const InvoiceProductListService = async (req) => {
try {
  
} catch (error) {
   return { status: "failed", message: error.message }.toString; }
};

module.exports = {
  CreateInvoiceService,
  paymentSuccessService,
  PaymentFailService,
  PaymentCancelService,
  PaymentIPNService,
  InvoiceListService,
  InvoiceProductListService,
};
