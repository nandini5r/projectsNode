const express = require('express');
const connectDB = require("./config/database")
const app = express();
const port = process.env.PORT || 3000;

connectDB().then(()=>{
    console.log("Database connected succesfully !!!")

}).catch(err =>{
    console.error("Database can not be connected!!",err)

})


app.listen(port, () =>{
     console.log(`listening on http://localhost:${port}`)
    }
);
