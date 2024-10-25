const mongoose = require('mongoose');

const connectDB = async()=>{
    await mongoose.connect(
        "mongodb+srv://nandini5rohatgi:nandini2000@namastenode.roldu.mongodb.net/"
    );

}
module.exports = connectDB;
