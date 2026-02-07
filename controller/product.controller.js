const { read_file } = require("../api/file-system")

const getAllProducts = async (req, res) => {
    try {

        const product = read_file("product.json")

        res.render("index", {product})
    }catch(error) {
        res.status(500).json9({
            message: error.message
        })
    }
}

const getOneProduct = async (req, res) => {
    try {

    }catch(error) {
        res.status(500).json9({
            message: error.message
        })
    }
}

const addProduct = async (req, res) => {
    try {

    }catch(error) {
        res.status(500).json9({
            message: error.message
        })
    }
}

const updateProduct = async (req, res) => {
    try {

    }catch(error) {
        res.status(500).json9({
            message: error.message
        })
    }
}

const deleteProduct = async (req, res) => {
    try {

    }catch(error) {
        res.status(500).json9({
            message: error.message
        })
    }
}

module.exports = {
    getAllProducts,
    getOneProduct,
    addProduct,
    updateProduct,
    deleteProduct
}