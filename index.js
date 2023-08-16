const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

const override = require("method-override");
app.use(override("_method"));

const expressLayout = require("express-ejs-layouts");
app.use(expressLayout);
app.set("layout", "./layout/public.ejs");

app.set("view engine", "ejs");
app.set("views", "./src/views");

const session = require("cookie-session");
app.use(session({ keys: [process.env.keys] }));
const { isLogin } = require("./src/middlewares/login.js");


const login = require("./src/route/loginRoute.js");
app.use("/", login);

const home = require("./src/route/homeRoute.js");
app.use("/home", home);

const productosRoute = require("./src/route/productRoute.js");
app.use("/product", isLogin, productosRoute);

const shopRoute = require("./src/route/shopRoute.js");
app.use("/shop", shopRoute);

const itemRoute = require("./src/route/itemRoute.js");
app.use("/item", itemRoute);

app.get("/", (req, res) => {
  res.render("index", {
    layout: "layout/index.ejs",
  });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
