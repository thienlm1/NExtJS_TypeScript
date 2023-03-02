import { MongoClient, ObjectId } from "mongodb"
async function handler(req: any, resp: any){
    
    const {userID} = req.query
    console.log(typeof(userID))
    console.log(userID)
    if(req.method !== 'GET') return
    
    const client = await MongoClient.connect("mongodb+srv://thienlm190355:tavip123@crudapi.elxr0vd.mongodb.net/?retryWrites=true&w=majority")
    const db = client.db()
    const collection = db.collection("users")
    const result = await collection.findOne({_id: new ObjectId(userID)});
    client.close()
    return result
}
export default handler