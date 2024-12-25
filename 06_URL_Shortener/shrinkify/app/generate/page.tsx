'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Shorten = () => {
    const [url, seturl] = useState('');
    const [shorturl, setshorturl] = useState('');
    const [generated, setgenerated] = useState('');

    const generate = async() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            url: url,
            shorturl: shorturl,
        });

        await fetch("/api/generate", {method: "POST", headers: myHeaders, body: raw, redirect: "follow"}) // Corrected to use `requestOptions`
            .then((response) => response.json())
            .then((result) => {
                seturl("")
                setshorturl("")
                console.log(result);
                // alert(result.message);
                if (!result.error) {
                    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                }

            })
            .catch((error) => console.error("Error:", error));
    };

    return (
        <div className="m-4">
            <form
                action=""
                onSubmit={(e) => {
                    e.preventDefault();
                    generate(); // Call the generate function when the form is submitted
                }}
                className="mx-auto max-w-md bg-purple-100 text-center flex flex-col gap-4 justify-center items-center p-8"
            >
                <h1 className="text-xl">Generate Short URLs</h1>

                <input
                    type="text"
                    placeholder="Enter URL"
                    value={url}
                    onChange={(e) => seturl(e.target.value)}
                    className="bg-purple-50 border border-purple-300 text-purple-900 placeholder-purple-400 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 focus:outline-purple-600 focus:border w-full p-3 shadow-sm"
                />

                <input
                    type="text"
                    placeholder="Preferred short URL"
                    value={shorturl}
                    onChange={(e) => setshorturl(e.target.value)}
                    className="bg-purple-50 border border-purple-300 text-purple-900 placeholder-purple-400 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 focus:outline-purple-600 focus:border w-full p-3 shadow-sm"
                />

                <button
                    type="submit"
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
                >
                    Submit
                </button>

                {generated && <><span className='font-bold text-lg'>Your Link </span> <code><Link target='_blank' href={generated}>{generated}</Link></code></>}

            </form>

        </div>
    );
};

export default Shorten;
