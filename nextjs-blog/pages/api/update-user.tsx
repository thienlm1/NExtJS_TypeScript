import { MongoClient, ObjectId } from "mongodb"
async function handler(req: any, resp: any) {
    const {id, email, name, age} = req.body
    if (req.method !== 'POST') return
    console.log("updated record::::")
    var queryID = { _id: new ObjectId(id.toString()) };
    const options = { upsert: true }
    const updateUser = {
        $set: { email: email, name: name, age: age}
    };
    const client = await MongoClient.connect("mongodb+srv://thienlm190355:tavip123@crudapi.elxr0vd.mongodb.net/?retryWrites=true&w=majority")
    const db = client.db()
    const collection = db.collection("users")
    const result = await collection.updateOne(queryID, updateUser, options);
    client.close()
    console.log("updated record::::" + result)
    return resp.json({
        todo: result,
        message: "To do updated!"
    })
}
export default handler