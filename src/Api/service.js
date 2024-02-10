const Mysqlclient = require("../util/db");


// Real only
const getDrinkService = async () =>{
    try {
        const result = await Mysqlclient.query("SELECT * FROM drinkProduct");
        return result[0];
        
    } catch (e) {
        console.log("error" , e);
        return null;
    }
}


//Insert Product into Database

const createGetDrinkService = async (drinkName , typeDrink , quantity , price) => {
    try {
    //sql
    const sql = `INSERT INTO drinkProduct (drinkName , typeDrink , quantity , price) VALUES (?,?,?,?)`;

    //params
    const params = [drinkName , typeDrink , quantity , price];

    //result
    const result = await Mysqlclient.query(sql , params);
    console.log(result);
    return  result ; 

    } catch (e) {
        console.log("error" , e);
        return null;
        
    }
}


//Update Product 
const updateGetDrinkService = async (drinkName , typeDrink , quantity , price , id)=>{
    
    try {
    //sql
    const sql = `UPDATE drinkProduct SET drinkName = ? , typeDrink = ? , quantity = ? , price = ? WHERE id = ?`;

    //params
    const params = [drinkName , typeDrink , quantity , price , id];

    //result 
    const result = await Mysqlclient.query(sql , params);

    //control flow
    if(result.length >0 && result[0].affectedRows ==1 ){
        return true;
    }return null;
        
    } catch (e) {
        console.log("can't read");
        return null;
    }

}

const deleteGetDrinkService = async (id)=>{
    console.log("=================================", id);
    try {
        //sql 
        const sql = `DELETE FROM drinkProduct WHERE id = ?`;

        //params
        const  params = [id] ;

        //result
        const result = await Mysqlclient.query(sql , params);

        //control flow
        if(result.length > 0 && result[0].affectedRows == 1){
            return true;
        }
        return null;
        
    } catch (e) {
        console.log("can't read");
        return null;
    }

    
}


module.exports = {
    getDrinkService,
    createGetDrinkService,
    updateGetDrinkService,
    deleteGetDrinkService,
}