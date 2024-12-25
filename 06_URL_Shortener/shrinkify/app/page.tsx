import Image from "next/image";
import Link from "next/link";
import { poppins } from "./layout";



export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">

        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>The best url shortener</p>
          <p>We are the most straight-forward URL Shortener in the world</p>

          <li className='flex gap-3 items-center pt-1'>
            <Link href={'/generate'}><button type="button" className="bg-purple-500 px-4 py-2 rounded-2xl hover:text-white">Try Now!</button></Link>
            <Link href={'https://github.com/vgarg1603'} target="_blank"><button type="button" className="bg-purple-500 px-4 py-2 rounded-2xl hover:text-white">GitHub</button></Link>
          </li>
        </div>

        <div className="flex justify-start relative">
          <Image className="" alt="An image of vector" src={"/vector.png"} fill={true}></Image>
        </div>
      </section>
    </main>
  );
}
