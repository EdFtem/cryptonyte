import React from 'react'
import Image from 'next/image'
import icon from '../../public/yoda_icon.svg'
import { useMoralis } from 'react-moralis'
import { BsFillHouseFill, BsCoin, BsPersonSquare, BsJournalPlus, BsBookmarks, BsXSquare } from 'react-icons/bs'

const Sidebar = () => {
    const { logout } = useMoralis();

    const style = {
        sidebaritem: "flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
    };

    return (
    <aside class="w-44 fixed left-0 top-0 h-screen shadow-md">
        <div class="flex justify-center pt-4 pb-2 px-4">
            <a href="#!">
            <div className='flex justify-center'>
                <Image src={icon} className="fill-current h-8 w-8" width="74" height="74"/>
            </div>
            <div>
                <p class="text-sm font-semibold">Jason McCoel</p>
            </div>
            </a>
        </div>
        <ul class="relative mt-6">
            <li class="relative">
            <a class={style.sidebaritem} href="/main" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <BsFillHouseFill className='w-3 h-3 mr-3'/>
                <span>Home</span>
            </a>
            </li>
            <li class="relative">
            <a class={style.sidebaritem} href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <BsCoin className='w-3 h-3 mr-3'/>
                <span>Swap</span>
            </a>
            </li>
            <li class="relative">
            <a class={style.sidebaritem} href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">         
                <BsPersonSquare className='w-3 h-3 mr-3'/>
                <span>Profile</span>
            </a>
            </li>
            <li class="relative">
            <a class={style.sidebaritem} href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <BsBookmarks className='w-3 h-3 mr-3'/>
                <span>Lists</span>
            </a>
            </li>
            <li class="relative">
            <a class={style.sidebaritem} href="/write" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <BsJournalPlus className='w-3 h-3 mr-3'/>
                <span>Write</span>
            </a>
            </li>
            <li class="relative">
            <a onClick={logout} class={style.sidebaritem} href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <BsXSquare className='w-3 h-3 mr-3'/>
                <span>Logout</span>
            </a>
            </li>
        </ul>
    </aside>
    )
}

export default Sidebar