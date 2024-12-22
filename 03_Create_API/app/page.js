"use client"
import { handleClick } from "@/handlers/handleClick.js"
import { submitAction } from "@/actions/submitAction";

export default function Home() {


  return (
    <div >
      <div>
        <h1 className="text-xl text-center font-bold">Next.js API routes demo</h1>
        <button onClick={handleClick}>Click me</button>
      </div>

      <form action={submitAction} className="my-12">
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="flex gap-4">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="text-black"/>
          </div>

          <div className="flex gap-4">
            <label htmlFor="add">Address</label>
            <input type="text" name="add" id="add" className="text-black"/>
          </div>

          <div>
            <button className="border border-white p-5">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
