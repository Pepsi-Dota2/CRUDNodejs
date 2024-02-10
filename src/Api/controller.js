const { getDrinkService, createGetDrinkService, updateGetDrinkService, deleteGetDrinkService } = require("./service")

const getDrinkController = async (req , res)=>{
    const getdrink = await getDrinkService();
    if(!getdrink){
        return res.json({status:"error" , getdrink : [] })
    }
    return res.json({status:"success" , getdrink:getdrink})

}

const createGetDrinkController = async (req , res)=>{
    const drinkName = req.body.drinkName;
    const typeDrink = req.body.typeDrink;
    const quantity = req.body.quantity;
    const price = req.body.price;

    const drink = await createGetDrinkService(drinkName , typeDrink , quantity , price);
    console.log("===============================",drink)
    if(!drink){
        return res.json({ status: "error" , message:"can't run it"});
    }
    return res.json({status:"Success" , message: "Successfuly"});
}


//Update Controller 
const updateGetDrinkController = async (req , res)=>{
    //constructor
    const drinkName = req.body.drinkName;
    const typeDrink = req.body.typeDrink;
    const quantity = req.body.quantity;
    const price = req.body.price;
    const id = req.body.id;

    // call function service 
    const drink = updateGetDrinkService(drinkName , typeDrink , quantity , price , id);

    //control flow
    if(!drink){
        return res.json({status:"can't update" , message: "Invalid"});
    }
    return res.json({status: "Success", message: "update Successfuly"});
}


const deleteGetDrinkController = async(req , res)=> {

    //constructor
    const id = req.body.id;

    // get service
    const drink = await deleteGetDrinkService(id);
    console.log("=================================]///", drink);

    //controlflow
    if(!drink){
        return res.json({status : 'Failed' , message:"Can't Delete this Drink"});
    }
    return res.json({status:"Success" , message:"delete info successfuly"});



}



module.exports = {
    getDrinkController, 
    createGetDrinkController,
    updateGetDrinkController,
    deleteGetDrinkController
}