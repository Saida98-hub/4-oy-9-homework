const {Router} = require("express")
const { getAllProducts, getOneProduct, addProduct, updateProduct, deleteProduct } = require("../controller/product.controller")

const productRouter = Router()

productRouter.get("/get_all_products", getAllProducts),
productRouter.get("/get_one_product/:id", getOneProduct),
productRouter.post("/add_product", addProduct),
productRouter.put("/update_product/:id", updateProduct),
productRouter.delete("/delete_product/:id", deleteProduct)


module.exports = productRouter
