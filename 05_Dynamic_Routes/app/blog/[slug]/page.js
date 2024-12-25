import NotFound from "@/app/not-found"

export default async function Page({ params }) {
    let languages = ["python", "java", "cpp", "c"]
    const slug = (await params).slug
    if(languages.includes(slug)) {
        return <div>My Post: {slug}</div>
    }
    else{
        return <NotFound></NotFound>
    }
  }