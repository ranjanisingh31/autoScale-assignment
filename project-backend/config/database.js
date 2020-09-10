const mongoose = require("mongoose");
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://ranjani:1331@mini-project.mklnv.mongodb.net/assignment?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });

        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;
