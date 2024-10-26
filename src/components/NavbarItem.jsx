'use client'

import Link from 'next/link';
import React from 'react';
import { useSearchParams } from 'next/navigation';


const NavbarItem = ({ title, parameter }) => {
    const searchparams = useSearchParams();
    // console.log("searchparams===================", searchparams);
    const genre = searchparams.get('genre');
    // console.log("genre===========", genre);

    return (
        <div>
            <Link className={`hover:text-amber-600 font-semibold
            ${genre && genre === parameter ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg ' : ''}`}
                href={`/?genre=${parameter}`}>
                {title}
            </Link>
        </div>
    )
}

export default NavbarItem