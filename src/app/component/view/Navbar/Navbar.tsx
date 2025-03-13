'use client'
'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Navbararray } from '@/app/component/utils/Navbararray'
import { BiSearch } from 'react-icons/bi'
import { BsCart } from 'react-icons/bs'
import Mobilenavbar from '@/app/subcomponent/Mobilenavbar'
export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="flex items-center px-8 py-6 justify-between ">
      <div>
        <Image src={'/image.png'} alt='logo' width={150} height={150}/>
      </div>

      <div className={` gap-x-8 m-auto text-blue-900 hidden lg:flex `}>
        {Navbararray.map((item, index) => (
          <div 
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link 
              href={item.href}
              className="text-lg font-medieum relative group" >
              {item.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-700 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </Link>

            {/* Dropdown Menu */}
            {item.isDropDown && hoveredItem === item.label && (
              <div className="absolute top-full left-0 w-30 bg-gray-100 shadow-md rounded-md py-2 z-50">
                {item.dropDownData?.map((dropItem, idx) => (
                  <Link 
                    key={idx}
                    href={dropItem.href} 
                    className="block px-4 py-2 hover:bg-gray-100">
                    {dropItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative flex-1 max-w-[400px] ml-auto  items-center border rounded-md focus-within:border-black hidden lg:flex">
        <BiSearch className="text-gray-400 text-xl ml-2 " />
        <input 
          type="text" 
          placeholder="Search products..." 
          className="w-full pl-1 pr-4 py-1 focus:outline-none rounded-md"
        />
      </div>

      {/* Cart Icon */}
      <div className="relative ml-4">
        <Link href="/cart">
          <div className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden lg:flex" >
            <BsCart className="text-2xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
          </div>
        </Link>
      </div>
     <div>
   <Mobilenavbar/>
     </div>
    </div>
  )
}

