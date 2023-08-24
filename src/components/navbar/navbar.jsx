"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const [nav, setNav] =  useState(false)
    
    return (
        <div className='fixed top-0 left-0 right-0 bg-[#282C33] w-[100%] z-10'>
            <div className="container mx-auto  ">
                <div className=' flex text-white items-center justify-between mt-4 py-3'>
                    {/* logo */}
                    <Link href="/google.com" className='flex items-center gap-2'>

                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z" fill="white" />
                        </svg></span>
                        Ridhwan
                    </Link>

                    <div className='hidden'>
                        {/*these are the links  */}
                        <ul class="flex space-x-4 justify-end">
                            <li className='#FFFFFF text-[16px] font-medium'><a href="#" ><span className='text-[#C778DD] text-[16px] font-medium'>#</span>Home</a></li>
                            <li className='#FFFFFF text-[16px] font-medium'><a href="#" ><span className='text-[#C778DD] text-[16px] font-medium'>#</span>About</a></li>
                            <li className='#FFFFFF text-[16px] font-medium'><a href="#" ><span className='text-[#C778DD] text-[16px] font-medium'>#</span>Contact</a></li>


                        </ul>
                    </div>
                    <div onClick={()=>setNav(!nav)} >
                    {nav ? <GiHamburgerMenu /> : "l"}
                    <div>
                        {/*these are the links  */}
                        <ul class="flex space-x-4 justify-end">
                            <li className='#FFFFFF text-[16px] font-medium'><a href="#" ><span className='text-[#C778DD] text-[16px] font-medium'>#</span>Home</a></li>
                            <li className='#FFFFFF text-[16px] font-medium'><a href="#" ><span className='text-[#C778DD] text-[16px] font-medium'>#</span>About</a></li>
                            <li className='#FFFFFF text-[16px] font-medium'><a href="#" ><span className='text-[#C778DD] text-[16px] font-medium'>#</span>Contact</a></li>


                        </ul>
                    </div>
                    </div>
                    
                </div>



            </div>

        </div>
    )
}

export default Navbar