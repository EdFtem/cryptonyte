import React from 'react'
import Image from 'next/image'
import icon from '../../public/ufo_icon.svg'
import { useMoralis } from 'react-moralis'
import { BsFillHouseFill, BsCoin, BsPersonSquare, BsJournalPlus, BsBookmarks, BsXSquare } from 'react-icons/bs'

const Sidebar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const { authenticate, authError, logout } = useMoralis();

    return (
    <aside class="w-44 fixed left-0 top-0 h-screen shadow-md">
        <div class="pt-4 pb-2 px-6">
            <a href="#!">
            <div class="flex items-center">
                <div class="shrink-0">
                <Image src={icon} className="fill-current h-8 w-8" width="44" height="44"/>
                </div>
                <div class="grow ml-3">
                <p class="text-sm font-semibold text-blue-600">Jason McCoel</p>
                </div>
            </div>
            </a>
        </div>
        <ul class="relative">
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <BsFillHouseFill className='w-3 h-3 mr-3'/>
                <span>Home</span>
            </a>
            </li>
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <BsCoin className='w-3 h-3 mr-3'/>
                <span>Swap</span>
            </a>
            </li>
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">         
                <BsPersonSquare className='w-3 h-3 mr-3'/>
                <span>Profile</span>
            </a>
            </li>
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <BsBookmarks className='w-3 h-3 mr-3'/>
                <span>Lists</span>
            </a>
            </li>
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <BsJournalPlus className='w-3 h-3 mr-3'/>
                <span>Write</span>
            </a>
            </li>
            <li class="relative">
            <a onClick={logout} class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <BsXSquare className='w-3 h-3 mr-3'/>
                <span>Logout</span>
            </a>
            </li>
        </ul>
    </aside>
    )
}

export default Sidebar