import clientPromise from "@/lib/mongodb"

export async function POST(request: Request) {
    const body = await request.json()

    const client = await clientPromise
    const db = client.db("shrinkify")
    const collection = db.collection("url")

    // Check if the short url exists
    const doc = await collection.findOne({shorturl: body.shorturl})
    if(!doc) {
        const result = await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl
        })
    }
    else{
        return Response.json({message: 'URL already present', success: false, error: true})
    }


    return Response.json({ message: 'URL Generated', success: true, error: false })
  }