import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
        <NavbarItem title="Trending" parameter="fetchTrending" />
        <NavbarItem title="Top Rated" parameter="fetchTopRated" />
    </div>
  )
}

export default Navbar