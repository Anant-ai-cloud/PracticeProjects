import mongoose from "mongoose"

const dbcon = async()=>{
    try {
        const conn = await mongoose.connect()
        
    } catch (error) {
        console.log(error)
    }
}