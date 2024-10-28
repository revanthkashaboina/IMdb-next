'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBox = () => {
    const [search, setSearch]= useState('');
    const router = useRouter();


    const handleChange = (e) =>{
        setSearch(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim()) {
            router.push(`/search/${search}`);
        }
    };

  return (
    <form className="flex justify-between px-5 max-w-6xl mx-auto" onSubmit={handleSubmit}>
        <input type="text" placeholder="search keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        value={search}
        onChange={handleChange}
        />
        <button className="text-amber-600 disabled:text-gray-400" disabled={search === ''}>Search</button>
    </form>
  )
}

export default SearchBox