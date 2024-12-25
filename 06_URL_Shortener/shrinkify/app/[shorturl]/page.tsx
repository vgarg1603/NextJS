import clientPromise from '@/lib/mongodb';
import { redirect } from 'next/navigation'

interface PageProps {
    params: {
        shorturl: string;
    };
}

export default async function Page({ params }: PageProps) {
    const { shorturl } = params;

    const client = await clientPromise
    const db = client.db("shrinkify")
    const collection = db.collection("url")

    const doc = await collection.findOne({shorturl: shorturl})
    if(doc) {
        redirect(doc.url)
    }
    else{
        redirect('/')
    }

    return (
        <div>
            My Post: {shorturl}
        </div>
    )
}
