const express = require("express");
const router = express();
const { getDrinkController, createGetDrinkController, updateGetDrinkController, deleteGetDrinkController } = require("./Api/controller");


router.get("/" , getDrinkController);
router.post("/create" , createGetDrinkController);
router.post("/drink/update" , updateGetDrinkController);
router.post("/drink/delete" , deleteGetDrinkController);

module.exports = {
    router
}