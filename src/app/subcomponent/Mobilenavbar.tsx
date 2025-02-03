'use client'

import React from 'react'
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { Navbararray, Navbaritemtype } from '@/app/component/utils/Navbararray'
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';

const Mobilenavbar = () => {
    const [isnavbaropen, setnavbar] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleNavbar = () => {
        setnavbar(!isnavbaropen);
    };

    const toggleDropdown = (e: React.MouseEvent, label: string) => {
        
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    return (
        <div className="">
            <div className='flex lg:hidden' onClick={toggleNavbar}>
                {isnavbaropen ? <IoMdClose className='relative' size={20}/> : <RxHamburgerMenu className='' size={20}/>}
            </div>
            {isnavbaropen && (
                <div className=" absolute right-0 top-20     w-full bg-gray-100 shadow-lg rounded-md py-2     ">
                    {Navbararray.map((item: Navbaritemtype) => (
                        <div key={item.label}>
                            <div 
                                className="flex justify-between items-center px-4 py-2 hover:bg-blue-40 0 cursor-pointer transition-colors duration-200"
                                onClick={(e) => item.isDropDown ? toggleDropdown(e, item.label) : null}
                            >
                                {item.isDropDown ? (
                                    <span className="text-gray-800 flex-grow">{item.label}</span>
                                ) : (
                                    <Link href={item.href} className="text-gray-800 flex-grow">
                                        {item.label}
                                    </Link>
                                )}
                                {item.isDropDown && (
                                    <IoIosArrowDown 
                                        className={`ml-2 text-gray-600 transition-transform duration-200 ${
                                            activeDropdown === item.label ? 'rotate-180' : ''
                                        }`}
                                        size={20}
                                    />
                                )}
                            </div>
                            
                            {/* Dropdown Items */}
                            {item.isDropDown && activeDropdown === item.label && (
                                <div className="bg-gray-50 pl-8 border-l-2 border-blue-200 ml-4">
                                    {item.dropDownData?.map((dropItem, idx) => (
                                        <Link
                                            key={idx}
                                            href={dropItem.href}
                                            className="block px-4 py-2 hover:bg-blue-100 text-gray-600 transition-colors duration-200"
                                        >
                                            {dropItem.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Mobilenavbar