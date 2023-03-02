import { MongoClient, ObjectId } from "mongodb"
async function handler(req: any, resp: any){
    
    const {blogID} = req.query
    if(req.method !== 'DELETE') return
    console.log(blogID)
    
    const client = await MongoClient.connect("mongodb+srv://thienlm190355:tavip123@crudapi.elxr0vd.mongodb.net/?retryWrites=true&w=majority")
    const db = client.db()
    const collection = db.collection("todos")
    const result = await (await collection.deleteOne({_id: new ObjectId(blogID)})).deletedCount;
    client.close()
    console.log("deleted count::::"+result)
    return resp.json({
        todo: result,
        message: "To do deleted"
    })
}
export default handler