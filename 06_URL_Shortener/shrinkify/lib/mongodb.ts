import { MongoClient, MongoClientOptions } from "mongodb";

const uri: string | undefined = process.env.MONGODB_URI;

const options: MongoClientOptions = {}; // Empty object as no special options are needed

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Ensure Mongo URI is provided
if (!uri) {
    throw new Error("Add Mongo URI to .env.local");
}

// Handling client initialization in development vs production
if (process.env.NODE_ENV === 'development') {
    // Use global object to store the client in development to avoid multiple connections
    if (!(global as any)._mongoClientPromise) {
        client = new MongoClient(uri, options);
        (global as any)._mongoClientPromise = client.connect();
    }
    clientPromise = (global as any)._mongoClientPromise;
} else {
    // For production, create a new client
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

// Export the client promise for use in your application
export default clientPromise;
