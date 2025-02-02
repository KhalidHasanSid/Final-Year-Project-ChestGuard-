import mongoose from  "mongoose"



const connectDB = async ()=>{

    try{
        // const connection=  await mongoose.connect(`${process.env.MONGO_URI}/CHESTGUARD`)
        const connection=  await mongoose.connect('mongodb+srv://khalid:khalid123@cluster0.570yx.mongodb.net/CHESTGUARD')

        if(connection){
            console.log("mongodb connection MOUNTED")
        }
    }
    catch(err){
        console.log("error occer in db connection ",err)
        process.exit(1)

    }

}

export {connectDB}