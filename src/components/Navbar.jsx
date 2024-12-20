import React, { Suspense } from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6">
      <Suspense fallback={<div>Loading...</div>}>
        <NavbarItem title="Trending" parameter="fetchTrending" />
        <NavbarItem title="Top Rated" parameter="fetchTopRated" />
      </Suspense>
    </div>
  )
}

export default Navbar
