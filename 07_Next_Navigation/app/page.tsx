'use client'

import { useSearchParams } from "next/navigation"

export default function Home() {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  return (
    <div>
      Hey this is our page and blog is {search}
    </div>
  );
}
