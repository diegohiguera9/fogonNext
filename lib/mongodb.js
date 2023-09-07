import { MongoClient } from "mongodb";

const URI = process.env.MONGGODB_URI
const options = {}

if(!URI) throw new Error('Please add mongodb Uri')

let client = new MongoClient(URI, options)
let clientPromise

if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect()
}

clientPromise = global._mongoClientPromise

export default clientPromise