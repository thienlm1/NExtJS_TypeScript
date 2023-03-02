import { MongoClient } from "mongodb"
async function handler(req: any, resp: any){
    if(req.method !== 'POST') return
    const {title, description} = req.body
    if(!title) return
    
    const client = await MongoClient.connect("mongodb+srv://thienlm190355:tavip123@crudapi.elxr0vd.mongodb.net/?retryWrites=true&w=majority")
    const db = client.db()
    const collection = db.collection("todos")
    const heading = title
    const result = await collection.insertOne({heading, description})
    client.close()
    resp.status(201).json({
        todo: result,
        message: "new blog created"
    })
}
export default handler