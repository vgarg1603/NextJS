"use client"
import { usePathname } from 'next/navigation';
import React from 'react';


const Navbar = () => {
    const pathname = usePathname()
    return (
        <div>
            Current path : {pathname}
        </div>
    );
}

export default Navbar;
