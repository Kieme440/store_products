import express from "express";
import inventoryRoute from "./routes/inventoryRoute.js";

const app = express();
const PORT = 5001;

app.use("inventory/lists", inventoryRoute);
app.use("inventory/products", inventoryRoute);

app.listen("PORT", ()=>{
    console.log("loaded successfully at port ${PORT}");
});