import { MongoClient, ObjectId } from "mongodb"
async function handler(req: any, resp: any) {
    const {id, title, description} = req.body
    if (req.method !== 'POST') return
    console.log("updated record::::")
    var queryID = { _id: new ObjectId(id.toString()) };
    const options = { upsert: true }
    const updatedBlog= {
        $set: { heading: title, description: description}
    };
    const client = await MongoClient.connect("mongodb+srv://thienlm190355:tavip123@crudapi.elxr0vd.mongodb.net/?retryWrites=true&w=majority")
    const db = client.db()
    const collection = db.collection("todos")
    const result = await collection.updateOne(queryID, updatedBlog, options);
    client.close()
    console.log("updated record::::" + result)
    return resp.json({
        todo: result,
        message: "To do updated!"
    })
}
export default handler