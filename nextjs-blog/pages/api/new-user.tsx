import { MongoClient } from "mongodb"
async function handler(req: any, resp: any){
    if(req.method !== 'POST') return
    const {email, name, age} = req.body
    if(!email) return
    
    const client = await MongoClient.connect("mongodb+srv://thienlm190355:tavip123@crudapi.elxr0vd.mongodb.net/?retryWrites=true&w=majority")
    const db = client.db()
    const collection = db.collection("users")
    const result = await collection.insertOne({email, name, age})
    client.close()
    resp.status(201).json({
        todo: result,
        message: "new User created"
    })
}
export default handler