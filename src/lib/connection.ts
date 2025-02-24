import mongoose from "mongoose";

type ConnectionObject = {
  isConnected? : number

}


const connection : ConnectionObject = {};


async function Connect() : Promise<void>{
    if(connection.isConnected){
      console.log("Already COnected to the database");
      return
      
    }

    try {
      const db = await mongoose.connect(process.env.MONGO_URI!)
      connection.isConnected  = db.connections[0].readyState

      console.log("Database connected successfully");
      
    } catch (error) {
      console.log("database does not connected " , error);

      process.exit(1)
      
    }
}


export default Connect