const { PaymentFailService, PaymentCancelService, CreateInvoiceService, PaymentIPNService, InvoiceListService, InvoiceProductListService, paymentSuccessService } = require("../services/InvoiceServices")

const createInvoice= async( req, res)=>{
    const result = await CreateInvoiceService(req)

    res.status(200).json(result)
}

const paymentSuccess = async (req,res)=>{
       const result = await paymentSuccessService(req)

    res.status(200).json(result)
}
const paymentFail= async( req, res)=>{
    const result = await PaymentFailService(req)

    res.status(200).json(result)
}
const paymentCancel= async( req, res)=>{
    const result = await PaymentCancelService(req)

    res.status(200).json(result)
}
const paymentIPN= async( req, res)=>{
    const result = await PaymentIPNService(req)

    res.status(200).json(result)
}
const invoiceList= async( req, res)=>{
    const result = await InvoiceListService(req)

    res.status(200).json(result)
}
const invoiceProductLists= async( req, res)=>{
    const result = await InvoiceProductListService(req)

    res.status(200).json(result)
}


module.exports= { createInvoice,paymentSuccess, paymentFail, paymentCancel, paymentIPN, invoiceList, invoiceProductLists}