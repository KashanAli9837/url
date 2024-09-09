import mongoose from "mongoose";

const connect = async (url) => 
    mongoose.connect(url)

export default connect;