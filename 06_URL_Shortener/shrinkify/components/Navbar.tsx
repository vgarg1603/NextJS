import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-700 flex items-center justify-between text-white px-4'>
            <div className="logo font-bold text-lg">Shrinkify</div>
            <ul className='flex justify-between gap-4 items-center'>
                <Link href={'/'}><li>Home</li></Link>
                <Link href={'/generate'}><li>Shorten</li></Link>
                <Link href={'/about'}><li>About</li></Link>
                <Link href={'/contact-us'}><li>Contact Us</li></Link>
                <li className='flex gap-3 items-center pt-1'>
                    <Link href={'/generate'}><button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Try Now!</button></Link>
                    <Link href={'https://github.com/vgarg1603'} target="_blank"><button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">GitHub</button></Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
