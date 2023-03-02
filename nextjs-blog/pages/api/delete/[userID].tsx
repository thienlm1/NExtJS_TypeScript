import { MongoClient, ObjectId } from "mongodb"
async function handler(req: any, resp: any){
    
    const {userID} = req.query
    console.log(typeof(userID))
    console.log(userID)
    if(req.method !== 'DELETE') return
    
    const client = await MongoClient.connect("mongodb+srv://thienlm190355:tavip123@crudapi.elxr0vd.mongodb.net/?retryWrites=true&w=majority")
    const db = client.db()
    const collection = db.collection("users")
    const result = await (await collection.deleteOne({_id: new ObjectId(userID)})).deletedCount;
    client.close()
    console.log("deleted count::::"+result)
    return resp.json({
        todo: result,
        message: "To do deleted"
    })
}
export default handler