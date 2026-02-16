const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const productRouter = require("./router/product.routes");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Server ishlayapti. Deploy muvaffaqiyatli bajarildi.");
});

app.use("/", productRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
